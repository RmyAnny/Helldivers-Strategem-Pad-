# Helldivers-Strategem-Pad
Für Cosplay am Arm das Strategem Pad die Input Arrows v1
aktuell  nur Webversion
Ist für handydisplays auch geeignet
Richtige "App Version" noch work in progress


Funktionsweise: 
mit den vier Pfeilen lassen sich in das Input Feld Pfeilkombis eingeben. Sobald diese eine richtige Kombi für einen Strategem sind, wird dieser durch einen erscheinenden Button angezeigt. Danach kann diese Atacke ausgeführt, werden, indem man auf den Button klickt. Dann auf reset klicken und der davor eingegebene Strategem Button verschwindet nach 2 Sekunden, der Input ist direkt leer.

Die Pfeilkombis sind aus dem nternet und nein ich hab die nicht alle überprüft so langweilig war mir dann nicht. Deswegen hier nochmal alles mit Quellen falls wer sich das überhaupt durchließt:











const strategems = {
  // Hangar / Eagle
  "↑ → ↓ →": "Eagle Airstrike",
  "↑ → ↓ ↓ →": "Eagle Cluster Bomb",
  "↑ → ↓ ↑": "Eagle Napalm Airstrike",
  "↑ → ↑ ↓ ↓ ↓": "Eagle 500KG Bomb",   // Quelle: Up → Down Down Down :contentReference[oaicite:0]{index=0}
  "↑ → ↑ ↓": "Eagle Smoke Strike",
  "↑ → →": "Eagle Strafing Run",
  "↑ → ↑ ←": "Eagle 110MM Rocket Pods",
  
  // Waffen / Bodeneinheiten
  "↓ ← ↓ ↑ →": "Machine Gun",  // aus Forbes / Quellen :contentReference[oaicite:1]{index=1}
  "↓ ← → ↑ ↓": "Anti‑Material Rifle",  // Quelle :contentReference[oaicite:2]{index=2}
  "↓ ← ↓ ↑ ↑ →": "Autocannon",  // Quelle :contentReference[oaicite:3]{index=3}
  "↓ ← ↑ ↓ ↑": "Flamethrower",  // Quelle :contentReference[oaicite:4]{index=4}
  "↓ ↓ ← ↑ →": "Expendable Anti-Tank",  // Quelle :contentReference[oaicite:5]{index=5}
  "↓ ← ↓ ↑ ↑ ←": "Stalwart",  // Quelle :contentReference[oaicite:6]{index=6}
  "↓ ↑ ← → → ←": "HMG Emplacement",  // Quelle :contentReference[oaicite:7]{index=7}
  "↓ ↑ ← → ← ↓": "Shield Generator Relay",  // Quelle :contentReference[oaicite:8]{index=8}
  "↓ ↑ → ↑ ← →": "Tesla Tower",  // Quelle :contentReference[oaicite:9]{index=9}
  "↓ ← ← ↓": "Incendiary Mines",  // Quelle :contentReference[oaicite:10]{index=10}
  
  // Orbital / Großangriffe
  "→ ↓ ← ↑ ↑": "Orbital Gatling Barrage",  // Quelle :contentReference[oaicite:11]{index=11}
  "→ → →": "Orbital Airburst Strike",  // Quelle :contentReference[oaicite:12]{index=12}
  "→ → ↓ ↑ ↓ → ↓ ↓": "Orbital 120MM HE Barrage",  // Quelle :contentReference[oaicite:13]{index=13}
  "→ ↓ ↓ ↑ ↑ ← ↓ ↓ ↓": "Orbital 380MM HE Barrage",  // Quelle :contentReference[oaicite:14]{index=14}
  "→ ↓ → ↓ → ↓": "Orbital Walking Barrage",  // Quelle :contentReference[oaicite:15]{index=15}
  "→ ↓ ↑ → ↓": "Orbital Laser",  // Quelle :contentReference[oaicite:16]{index=16}
  "→ ↑ ↓ ↓ →": "Orbital Railgun Strike",  // Quelle :contentReference[oaicite:17]{index=17}
  "→ → ↑": "Orbital Precision Strike",  // Quelle :contentReference[oaicite:18]{index=18}
  "→ → ↓ →": "Orbital Gas Strike",  // Quelle :contentReference[oaicite:19]{index=19}
  "→ → ← ↓": "Orbital EMS Strike",  // Quelle :contentReference[oaicite:20]{index=20}
  "→ → ↓ ↑": "Orbital Smoke Strike",  // Quelle :contentReference[oaicite:21]{index=21},
  
  // Weitere (Mission / Allgemeine)
  "↑ ↓ → ← ↑": "Reinforce",  // Quelle :contentReference[oaicite:22]{index=22}
  "↓ ↓ ↑ →": "Resupply",  // Quelle :contentReference[oaicite:23]{index=23}
  "↑ ↓ → ↑": "SOS Beacon",  // Quelle :contentReference[oaicite:24]{index=24}
  "↓ ↑ ↓ ↑": "Super Earth Flag",  // Quelle :contentReference[oaicite:25]{index=25},
  "↓ ↑ ← ↓ ↑ → ↓ ↑": "Hellbomb"  // Quelle :contentReference[oaicite:26]{index=26}
};


PS: Falls hier neue dazu kommen garantiere ich nicht, dass ich den Code hier immer aktuell habe aber das könnt ihr dann selbst nachpflegen in dem Code 
