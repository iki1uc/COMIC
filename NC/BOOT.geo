/*
  BOOT.geo
  OS-Boot-Raum · Atom-Boot · NC-System

  Ziel:
  - kleinste Boot-Zone
  - neutrale Startposition
  - transparente Werte
  - kompatibel mit masterboot, OS.loader, NC.system
  - keine Drift, keine Fremdlogik
  - reine OS-Werte
*/

const BOOT = {

  // 1 · Zone (Start-Raum)
  zone: "BOOT",

  // 2 · Position (Atom-Startpunkt)
  pos: [0, 0, 0],

  // 3 · Richtung (N = Norden)
  dir: "N",

  // 4 · Grundwert (neutral)
  val: 0,

  // 5 · Bewegung (keine Bewegung)
  mov: "none",

  // 6 · Atom-Formel (kleinste Einheit)
  atom(step) {
    return {
      step,
      info: "BOOT.atom → " + step,
      time: arg.sync(),     // universelle Zeitachse
      valid: true
    };
  },

  // 7 · Unendlichkeits-Formel (kontinuierlicher Ablauf)
  infinity(atom) {
    return {
      ...atom,
      continue: true,
      next: atom.step + "_next"
    };
  },

  // 8 · Geo-Regeln (neutral, deterministisch)
  rules: {
    legal: ["N", "O", "S", "W", "C"],
    moves: ["move(N)", "move(O)", "move(S)", "move(W)", "move(C)"],
    drift: false,
    foreignLogic: false
  },

  // 9 · Mind-Link (optional)
  mind(OU) {
    if (!OS.mind) return this.atom("mind_off");

    return {
      dir: OS.mind.kompass(OU),
      val: OS.mind.stats(OU),
      mov: OS.mind.verhalten(OU)
    };
  },

  // 10 · Übergabe an masterboot (offen & transparent)
  export() {
    return {
      zone: this.zone,
      pos:  this.pos,
      dir:  this.dir,
      val:  this.val,
      mov:  this.mov
    };
  }
};
