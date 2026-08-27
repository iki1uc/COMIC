function boot() {

  // 1. Startmeldung
  RESPO.log("BOOT START");

  // 2. Disk + Video initialisieren (intern)
  NC_engine.disk();
  NC_engine.video();

  // 3. Kernel-Integrität prüfen
  if (!WETTE.verify(OS.kernel)) {
    return WETTE.fail("CRC ERROR: Kernel rejected");
  }

  // 4. Sektor lesen (intern)
  DOO.readSector();

  // 5. Kernel relocaten
  SLIDE.relocate(OS.entry);

  // 6. Trace (falls aktiviert)
  if (SCORE.trace) {
    writeTrace("Kernel loaded");
  }

  // 7. Boot-Aktion ausführen
  DOOR.action();

  // 8. Übergabe an OS
  OS.handoff();

  // 9. Gefahrstufe intern berechnen
  const hw = OS.sysview.read();
  const danger = OS.sysview.danger(hw);
  RESPO.log("Gefahrstufe: " + danger);

  // 10. Abschluss
  RESPO.ok("BOOT COMPLETE");
}
