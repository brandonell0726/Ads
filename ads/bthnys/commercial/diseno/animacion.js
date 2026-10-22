// Lanzamiento: cortes secos al golpe con un empujón de cámara; las letras se juntan desde separadas.
const golpe = (id, f = 1.08) => {
  tl.fromTo(`#cam-${id}`, { scale: f }, { scale: 1, duration: 0.35, ease: "expo.out" }, P[id].ini);
  tl.to(`#cam-${id}`, { scale: 1.04, duration: Math.max(0.1, P[id].dur - 0.35), ease: "none" }, P[id].ini + 0.35);
};
const lineaEntra = (sel, t) =>
  tl.fromTo(`${sel} .l`, { opacity: 0, x: (i, el, a) => (i - (a.length - 1) / 2) * 38, filter: "blur(8px)" },
    { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.45, ease: "power3.out", stagger: 0.012 }, t);

// Apertura
golpe("cintura", 1.12);
golpe("gafas", 1.12);

// Caída: destello, marca y sacudida
tl.fromTo("#flash", { opacity: 1 }, { opacity: 0, duration: 0.35, ease: "power2.out" }, P.dron.ini);
tl.fromTo("#marca .l", { opacity: 0, scale: 1.7 }, { opacity: 1, scale: 1, duration: 0.3, stagger: 0.03, ease: "expo.out" }, P.dron.ini);
tl.to("#marca", { opacity: 0, duration: 0.25, ease: "power1.in" }, P.dron.ini + 1.1);
tl.fromTo("#cam-dron", { scale: 1.06 }, { scale: 1, duration: P.dron.dur, ease: "power1.out" }, P.dron.ini);
tl.to("#cam-dron", { keyframes: [{ x: 16, duration: .04 }, { x: -12, duration: .04 }, { x: 6, duration: .04 }, { x: 0, duration: .05 }] }, P.dron.ini + 0.02);

// Desierto, ciudad, parque, pista
for (const id of ["conduce", "capo", "coche", "corre", "estira", "derecha"]) golpe(id);
// la calle mojada: reencuadre a la izquierda para dejar fuera los rótulos del borde derecho
tl.fromTo("#cam-cruce", { scale: 1.2, transformOrigin: "0% 60%" }, { scale: 1.27, duration: P.cruce.dur, ease: "none" }, P.cruce.ini);
// el saque en cámara lenta: empuje continuo
tl.fromTo("#cam-saque", { scale: 1.1 }, { scale: 1, duration: P.saque.dur, ease: "power1.out" }, P.saque.ini);

lineaEntra("#s-road", P.capo.ini + 0.1);
lineaEntra("#s-city", P.cruce.ini + PULSO + 0.05);
lineaEntra("#s-morning", P.estira.ini + 0.1);
lineaEntra("#s-court", P.derecha.ini + 0.1);

// Ráfaga de mundos
["f1", "f2", "f3", "f4"].forEach((id, k) => {
  if (id === "f2") {
    // la calle: siempre reencuadrada a la izquierda (fuera los rótulos del borde derecho)
    tl.fromTo("#cam-f2", { scale: 1.34, transformOrigin: "0% 60%" }, { scale: 1.22, duration: P.f2.dur, ease: "expo.out" }, P.f2.ini);
  } else {
    golpe(id, 1.16);
  }
  tl.fromTo("#fl", { opacity: 0.75 }, { opacity: 0, duration: 0.14, ease: "power2.out", immediateRender: k === 0 }, P[id].ini);
});

// Las cuatro juntas
tl.fromTo("#cam-grupo", { scale: 1.08 }, { scale: 1, duration: P.grupo.dur, ease: "power1.out" }, P.grupo.ini);
lineaEntra("#s-one", P.grupo.ini + 0.1);
lineaEntra("#s-every", P.grupo.ini + PULSO * 3);

// Cierre
tl.fromTo("#fin-marca .l", { opacity: 0, x: (i, el, a) => (i - (a.length - 1) / 2) * 50, filter: "blur(10px)" },
  { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.7, ease: "power3.out", stagger: 0.02 }, P.fin.ini + 0.15);
tl.fromTo("#fin-linea", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, P.fin.ini + 0.7);
tl.fromTo("#fin-lema", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, P.fin.ini + 0.95);
tl.to("#fin-marca", { keyframes: [{ scale: 1.03, duration: 0.08 }, { scale: 1, duration: 0.4 }], transformOrigin: "0% 50%" }, P.fin.fin - 0.9);
