Korrigierte Version · NC/L/README.md
(komplett überarbeitet, konsistent, technisch sauber)

CORE · Integration von RAWATOR · AXIOM · HOLO · RESPO
Der Ordner NC/L bildet den Integrationskern des Systems.
Er verbindet RAWATOR, AXIOM, HOLO und RESPO zu einer funktionalen Einheit innerhalb der Runtime.

Struktur
CORE stellt sicher:

SYS‑Struktur (ROOM + PIPE)

RAWATOR‑Registrierung

ID

GEO

LIFE

AXIOM‑Instanzen

mana

aura

kraft

HOLO‑Engine + HOLO‑Room

RESPO‑Room

CALC‑Pipeline

Vitalität

HOLO‑Update

RESPO‑Update

Damit bildet NC/L den operativen Kern des gesamten NC‑Systems.

Module
Die folgenden Module werden im CORE zusammengeführt:

RAWATOR.id.json → Identität

RAWATOR.geo.json → GEO‑Form

rawator-life.js → Vitalität + Hologramm

axiom.js → Axiome (mana, aura, kraft)

HOLO.room.js → HOLO‑Raum

HOLO.engine.js → HOLO‑Engine

RESPO.room.js → RESPO‑Raum

Jedes Modul liefert einen Teil der funktionalen Pipeline.

Pipeline
CORE hängt RAWATOR in die drei System‑Pipes:

pipe3 → Energiefluss

pipe6 → Resonanzfeld

pipe9 → Impuls / Bewegung

AXIOM wird als einmalige Instanz in die PIPE eingehängt.
HOLO wird als Engine + Raum registriert.
RESPO wird synchron gehalten und liefert Reflex‑Daten zurück.

CALC
CALC berechnet:

manaPulse

auraPulse

kraftPulse

Vitalität (Durchschnitt aus AXIOM‑Impulsen)

HOLO‑Update

RESPO‑Update

CALC ist der zentrale Berechnungsimpuls des NC/L‑Kerns.

Zweck
NC/L erzeugt die funktionelle Verbindung zwischen:

RAWATOR · AXIOM · HOLO · RESPO · PIPE3/6/9

Es ist der Integrationsraum des gesamten NC‑Systems.
