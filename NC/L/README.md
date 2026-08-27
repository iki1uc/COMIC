# CORE · RAWATOR + AXIOM + HOLO Integration
NC/L ist der Integrationskern des Systems.
Er verbindet RAWATOR, AXIOM, HOLO und RESPO zu einer funktionellen Einheit.

## Struktur
CORE stellt sicher:
- SYS-Struktur (ROOM + PIPE)
- RAWATOR-Registrierung (ID, GEO, LIFE)
- AXIOM-Instanzen (mana, aura, kraft)
- HOLO-Engine + HOLO-Raum
- RESPO-Raum
- CALC-Pipeline (Vitalität + HOLO + RESPO)

## Module
- RAWATOR.id.json → Identität
- RAWATOR.geo.json → GEO-Form
- rawator-life.js → Vitalität + Hologramm
- axiom.js → Axiome (mana, aura, kraft)
- HOLO.room.js → HOLO-Raum
- HOLO.engine.js → HOLO-Engine
- RESPO.room.js → RESPO-Raum

## Pipeline
CORE hängt RAWATOR in:
- pipe3
- pipe6
- pipe9

AXIOM wird als einmalige Instanz in PIPE eingehängt.
HOLO wird als Engine + Raum registriert.
RESPO wird synchron gehalten.

## CALC
CALC berechnet:
- manaPulse
- auraPulse
- kraftPulse
- Vitalität (Durchschnitt)
- HOLO-Update
- RESPO-Update

CALC ist der zentrale Berechnungsimpuls des NC/L-Kerns.

## Zweck
NC/L erzeugt die funktionelle Verbindung zwischen:
RAWATOR · AXIOM · HOLO · RESPO · PIPE3/6/9

Es ist der Integrationsraum des NC-Systems.
