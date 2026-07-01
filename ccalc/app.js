(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const fields = {
    apartmentCost: $("apartmentCost"),
    downPayment: $("downPayment"),
    downPaymentPercent: $("downPaymentPercent"),
    loanAmount: $("loanAmount"),
    rate1: $("rate1"),
    termYears: $("termYears"),
    monthlyPayment1: $("monthlyPayment1"),
    homeInsurance: $("homeInsurance"),
    lifeInsurance: $("lifeInsurance"),
    purchaseTaxPercent: $("purchaseTaxPercent"),
    purchaseTaxAmount: $("purchaseTaxAmount"),
    agent1Percent: $("agent1Percent"),
    agent1Amount: $("agent1Amount"),
    agent2Percent: $("agent2Percent"),
    agent2Amount: $("agent2Amount"),
    agent2SharePercent: $("agent2SharePercent"),
    agent2Payable: $("agent2Payable"),
    initialExpenses: $("initialExpenses"),
    initialExpensesHint: $("initialExpensesHint"),
    monthlyBreakdown1: $("monthlyBreakdown1"),
    monthlyHint1: $("monthlyHint1"),
  };

  let syncSource = null;

  function parseNum(input) {
    const value = Number(input.value);
    return Number.isFinite(value) ? value : 0;
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function formatMoney(value) {
    return new Intl.NumberFormat("ru-RU", {
      maximumFractionDigits: 0,
    }).format(Math.round(value));
  }

  function calcMonthlyPayment(principal, annualRatePercent, termYears) {
    if (principal <= 0 || termYears <= 0) {
      return 0;
    }

    const months = termYears * 12;
    const monthlyRate = annualRatePercent / 100 / 12;

    if (monthlyRate === 0) {
      return principal / months;
    }

    const factor = Math.pow(1 + monthlyRate, months);
    return (principal * monthlyRate * factor) / (factor - 1);
  }

  function setOutput(el, value) {
    el.textContent = formatMoney(value);
  }

  function syncDownPaymentFromCost() {
    const cost = parseNum(fields.apartmentCost);
    const percent = parseNum(fields.downPaymentPercent);
    const down = clamp((cost * percent) / 100, 0, cost);
    fields.downPayment.value = Math.round(down);
  }

  function syncDownPaymentPercentFromAmount() {
    const cost = parseNum(fields.apartmentCost);
    const down = parseNum(fields.downPayment);
    const percent = cost > 0 ? (down / cost) * 100 : 0;
    fields.downPaymentPercent.value = percent.toFixed(1);
  }

  function recalculate() {
    const cost = Math.max(0, parseNum(fields.apartmentCost));
    let down = clamp(parseNum(fields.downPayment), 0, cost);

    if (syncSource === "percent") {
      down = clamp((cost * parseNum(fields.downPaymentPercent)) / 100, 0, cost);
      fields.downPayment.value = Math.round(down);
    } else if (syncSource === "down") {
      const percent = cost > 0 ? (down / cost) * 100 : 0;
      fields.downPaymentPercent.value = percent.toFixed(1);
    } else if (syncSource === "cost") {
      syncDownPaymentFromCost();
      down = clamp(parseNum(fields.downPayment), 0, cost);
    }

    const loan = Math.max(0, cost - down);
    setOutput(fields.loanAmount, loan);

    const termYears = Math.max(1, parseNum(fields.termYears));
    const rate1 = parseNum(fields.rate1);

    const mortgage1 = calcMonthlyPayment(loan, rate1, termYears);

    setOutput(fields.monthlyPayment1, mortgage1);

    const homeAnnual = Math.max(0, parseNum(fields.homeInsurance));
    const lifeAnnual = Math.max(0, parseNum(fields.lifeInsurance));
    const insuranceMonthly = (homeAnnual + lifeAnnual) / 12;

    const total1 = mortgage1 + insuranceMonthly;

    const taxPercent = parseNum(fields.purchaseTaxPercent);
    const taxAmount = (cost * taxPercent) / 100;
    setOutput(fields.purchaseTaxAmount, taxAmount);

    const agent1Percent = parseNum(fields.agent1Percent);
    const agent2Percent = parseNum(fields.agent2Percent);
    const agent2SharePercent = parseNum(fields.agent2SharePercent);

    const agent1Amount = (cost * agent1Percent) / 100;
    const agent2Amount = (cost * agent2Percent) / 100;
    const agent2Extra = (agent2Amount * agent2SharePercent) / 100;
    const agent2Total = agent2Amount + agent2Extra;

    setOutput(fields.agent1Amount, agent1Amount);
    setOutput(fields.agent2Amount, agent2Amount);
    setOutput(fields.agent2Payable, agent2Total);

    const initial = down + taxAmount + agent1Amount + agent2Total;
    setOutput(fields.initialExpenses, initial);

    fields.initialExpensesHint.textContent =
      `${formatMoney(down)} (взнос) + ${formatMoney(taxAmount)} (налог) + ` +
      `${formatMoney(agent1Amount)} (агент 1) + ${formatMoney(agent2Amount)} (агент 2) + ` +
      `${formatMoney(agent2Extra)} (${agent2SharePercent}% от комиссии агента 2)`;

    fields.monthlyBreakdown1.textContent = formatMoney(total1);

    fields.monthlyHint1.textContent =
      `Ипотека: ${formatMoney(mortgage1)}, страховки: ${formatMoney(insuranceMonthly)}`;
  }

  function bindInput(el, source) {
    el.addEventListener("input", () => {
      syncSource = source;
      recalculate();
      syncSource = null;
    });
  }

  const syncSources = {
    apartmentCost: "cost",
    downPayment: "down",
    downPaymentPercent: "percent",
  };

  function getStepDecimals(step) {
    const parts = String(step).split(".");
    return parts.length > 1 ? parts[1].length : 0;
  }

  function stepInput(input, direction) {
    const step = parseFloat(input.step) || 1;
    const min = input.min !== "" ? parseFloat(input.min) : -Infinity;
    const max = input.max !== "" ? parseFloat(input.max) : Infinity;
    const decimals = getStepDecimals(step);
    let value = parseFloat(input.value) || 0;
    value = clamp(value + direction * step, min, max);

    if (decimals > 0) {
      value = Number(value.toFixed(decimals));
    } else {
      value = Math.round(value);
    }

    input.value = value;
    syncSource = syncSources[input.id] ?? null;
    recalculate();
    syncSource = null;
  }

  function initSteppers() {
    document.querySelectorAll(".calculator input[type='number']").forEach((input) => {
      const wrapper = document.createElement("div");
      wrapper.className = "field-stepper";
      input.parentNode.insertBefore(wrapper, input);
      wrapper.appendChild(input);

      const btnDec = document.createElement("button");
      btnDec.type = "button";
      btnDec.className = "stepper-btn stepper-btn--dec";
      btnDec.setAttribute("aria-label", "Уменьшить");
      btnDec.textContent = "−";

      const btnInc = document.createElement("button");
      btnInc.type = "button";
      btnInc.className = "stepper-btn stepper-btn--inc";
      btnInc.setAttribute("aria-label", "Увеличить");
      btnInc.textContent = "+";

      wrapper.appendChild(btnDec);
      wrapper.appendChild(btnInc);

      btnDec.addEventListener("click", () => stepInput(input, -1));
      btnInc.addEventListener("click", () => stepInput(input, 1));
    });
  }

  bindInput(fields.apartmentCost, "cost");
  bindInput(fields.downPayment, "down");
  bindInput(fields.downPaymentPercent, "percent");
  bindInput(fields.rate1, null);
  bindInput(fields.termYears, null);
  bindInput(fields.homeInsurance, null);
  bindInput(fields.lifeInsurance, null);
  bindInput(fields.purchaseTaxPercent, null);
  bindInput(fields.agent1Percent, null);
  bindInput(fields.agent2Percent, null);
  bindInput(fields.agent2SharePercent, null);

  initSteppers();
  recalculate();
})();
