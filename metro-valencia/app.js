const STATIONS = [
  { id: "amistat", tab: "Amistat", page: "https://horariosvlc.es/metro/estacion/amistat" },
  { id: "angel-guimera", tab: "Angel Guimera", page: "https://horariosvlc.es/metro/estacion/angel-guimera" },
];

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

function pageParam(station) {
  const remote = location.protocol === "http:" || location.protocol === "https:";
  return encodeURIComponent(remote ? location.href : station.page);
}

function endpoint(station) {
  return `https://horariosvlc.es/api/widget/parada/metro/${station.id}?n=16&u=${pageParam(station)}`;
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
      <span class="chip" style="--c:${escapeHtml(departure.line?.color || "#333")}">${escapeHtml(departure.line?.chip || "")}</span>
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
  app.innerHTML = `
    <section class="board" aria-label="Próximas salidas">
      <div id="rows">${departureRows(data.departures)}</div>
      <p class="meta"><span>${fresh}${escapeHtml(updated)}</span><a href="${escapeHtml(data.page)}" target="_blank" rel="noopener">Horario completo</a></p>
    </section>
  `;
}

function remember(station, payload) {
  view = {
    id: station.id,
    page: payload.stop?.url || station.page,
    departures: payload.departures || [],
    realtime: Boolean(payload.realtime),
    updated: payload.updated || "",
    fetchedAt: Date.now(),
  };
  cache.set(station.id, view);
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
  const payload = await response.json();
  if (!response.ok || payload.error) {
    throw new Error(payload.error || "No se pudo cargar el horario");
  }
  if (activeId !== id) return;
  remember(station, payload);
  render(view);
}

function showError(error) {
  const meta = document.querySelector(".meta span");
  if (view && view.id === activeId && meta) {
    meta.textContent = "sin actualizar";
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
