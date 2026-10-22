// Mismo lenguaje que la versión larga: todo entra como un sello, cortes secos al golpe.
const golpe = (id, fuerza) => {
  tl.fromTo(`#cam-${id}`, { scale: fuerza }, { scale: 1, duration: 0.45, ease: "expo.out" }, P[id].ini);
  tl.to(`#cam-${id}`, { scale: 1.05, duration: Math.max(0.1, P[id].dur - 0.45), ease: "none" }, P[id].ini + 0.45);
};
const sello = (sel, t, extra = {}) =>
  tl.fromTo(sel, { opacity: 0, scale: 1.7, rotation: -8 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.34, ease: "back.out(2)", ...extra }, t);
const sacudida = (sel, t) =>
  tl.to(sel, { keyframes: [{ x: 22, duration: .04 }, { x: -16, duration: .04 }, { x: 9, duration: .04 }, { x: 0, duration: .05 }] }, t);
const granos = (sel, t, radio) => {
  tl.fromTo(`${sel} .grano`, { x: 0, y: 0, scale: 0, rotation: 0, opacity: 1 },
    { x: (i) => Math.cos(i * 0.449 + 0.2) * (radio + (i % 3) * 80), y: (i) => Math.sin(i * 0.449 + 0.2) * (radio + (i % 3) * 80),
      scale: (i) => 0.8 + (i % 3) * 0.25, rotation: (i) => (i % 2 ? 1 : -1) * 220, duration: 0.9, ease: "power3.out" }, t);
  tl.to(`${sel} .grano`, { opacity: 0, duration: 0.35, ease: "power1.in" }, t + 0.65);
};

// Gancho
tl.fromTo("#cam-gancho", { scale: 1.06 }, { scale: 1, duration: P.gancho.dur, ease: "none" }, 0);
tl.fromTo("#g1", { opacity: 0, y: -60 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, 0.08);
sello("#g2", PULSO * 1.1);

// Sello
tl.fromTo("#cam-marca", { scale: 1 }, { scale: 1.06, duration: P.marca.dur, ease: "none" }, P.marca.ini);
tl.fromTo("#velo", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "none" }, P.marca.ini);
tl.fromTo("#sello", { opacity: 0, scale: 2.3, rotation: -28 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.4, ease: "back.out(1.5)" }, P.marca.ini);
sacudida("#cam-marca", P.marca.ini + 0.18);
granos("#granos", P.marca.ini + 0.12, 360);
sello("#desde", P.marca.ini + PULSO * 2);

// La carta
golpe("queso", 1.1);
tl.fromTo("#t-queso", { y: 420, rotation: -14 }, { y: 0, rotation: 0, duration: 0.6, ease: "back.out(1.5)" }, P.queso.ini + 0.05);
for (const id of ["mechada", "chicharron"]) {
  golpe(id, 1.1);
  tl.fromTo(`#t-${id}`, { rotationX: -100, transformPerspective: 900, transformOrigin: "50% 0%", opacity: 0.5 },
    { rotationX: 0, opacity: 1, duration: 0.42, ease: "back.out(1.8)" }, P[id].ini);
}

// Cierre
tl.fromTo("#c-velo", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.out" }, P.cierre.ini);
tl.fromTo("#cam-cierre", { scale: 1 }, { scale: 1.06, duration: P.cierre.dur, ease: "none" }, P.cierre.ini);
tl.fromTo("#c-sello", { opacity: 0, scale: 2, rotation: -25 }, { opacity: 1, scale: 1, rotation: 0, duration: 0.45, ease: "back.out(1.5)" }, P.cierre.ini + 0.05);
granos("#granos-c", P.cierre.ini + 0.15, 260);
tl.fromTo("#c-lema .w", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.32, stagger: 0.07, ease: "back.out(1.6)" }, P.cierre.ini + PULSO);
tl.fromTo("#c-info", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, P.cierre.ini + PULSO * 3);
tl.to("#c-sello", { keyframes: [{ scale: 1.1, duration: 0.08 }, { scale: 1, duration: 0.35 }] }, P.cierre.fin - 1.0);
