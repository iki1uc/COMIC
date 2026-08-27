<script>
const gl = beamCanvas.getContext("webgl", { antialias: true });

function gpuOn() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}
gpuOn();
</script>
