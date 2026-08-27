// Pipeline.js

export function PIPELINE(state){

  console.log("PIPELINE:", state.room, state.respo);

  // Beispiel: Achsen-Update
  if(window.updateAxis){
    updateAxis(state.respo.axis);
  }

  // Beispiel: Orbit-Update
  if(window.updateOrbit){
    updateOrbit(state.respo.orbit);
  }

  // Beispiel: Pulse-Update
  if(window.updatePulse){
    updatePulse(state.respo.pulse);
  }
}
