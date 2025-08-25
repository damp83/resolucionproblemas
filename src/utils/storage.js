export const LS_KEY = 'ap_bank_v1';

const defaultProblems = [
  { id: 'p1', grade: 1, question: "Si tengo 6 manzanas y me regalan 2 más, ¿cuántas manzanas tengo ahora?", type: "CAMBIO", data: { ci: "6", c: "2", cf: "?" }, labels: { ci: "Manzanas Iniciales", c: "Cambio (+)", cf: "Manzanas Finales" }, operation: "+", answer: "8" },
  { id: 'p2', grade: 1, question: "Hay 8 pájaros en una rama. Si 3 se van volando, ¿cuántos quedan?", type: "CAMBIO", data: { ci: "8", c: "3", cf: "?" }, labels: { ci: "Pájaros Iniciales", c: "Cambio (-)", cf: "Pájaros Finales" }, operation: "-", answer: "5" },
  { id: 'p3', grade: 2, question: "Ana tiene 15 cromos y Luis tiene 9. ¿Cuántos cromos tiene Ana más que Luis?", type: "COMPARACION", data: { cm: "15", cmen: "9", d: "?" }, labels: { cm: "Cantidad Mayor (Ana)", cmen: "Cantidad Menor (Luis)", d: "Diferencia" }, operation: "-", answer: "6" }
];

export function loadProblems() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  localStorage.setItem(LS_KEY, JSON.stringify(defaultProblems));
  return defaultProblems;
}

export function saveProblems(list) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(list)); } catch (e) { console.error(e); }
}
