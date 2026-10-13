const STATIONS = [
  { id: "amistat", tab: "Amistat", code: "121", page: "https://horariosvlc.es/metro/estacion/amistat" },
  { id: "angel-guimera", tab: "Angel Guimera", code: "25", page: "https://horariosvlc.es/metro/estacion/angel-guimera" },
];

const LINE_COLORS = {
  1: ["#E6B325", "#1b1714"],
  2: ["#D4145A", "#fff"],
  3: ["#DD052C", "#fff"],
  4: ["#6FBE44", "#1b1714"],
  5: ["#3A30C0", "#fff"],
  6: ["#7B3F8D", "#fff"],
  7: ["#18AAD8", "#fff"],
  8: ["#7A7A7A", "#fff"],
  9: ["#F18F01", "#1b1714"],
  10: ["#00A3A1", "#fff"],
};

const REFRESH_MS = 45_000;
const app = document.querySelector("#app");
const status = document.querySelector("#status");
const panel = document.querySelector("#panel");
const tabs = [...document.querySelectorAll(".tab")];

const cache = new Map();
let activeId = "amistat";
let view = null;

function stationById(id) {
  return STATIONS.find((station) => station.id === id);
}

function stationFromHash() {
  const id = location.hash.replace("#", "");
  return stationById(id) ? id : "amistat";
}

function endpoint(station) {
  return `https://geoportal.valencia.es/geoportal-services/api/v1/salidas-metro.html?estacion=${station.code}&lang=es`;
}

function decodeHtml(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num)))
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function madridSeconds(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Madrid",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const read = (type) => Number(parts.find((part) => part.type === type).value);
  return read("hour") * 3600 + read("minute") * 60 + read("second");
}

function parseDepartures(html) {
  const now = madridSeconds();
  const departures = [];
  const pattern = /linea_metro_(\d+)\.png[\s\S]*?<b>([^<]*)<\/b>\s*-\s*<span>(\d{2}:\d{2}:\d{2})<\/span>/g;
  for (const match of html.matchAll(pattern)) {
    const [hour, minute, second] = match[3].split(":").map(Number);
    let delta = hour * 3600 + minute * 60 + second - now;
    let tomorrow = false;
    if (delta < -90) {
      delta += 24 * 3600;
      tomorrow = true;
    }
    const [color, text] = LINE_COLORS[match[1]] || ["#555", "#fff"];
    departures.push({
      time: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`,
      headsign: decodeHtml(match[2]),
      tomorrow,
      at: Date.now() + delta * 1000,
      line: { chip: `L${match[1]}`, color, text },
    });
    if (departures.length === 16) break;
  }
  return departures;
}

function formatWait(minutes) {
  const value = Math.max(0, Math.round(minutes));
  if (value === 0) return "ahora";
  const hours = Math.floor(value / 60);
  const rest = value % 60;
  if (hours === 0) return `${rest} min`;
  if (rest === 0) return `${hours} h`;
  return `${hours} h ${rest} min`;
}

function minutesUntil(departure) {
  if (typeof departure.at === "number") return (departure.at - Date.now()) / 60_000;
  return departure.minutes ?? 0;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function chip(code, color, text) {
  return `<span class="chip" style="--c:${escapeHtml(color)};color:${escapeHtml(text || "#fff")}">${escapeHtml(code)}</span>`;
}

function waitLabel(departure) {
  const delay = typeof departure.delay === "number" && departure.delay !== 0
    ? ` ${departure.delay > 0 ? "+" : ""}${departure.delay}`
    : "";
  return formatWait(minutesUntil(departure)) + delay;
}

function departureRows(departures) {
  if (!departures.length) return '<p class="empty">No hay salidas.</p>';
  return departures.map((departure) => `<article class="row">
      <span class="time">${escapeHtml(departure.time || "")}${departure.tomorrow ? '<small class="day">mañana</small>' : ""}</span>
      ${chip(departure.line?.chip || "", departure.line?.color || "#333", departure.line?.text)}
      <span class="dest">${escapeHtml(departure.headsign || "")}</span>
      <span class="wait">${escapeHtml(waitLabel(departure))}</span>
    </article>`).join("");
}

function paintWaits() {
  if (!view) return;
  const waits = document.querySelectorAll("#rows .wait");
  view.departures.forEach((departure, index) => {
    if (waits[index]) waits[index].textContent = waitLabel(departure);
  });
}

function render(data) {
  app.hidden = false;
  status.hidden = true;
  const fresh = data.realtime ? "en directo" : "horario";
  const updated = data.updated ? ` ${data.updated}` : "";
  document.querySelector("#fresh").textContent = `${fresh}${updated}`;
  app.innerHTML = `
    <section class="board" aria-label="Próximas salidas">
      <div id="rows">${departureRows(data.departures)}</div>
    </section>
  `;
}

async function load(id) {
  const station = stationById(id);
  const cached = cache.get(id);
  if (cached) {
    view = cached;
    render(cached);
  } else {
    status.hidden = false;
    status.textContent = "Cargando…";
    app.hidden = true;
    app.innerHTML = "";
  }

  const response = await fetch(endpoint(station));
  if (!response.ok) throw new Error("No se pudo cargar el horario");
  const departures = parseDepartures(await response.text());
  if (activeId !== id) return;
  view = {
    id: station.id,
    page: station.page,
    departures,
    realtime: true,
    updated: new Intl.DateTimeFormat("es-ES", {
      timeZone: "Europe/Madrid",
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    }).format(new Date()),
    fetchedAt: Date.now(),
  };
  cache.set(station.id, view);
  render(view);
}

function showError(error) {
  const fresh = document.querySelector("#fresh");
  if (view && view.id === activeId && fresh && document.querySelector("#rows")) {
    fresh.textContent = "sin actualizar";
    return;
  }
  app.hidden = false;
  status.hidden = true;
  app.innerHTML = `<div class="error"><strong>No se pudieron cargar las salidas.</strong><p>${escapeHtml(error.message)}</p></div>`;
}

function selectTab(id, updateHash) {
  activeId = id;
  tabs.forEach((tab) => {
    const selected = tab.dataset.station === id;
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    if (selected) panel.setAttribute("aria-labelledby", tab.id);
  });
  if (updateHash) history.replaceState(null, "", `#${id}`);
  load(id).catch(showError);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => selectTab(tab.dataset.station, true));
});

window.addEventListener("hashchange", () => selectTab(stationFromHash(), false));

selectTab(stationFromHash(), false);
setInterval(paintWaits, 1000);
setInterval(() => {
  load(activeId).catch(showError);
}, REFRESH_MS);
