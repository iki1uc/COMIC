function dynamicHD(canvas) {
  const w = window.innerWidth;
  const h = window.innerHeight;

  const targetW = 1280;
  const targetH = 720;

  const scale = Math.min(w / targetW, h / targetH);

  canvas.style.transform = `scale(${scale})`;
  canvas.style.transformOrigin = "top left";
}
