<script>
let t = 0;

function animate() {
  t += 0.02;
  bx.clearRect(0,0,800,400);

  const F = forsakenBoost(t);
  const O = n6Orbitals(t);
  const B = run3Beam(t);
  const G = ghost7Sinn(t);
  const GEO = forsakenGeometry(t);

  // Beam
  bx.strokeStyle = "#00ff88";
  bx.beginPath();
  bx.moveTo(B.pos, 200);
  bx.lineTo(B.pos + 300, 200);
  bx.stroke();

  bx.strokeStyle = "#ff4444";
  bx.beginPath();
  bx.moveTo(B.neg, 200);
  bx.lineTo(B.neg + 300, 200);
  bx.stroke();

  // Atom Orbitale
  drawOrbitals(bx, 600, 300, O);

  // Forsaken Pyramide
  bx.strokeStyle = "rgba(255,0,255,0.4)";
  bx.beginPath();
  GEO.pyramid.forEach((p, i) => {
    const nx = 600 + p.x;
    const ny = 300 + p.y;
    if (i === 0) bx.moveTo(nx, ny);
    else bx.lineTo(nx, ny);
  });
  bx.closePath();
  bx.stroke();

  requestAnimationFrame(animate);
}
animate();
</script>
