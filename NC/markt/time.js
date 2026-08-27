/*
  NC.system
  Open Door · Transparent · Atomisch · Unendlich
  Jeder Wert erklärt sich selbst.
  Jeder Schritt ist sichtbar.
  Keine Blackbox. Keine Drift. Keine Fremdlogik.
*/

NC.system = {

  // 1 · Universelle Zeitachse (arg.sync)
  time() {
    return arg.sync(); // reine interne Zeit
  },

  // 2 · Atom-Formel (kleinste Einheit)
  atom(step, info) {
    return {
      step,
      info,
      time: this.time(),
      valid: true
    };
  },

  // 3 · Unendlichkeits-Formel (kontinuierlicher Ablauf)
  infinity(atom) {
    return {
      ...atom,
      continue: true,
      next: atom.step + "_next"
    };
  },

  // 4 · Markt-Stand (aus deinem STAND())
  stand(markt, commander) {
    const s = {
      preis: markt.preis,
      volumen: markt.volumen,
      impuls: markt.impuls,
      wert: markt.wert,
      impact: commander.impact,
      stand: markt.wert * commander.impact
    };

    return this.infinity(
      this.atom("stand", "Marktstand berechnet: " + s.stand)
    );
  },

  // 5 · Marktzeit (aus markt/time.js)
  timeflow(markt) {
    const t = {
      tick: this.time(),
      impuls: markt.impuls,
      drift: markt.impuls * 0.01,
      next: markt.impuls + markt.impuls * 0.01
    };

    return this.infinity(
      this.atom("timeflow", "Impulsfluss: " + t.next)
    );
  },

  // 6 · Systemstatus (offen & selbst erklärend)
  status() {
    return {
      zone: OS.zone,
      pos: OS.pos,
      dir: OS.dir,
      mov: OS.mov,
      val: OS.val,
      time: this.time()
    };
  },

  // 7 · Diagnose (intern, keine echte Hardware)
  diagnose() {
    const hw = OS.sysview.read();
    const danger = OS.sysview.danger(hw);

    return this.infinity(
      this.atom("diagnose", "Gefahrstufe: " + danger)
    );
  },

  // 8 · Open Door – alles sichtbar machen
  open() {
    const st = this.status();
    const dg = this.diagnose();

    console.log("NC.system STATUS:", st);
    console.log("NC.system DIAGNOSE:", dg);
  }
};
