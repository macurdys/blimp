# ⎈ Blimp

A solarpunk airship builder game built on the [HYTOPIA SDK](https://github.com/hytopiagg/sdk).
Earn Build Points by harvesting resource blocks, buy airship parts from the Workshop NPC,
assemble your ship at the Assembly Bench, and unlock flight tiers.

**Live at:** [blimp.qi.xyz](https://blimp.qi.xyz) — prototype in active development.

---

## Play

Coming soon on HYTOPIA. Prototype in development — follow progress at [qi.xyz](https://qi.xyz).

---

## Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/blimp-game.git
cd blimp-game

# 2. Install dependencies
npm install

# 3. Start the game server
npm run dev

# 4. Open your browser and go to:
#    https://hytopia.com/play?connect=127.0.0.1:8080
```

> Requires Node.js 18+. Download from [nodejs.org](https://nodejs.org).

---

## Project Structure

```
index.ts              Entry point — only wires modules together
src/                  All game logic, one file per system
  constants.ts        All tunable values in one place
  playerState.ts      Player data: points, inventory, tier
  partsData.ts        Part definitions, costs, variants
  tierLogic.ts        Tier unlock checks & effects
  airship.ts          Airship entity, flight physics, controls
  resourceBlocks.ts   Block placement, harvest, respawn
  islands.ts          Upper island detection & discovery events
  workshop.ts         NPC entity & shop interaction
assets/
  map/world.json      World map (exported from build.hytopia.com)
  ui/index.html       HUD overlay: points, parts, tier
  ui/shop.html        Parts shop panel
  audio/              Ambient and event sounds
```

---

## Build Phases

| Phase | Name | Status |
|-------|------|--------|
| 0 | Environment Setup & Boilerplate | ✅ Done |
| 1 | Sky World & Resource Blocks | 🔲 |
| 2 | Player State & HUD | 🔲 |
| 3 | Parts Shop & Workshop NPC | 🔲 |
| 4 | Assembly Bench & Tier 1 Flight | 🔲 |
| 5 | Tier 2 — Steering | 🔲 |
| 6 | Tier 3 — Island Discovery | 🔲 |
| 7 | Polish & Ship | 🔲 |

---

## Built With

- [HYTOPIA SDK](https://github.com/hytopiagg/sdk)
- TypeScript
- HTML/CSS (in-game UI overlays)

---

## Contributing

Issues and pull requests are welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).
