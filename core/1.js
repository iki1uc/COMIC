const gl = beamCanvas.getContext("webgl", { antialias: true });

function gpuOn(t = 0) {
  // 12e Frequenz-Puls
  const pulse12e = Math.sin(t * 12);

  // Whirlwind – 3-Potenzkette
  const whirl = [3, 9, 27, 81, 243, 729];
  const density = whirl[Math.floor((t * 2) % whirl.length)];

  // 6D-Rotation (GPU-Raum)
  const rot = {
    x: Math.cos(t * 0.5),
    y: Math.sin(t * 0.5)
  };

  // GPU-Reset
  gl.clearColor(
    0.0 + rot.x * 0.1,   // leichte Rotation im Farbkanal
    0.0 + rot.y * 0.1,
    0.0,
    1.0
  );

  gl.clear(gl.COLOR_BUFFER_BIT);

  return {
    pulse12e,
    density,
    rot
  };
}

gpuOn();
