# VEC.VirtualMarketplace · Börsen‑Modul (Volatilität)

Das Börsen‑Modul ist kein normaler Marketplace.
Es verarbeitet Schwankungen, Ausschläge und Volatilität.

## Zweck
Das Modul verbindet:

- DOOR.vola → Übergang unter Schwankung
- DOO/IT.vola → Kontrolle unter Ausschlag
- VECTOR.vola → Routing unter Last
- GENIE.vola → Bewertung in Bewegung
- API.vola → Durchlass abhängig vom Zustand

## Schwankungen
Die Börse arbeitet mit:

- tmp‑Impulse (kurze Ausschläge)
- stable‑Impulse (ruhige Phasen)
- Volatilitäts‑Achsen (6/9/12)
- Ausschlags‑Routing (.VECTOR.vola)
- Bewertungs‑Sprung (GENIE.vola)

## Funktionen
- Schwankungen erkennen
- Ausschläge routen
- Impulse bewerten
- Übergänge unter Last erzeugen
- Kontrolle bei hoher Volatilität
- Durchlass abhängig vom Zustand

## Dateien
- API.raw → Rohdefinition der Börse
- API.system.js → Volatilitäts‑Logik
- ID.html → Börsen‑Identität
- index.html → Schwankungs
