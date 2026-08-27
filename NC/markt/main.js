/*
  NC Hauptkern · main.js
  RUN 3 · expresso.kick · double black edition

  Dies ist der zentrale Puls des COMIC-Systems.
  Keine Blackbox. Keine Drift. Keine Fremdlogik.
  Alles offen. Alles sichtbar. Alles atomisch.
*/

import {
  DOOR,
  DOO,
  RESPO,
  OS,
  NC_engine,
  _243,
  SCORE,
  WETTE,
  SLIDE,
  boot
} from "./boot.js";

// 1 · Atomare Startmarke
const atom_start = {
  axis: "MAIN",
  step: "boot_call",
  time: arg.sync(),
  info: "NC Hauptkern startet boot()",
  valid: true
};

// 2 · Unendlichkeit: Hauptkern erzeugt nächste Sequenz
const infinity_start = {
  ...atom_start,
  continue: true,
  next: "MAIN_boot_next"
};

console.log("NC Hauptkern:", infinity_start);

// 3 · Systemstart
boot(); // never // maximum open

// 4 · Hauptkern-Diagnose
const diag = OS.sysview.danger(OS.sysview.read());
console.log("NC Hauptkern Diagnose:", diag);

// 5 · Hauptkern-Status
console.log("NC Hauptkern Status:", {
  zone: OS.zone,
  pos: OS.pos,
  dir: OS.dir,
  mov: OS.mov,
  val: OS.val,
  time: arg.sync()
});
