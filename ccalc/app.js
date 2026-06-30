(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const fields = {
    apartmentCost: $("apartmentCost"),
    downPayment: $("downPayment"),
    downPaymentPercent: $("downPaymentPercent"),
    loanAmount: $("loanAmount"),
    rate1: $("rate1"),
    rate2: $("rate2"),
    termYears: $("termYears"),
    monthlyPayment1: $("monthlyPayment1"),
    monthlyPayment2: $("monthlyPayment2"),
    homeInsurance: $("homeInsurance"),
    lifeInsurance: $("lifeInsurance"),
    totalMonthly1: $("totalMonthly1"),
    totalMonthly2: $("totalMonthly2"),
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
    monthlyBreakdown2: $("monthlyBreakdown2"),
    monthlyHint1: $("monthlyHint1"),
    monthlyHint2: $("monthlyHint2"),
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
    const rate2 = parseNum(fields.rate2);

    const mortgage1 = calcMonthlyPayment(loan, rate1, termYears);
    const mortgage2 = calcMonthlyPayment(loan, rate2, termYears);

    setOutput(fields.monthlyPayment1, mortgage1);
    setOutput(fields.monthlyPayment2, mortgage2);

    const homeAnnual = Math.max(0, parseNum(fields.homeInsurance));
    const lifeAnnual = Math.max(0, parseNum(fields.lifeInsurance));
    const insuranceMonthly = (homeAnnual + lifeAnnual) / 12;

    const total1 = mortgage1 + insuranceMonthly;
    const total2 = mortgage2 + insuranceMonthly;

    setOutput(fields.totalMonthly1, total1);
    setOutput(fields.totalMonthly2, total2);

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
    fields.monthlyBreakdown2.textContent = formatMoney(total2);

    fields.monthlyHint1.textContent =
      `Ипотека: ${formatMoney(mortgage1)}, страховки: ${formatMoney(insuranceMonthly)}`;
    fields.monthlyHint2.textContent =
      `Ипотека: ${formatMoney(mortgage2)}, страховки: ${formatMoney(insuranceMonthly)}`;
  }

  function bindInput(el, source) {
    el.addEventListener("input", () => {
      syncSource = source;
      recalculate();
      syncSource = null;
    });
  }

  bindInput(fields.apartmentCost, "cost");
  bindInput(fields.downPayment, "down");
  bindInput(fields.downPaymentPercent, "percent");
  bindInput(fields.rate1, null);
  bindInput(fields.rate2, null);
  bindInput(fields.termYears, null);
  bindInput(fields.homeInsurance, null);
  bindInput(fields.lifeInsurance, null);
  bindInput(fields.purchaseTaxPercent, null);
  bindInput(fields.agent1Percent, null);
  bindInput(fields.agent2Percent, null);
  bindInput(fields.agent2SharePercent, null);

  recalculate();
})();
