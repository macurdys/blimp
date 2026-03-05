/**
 * constants.ts — All tunable game values in one place.
 * Change numbers here — never hunt through game files.
 */

export const POINTS = {
  RESOURCE_BLOCK_HARVEST: 10,
  RESOURCE_BLOCK_RESPAWN_MS: 30_000,   // 30 seconds
  SOLAR_SAIL_PASSIVE_PER_SEC: 1,
  ISLAND_DISCOVERY_BONUS: 50,
};

export const TIERS = {
  T1_REQUIRED_PARTS: ['envelope', 'frame'],
  T2_REQUIRED_PARTS: ['gondola', 'propulsion'],
  T3_REQUIRED_PARTS: ['navigation', 'lifesystems'],
};

export const FLIGHT = {
  T1_LIFT_SPEED: 4,
  T1_DRIFT_FORCE: 0.5,
  T2_TURBINE_SPEED: 8,
  T2_SOLAR_SPEED: 5,
  T3_MAX_ALTITUDE: 200,
  T2_MAX_ALTITUDE: 60,
};

export const WORLD = {
  SPAWN: { x: 0, y: 5, z: 0 },
  RESOURCE_BLOCK_COUNT: 20,
  ISLAND_Y: 90,
};
