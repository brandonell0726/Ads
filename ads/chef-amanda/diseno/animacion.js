// Cámara: golpe de zoom en cada corte y empuje lento el resto del plano
Object.keys(P).forEach((id) => {
  tl.fromTo(`#cam-${id}`, { scale: 1.1 }, { scale: 1, duration: 0.45, ease: "expo.out" }, P[id].ini);
  tl.to(`#cam-${id}`, { scale: 1.05, duration: Math.max(0.1, P[id].dur - 0.45), ease: "none" }, P[id].ini + 0.45);
});

// Gancho
tl.fromTo("#c-hook .hook-l1 .w", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.35, stagger: 0.09, ease: "back.out(2)" }, P.hook.ini + 0.15);
tl.fromTo("#hook-big", { clipPath: "inset(-30% 100% -30% -5%)", rotation: 0 }, { clipPath: "inset(-30% -5% -30% -5%)", rotation: -3, duration: 0.5, ease: "power3.inOut" }, P.hook.ini + PULSO * 3);
tl.fromTo("#pill-hook", { scale: 0, rotation: 12, opacity: 0 }, { scale: 1, rotation: 2, opacity: 1, duration: 0.45, ease: "back.out(2.2)" }, P.hook.ini + COMPAS + PULSO);

// Golpe de marca: destello rosa, el logo se escribe y entra la etiqueta
tl.fromTo("#flash", { opacity: 1 }, { opacity: 0, duration: 0.4, ease: "power2.out" }, P.marca.ini);
tl.fromTo("#logo1", { clipPath: "inset(-15% 100% -15% -5%)", scale: 1.12 }, { clipPath: "inset(-15% -5% -15% -5%)", scale: 1, duration: 1.0, ease: "power2.inOut" }, P.marca.ini + 0.05);
tl.fromTo("#tag1", { opacity: 0, y: 30, scale: 0.6 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(2.5)" }, P.marca.ini + PULSO * 3);

// Etiquetas de plato: se pegan como pegatinas, alternando lado e inclinación
["cubano", "tostones", "sliders", "platter", "fish", "cheesecake"].forEach((id, i) => {
  const rot = i % 2 ? 3 : -3;
  tl.fromTo(`#pill-${id}`, { scale: 0, rotation: rot * 5, opacity: 0 }, { scale: 1, rotation: rot, opacity: 1, duration: 0.42, ease: "back.out(2.2)" }, P[id].ini + 0.1);
});
tl.fromTo("#st-sliders", { scale: 0, rotation: -45 }, { scale: 1, rotation: 12, duration: 0.38, ease: "back.out(3)" }, P.sliders.ini + PULSO * 1.5);
tl.fromTo("#st-cheesecake", { scale: 0, rotation: 45 }, { scale: 1, rotation: -10, duration: 0.38, ease: "back.out(3)" }, P.cheesecake.ini + PULSO * 1.5);

// Cinta que corre durante la carta
tl.fromTo("#ticker", { x: 0 }, { x: -1150, duration: P.cheesecake.fin - P.cubano.ini, ease: "none" }, P.cubano.ini);

// Cierre
tl.fromTo("#velo-cierre", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "sine.out" }, P.cierre.ini);
tl.fromTo("#logo2", { clipPath: "inset(-15% 100% -15% -5%)" }, { clipPath: "inset(-15% -5% -15% -5%)", duration: 1.0, ease: "power2.inOut" }, P.cierre.ini + 0.1);
tl.fromTo("#dir1", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, P.cierre.ini + PULSO * 2);
tl.fromTo("#dir2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.45, ease: "power3.out" }, P.cierre.ini + PULSO * 2.5);
tl.fromTo("#cta", { scale: 0, rotation: -14 }, { scale: 1, rotation: -3, duration: 0.45, ease: "back.out(2.5)" }, P.cierre.ini + COMPAS);
