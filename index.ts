/**
 * index.ts — Blimp entry point
 *
 * This file only wires modules together.
 * No game logic lives here — that all lives in src/.
 *
 * Phase 0: Boilerplate only. SDK import verified, server starts.
 * Each phase will add one import + one function call here.
 */

import { startServer, GameServer, PlayerEvent } from 'hytopia';
import worldMap from './assets/map/world.json' assert { type: 'json' };

startServer(world => {
  // Phase 0: baseline server running on default boilerplate map.
  // Phase 1 will replace this with spawnResourceBlocks(world) etc.

  console.log('⎈ Blimp server started');

  world.on(PlayerEvent.JOINED_WORLD, ({ player }) => {
    console.log(`Player joined: ${player.id}`);
  });

  world.on(PlayerEvent.LEFT_WORLD, ({ player }) => {
    console.log(`Player left: ${player.id}`);
  });
});
