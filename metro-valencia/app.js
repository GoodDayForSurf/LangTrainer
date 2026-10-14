const CATALOG = [
  ["182", "Aeroport"], ["190", "Alacant"], ["69", "Alameda"], ["60", "Albalat dels Sorells"],
  ["2", "Alberic"], ["79", "Alboraia Palmaret"], ["56", "Alboraia Peris Aragó"], ["128", "Alfauir"],
  ["9", "Alginet"], ["57", "Almàssera"], ["192", "Amado Granell - Montolivet"], ["121", "Amistat"],
  ["25", "Àngel Guimerà"], ["110", "À Punt"], ["120", "Aragó"], ["8", "Ausiàs March"],
  ["73", "Av. del Cid"], ["122", "Ayora"], ["108", "Bailén"], ["53", "Benaguasil"],
  ["82", "Benicalap"], ["28", "Beniferri"], ["67", "Benimaclet"], ["41", "Benimàmet"],
  ["6", "Benimodo"], ["39", "Bétera"], ["94", "Beteró"], ["30", "Burjassot"],
  ["31", "Burjassot - Godella"], ["99", "Cabanyal"], ["43", "Campament"], ["27", "Campanar"],
  ["103", "Campus"], ["40", "Cantereria"], ["127", "Canyamelar"], ["7", "Carlet"],
  ["1", "Castelló"], ["194", "Ciutat Arts i Ciències - Justícia"], ["16", "Col·legi El Vedat"], ["70", "Colón"],
  ["98", "Dr. Lluch"], ["48", "El Clot"], ["29", "Empalme"], ["65", "Entrepins"],
  ["11", "Espioca"], ["130", "Estadi Ciutat de València"], ["68", "Facultats - Manuel Broseta"], ["177", "Faitanar"],
  ["100", "Fira València"], ["80", "Florista"], ["59", "Foios"], ["52", "Fondo de Benaguasil"],
  ["10", "Font Almaguer"], ["198", "Font del Barranc"], ["124", "Francesc Cubells"], ["45", "Fuente del Jarro"],
  ["119", "Gallipont - Torre del Virrei"], ["81", "Garbí"], ["32", "Godella"], ["125", "Grau - La Marina"],
  ["38", "Horta Vella"], ["23", "Jesús"], ["95", "La Cadena"], ["46", "La Canyada"],
  ["92", "La Carrasca"], ["113", "La Coma"], ["183", "La Cova"], ["105", "La Granja"],
  ["5", "L'Alcúdia"], ["63", "La Pobla de Farnals"], ["51", "La Pobla de Vallbona"], ["184", "La Presa"],
  ["47", "La Vallesa"], ["50", "L'Eliana"], ["42", "Les Carolines - Fira"], ["54", "Llíria"],
  ["115", "Ll. Llarga - Terramelar"], ["66", "Machado"], ["180", "Manises"], ["123", "Marítim"],
  ["84", "Marxalenes"], ["114", "Mas del Rosari"], ["185", "Masia de Traver"], ["37", "Masies"],
  ["3", "Massalavés"], ["62", "Massamagrell"], ["34", "Massarrojos"], ["58", "Meliana"],
  ["75", "Mislata"], ["76", "Mislata Almassil"], ["35", "Moncada - Alfara"], ["49", "Montesol"],
  ["4", "Montortal"], ["196", "Moreres"], ["61", "Museros"], ["197", "Natzaret"],
  ["126", "Neptú"], ["74", "Nou d'Octubre"], ["195", "Oceanogràfic"], ["12", "Omet"],
  ["129", "Orriols"], ["19", "Paiporta"], ["55", "Palau de Congressos"], ["111", "Parc Científic"],
  ["44", "Paterna"], ["22", "Patraix"], ["18", "Picanya"], ["13", "Picassent"],
  ["97", "Platja les Arenes"], ["96", "Platja Malva-rosa"], ["24", "Pl. Espanya"], ["87", "Pont de Fusta"],
  ["178", "Quart de Poblet"], ["193", "Quatre Carreres"], ["64", "Rafelbunyol"], ["15", "Realón"],
  ["85", "Reus"], ["186", "Riba-roja de Túria"], ["33", "Rocafort"], ["181", "Roses"],
  ["191", "Russafa"], ["21", "Safranar"], ["86", "Sagunt"], ["179", "Salt de l'Aigua"],
  ["77", "Santa Rita"], ["78", "Sant Isidre"], ["104", "Sant Joan"], ["131", "Sant Miquel dels Reis"],
  ["14", "Sant Ramon"], ["36", "Seminari - CEU"], ["93", "Tarongers - Ernest Lluch"], ["112", "Tomás y Valiente"],
  ["17", "Torrent"], ["107", "Torrent Avinguda"], ["132", "Tossal del Rei"], ["83", "Trànsits"],
  ["88", "Trinitat"], ["26", "Túria"], ["91", "Universitat Politècnica"], ["188", "València la Vella"],
  ["20", "València Sud"], ["102", "Vicent Andrés Estellés"], ["90", "Vicente Zaragozá"], ["71", "Xàtiva"],
];

function fold(value) {
  return value.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function slugify(value) {
  return fold(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const usedIds = new Map();
const STATIONS = CATALOG.map(([code, name]) => {
  let id = slugify(name);
  if (usedIds.has(id)) id = `${id}-${code}`;
  usedIds.set(id, code);
  return { id, tab: name, code, page: `https://horariosvlc.es/metro/estacion/${id}` };
});

const DEFAULT_SLOTS = ["amistat", "angel-guimera"];

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
const dock = document.querySelector(".tabs");
const slotEls = [...document.querySelectorAll(".slot")];
const links = document.querySelector("#links");

const cache = new Map();
let activeId = "amistat";
let view = null;
let slots = readSlots();

function stationById(id) {
  return STATIONS.find((station) => station.id === id);
}

function stationFromHash() {
  const id = location.hash.replace("#", "");
  return stationById(id) ? id : slots[0] || "amistat";
}

function readSlots() {
  try {
    const saved = JSON.parse(localStorage.getItem("metro-valencia-slots"));
    if (Array.isArray(saved) && saved.length === 2 && saved.every((id) => stationById(id)) && saved[0] !== saved[1]) {
      return saved;
    }
  } catch { /* keep the two home stations */ }
  return [...DEFAULT_SLOTS];
}

function saveSlots() {
  try { localStorage.setItem("metro-valencia-slots", JSON.stringify(slots)); } catch { /* private mode */ }
}

function ensureSlot(id) {
  if (!stationById(id) || slots.includes(id)) return;
  const index = slots.findIndex((slotId) => slotId !== activeId);
  slots[index === -1 ? 0 : index] = id;
  saveSlots();
  paintSlot(index === -1 ? 0 : index);
  paintLinks();
}

function paintSlot(index) {
  const station = stationById(slots[index]);
  const slot = slotEls[index];
  const tab = slot.querySelector(".tab");
  tab.dataset.station = station.id;
  tab.id = `tab-${station.id}`;
  tab.textContent = station.tab;
  tab.title = station.tab;
  slot.querySelector(".find").setAttribute("aria-label", `Buscar estación en lugar de ${station.tab}`);
}

function paintLinks() {
  links.innerHTML = slots.map((id) => {
    const station = stationById(id);
    return `<a href="${escapeHtml(station.page)}" target="_blank" rel="noopener">${escapeHtml(station.tab)}</a>`;
  }).join("");
}

function searchStations(query) {
  const folded = fold(query.trim());
  if (!folded) return [];
  return STATIONS
    .map((station) => ({ station, at: fold(station.tab).indexOf(folded) }))
    .filter((item) => item.at >= 0)
    .sort((a, b) => a.at - b.at || a.station.tab.localeCompare(b.station.tab, "es"))
    .slice(0, 8)
    .map((item) => item.station);
}

function pinDock() {
  if (!window.visualViewport) return;
  const open = dock.querySelector(".slot.is-search");
  if (!open) {
    dock.style.transform = "";
    return;
  }
  const viewport = window.visualViewport;
  const overlap = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
  dock.style.transform = overlap ? `translateY(-${overlap}px)` : "";
}

function closeFinder(slot) {
  slot.classList.remove("is-search");
  const find = slot.querySelector(".find");
  const input = slot.querySelector(".query");
  const list = slot.querySelector(".suggest");
  find.setAttribute("aria-expanded", "false");
  input.hidden = true;
  input.value = "";
  list.hidden = true;
  list.innerHTML = "";
  pinDock();
}

function closeFinders() {
  slotEls.forEach(closeFinder);
}

function renderSuggest(slot) {
  const list = slot.querySelector(".suggest");
  const matches = searchStations(slot.querySelector(".query").value);
  if (!slot.querySelector(".query").value.trim()) {
    list.hidden = true;
    list.innerHTML = "";
    return;
  }
  list.hidden = false;
  if (!matches.length) {
    list.innerHTML = '<li class="none">Sin estaciones</li>';
    return;
  }
  list.innerHTML = matches.map((station, index) =>
    `<li><button type="button" class="option" role="option" data-id="${station.id}" ${index === 0 ? 'aria-selected="true"' : ""}>${escapeHtml(station.tab)}</button></li>`
  ).join("");
}

function chosenStation(slot) {
  const query = fold(slot.querySelector(".query").value.trim());
  const exact = STATIONS.find((station) => fold(station.tab) === query);
  if (exact) return exact;
  const marked = slot.querySelector('.option[aria-selected="true"]');
  return marked ? stationById(marked.dataset.id) : null;
}

function openFinder(slot) {
  slotEls.forEach((other) => { if (other !== slot) closeFinder(other); });
  slot.classList.add("is-search");
  const find = slot.querySelector(".find");
  const input = slot.querySelector(".query");
  find.setAttribute("aria-expanded", "true");
  input.hidden = false;
  input.value = "";
  renderSuggest(slot);
  input.focus();
  pinDock();
  setTimeout(pinDock, 300);
}

function assignSlot(index, station) {
  const other = 1 - index;
  closeFinder(slotEls[index]);
  if (slots[other] === station.id) {
    selectTab(station.id, true);
    return;
  }
  slots[index] = station.id;
  saveSlots();
  paintSlot(index);
  paintLinks();
  selectTab(station.id, true);
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
  const station = stationById(id) || stationById(slots[0]);
  activeId = station.id;
  slotEls.forEach((slot) => {
    const tab = slot.querySelector(".tab");
    const selected = tab.dataset.station === station.id;
    tab.setAttribute("aria-selected", selected ? "true" : "false");
    if (selected) panel.setAttribute("aria-labelledby", tab.id);
  });
  if (updateHash) history.replaceState(null, "", `#${station.id}`);
  load(station.id).catch(showError);
}

function onQueryKey(event, slot, index) {
  const options = [...slot.querySelectorAll(".option")];
  const current = options.findIndex((option) => option.getAttribute("aria-selected") === "true");
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    if (!options.length) return;
    const next = event.key === "ArrowDown"
      ? (current + 1) % options.length
      : (current - 1 + options.length) % options.length;
    options.forEach((option, optionIndex) => {
      option.setAttribute("aria-selected", optionIndex === next ? "true" : "false");
    });
    options[next].scrollIntoView({ block: "nearest" });
    return;
  }
  if (event.key === "Enter") {
    event.preventDefault();
    const station = chosenStation(slot);
    if (station) assignSlot(index, station);
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closeFinder(slot);
    slot.querySelector(".tab").focus();
  }
}

const hashId = location.hash.replace("#", "");
if (stationById(hashId)) ensureSlot(hashId);
slotEls.forEach((_, index) => paintSlot(index));
paintLinks();

slotEls.forEach((slot, index) => {
  slot.querySelector(".find").addEventListener("click", () => {
    if (slot.classList.contains("is-search")) closeFinder(slot);
    else openFinder(slot);
  });
  slot.querySelector(".tab").addEventListener("click", () => {
    closeFinders();
    selectTab(slot.querySelector(".tab").dataset.station, true);
  });
  slot.querySelector(".query").addEventListener("input", () => renderSuggest(slot));
  slot.querySelector(".query").addEventListener("keydown", (event) => onQueryKey(event, slot, index));
  const list = slot.querySelector(".suggest");
  list.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".option")) event.preventDefault();
  });
  list.addEventListener("click", (event) => {
    const option = event.target.closest(".option");
    if (!option) return;
    assignSlot(index, stationById(option.dataset.id));
  });
});

document.addEventListener("pointerdown", (event) => {
  if (!event.target.closest(".slot.is-search")) closeFinders();
});

if (window.visualViewport) {
  visualViewport.addEventListener("resize", pinDock);
  visualViewport.addEventListener("scroll", pinDock);
}

window.addEventListener("hashchange", () => {
  const id = stationFromHash();
  ensureSlot(id);
  closeFinders();
  selectTab(id, false);
});

selectTab(stationFromHash(), false);
setInterval(paintWaits, 1000);
setInterval(() => {
  load(activeId).catch(showError);
}, REFRESH_MS);
