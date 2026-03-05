# Contributing to Blimp

Issues and pull requests are welcome. Blimp is an open prototype — built in public.

## To contribute code

1. Fork the repo
2. Create a branch: `git checkout -b feat/your-feature`
3. Make your changes with clear commits (see commit style below)
4. Open a pull request against `main`

## Commit style

```
feat:   new feature
fix:    bug fix
docs:   documentation only
chore:  tooling, deps, config changes
style:  visual/UI changes only
```

Examples:
```
feat: add resource blocks with 30s respawn
fix: player state not clearing on disconnect
docs: update README with Tier 2 controls
```

## Project structure

```
index.ts          Entry point — only wires modules together
src/              All game logic, one file per system
assets/ui/        HTML overlay files for in-game HUD
assets/map/       World map JSON (exported from build.hytopia.com)
assets/audio/     Sound files
```

## Questions?

Open an issue or find us at [qi.xyz](https://qi.xyz)
