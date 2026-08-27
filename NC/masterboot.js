masterboot = {

  // internes, sicheres Lesen (keine echte Netzverbindung)
  load: async function(file) {

    // interne Simulation statt echter Netzwerk-Requests
    if (!OS.net.files[file]) {
      throw `BOOT ERROR: File '${file}' not found in tmp-storage.`;
    }

    return OS.net.files[file]; // rein intern
  },

  // Boot-Geometrie anwenden
  apply: function(geo) {

    // interne Schutzprüfung
    if (!geo || typeof geo !== "object") {
      throw "BOOT ERROR: Invalid BOOT.geo structure.";
    }

    OS.zone   = geo.zone   ?? "tmp-zone";
    OS.pos    = geo.pos    ?? [0,0];
    OS.dir    = geo.dir    ?? "none";
    OS.val    = geo.val    ?? 0;
    OS.mov    = geo.mov    ?? "idle";
    OS.memory = geo.memory ?? {};
  },

  // vollständiger Startpfad
  start: async function() {

    // interne Online-Simulation
    if (!OS.net.online()) {
      throw "NET required: System cannot start offline.";
    }

    // BOOT.geo laden
    let geo = await this.load("BOOT.geo");

    // anwenden
    this.apply(geo);

    // interne Hardware-Simulation lesen
    let hw = OS.sysview.read();

    // interne Gefahrstufe berechnen
    let danger = OS.sysview.danger(hw);

    console.log("Gefahrstufe:", danger);
  }
};
