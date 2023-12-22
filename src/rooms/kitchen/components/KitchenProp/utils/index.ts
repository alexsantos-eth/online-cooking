import { KitchenPropName } from "../types";

// EVERY BOX IS COMPOSED FOR A GRID OF 32X32X32 PARTS OR n / 2^n, BLOCK = 1 UNIT
// X AND Y MUST BE INTEGER OR (32 * n) / 32

export const KITCHEN_DIMS: Record<
  KitchenPropName,
  { x: number; y: number; z: number; padding?: number }
> = {
  Stove: { x: 32 / 32, y: 30 / 32, z: 32 / 32 },
  Small_countertop: { x: 32 / 32, y: 25 / 32, z: 32 / 32 },
  Sink: { x: 32 / 32, y: 27 / 32, z: 32 / 32 },
  Bowl: { x: 32 / 32, y: 4 / 32, z: 32 / 32 },
  Dish: { x: 32 / 32, y: 1 / 32, z: 32 / 32 },
  Fridge: { x: 32 / 32, y: 63 / 32, z: 32 / 32 },
  Frying_pan: { x: 32 / 32, y: 4 / 32, z: 32 / 32 },
  Glass_cup: { x: 32 / 32, y: 6 / 32, z: 32 / 32 },
  Glass_plant_pot: { x: 32 / 32, y: 15 / 32, z: 32 / 32 },
  Large_countertop: { x: 64 / 32, y: 25 / 32, z: 32 / 32 },
  Large_pot: { x: 32 / 32, y: 11 / 32, z: 32 / 32 },
  Large_wooden_table: { x: 64 / 32, y: 25 / 32, z: 32 / 32 },
  Light_fixture: { x: 32 / 32, y: 55 / 32, z: 32 / 32 },
  Microwave: { x: 32 / 32, y: 19 / 32, z: 32 / 32 },
  Small_wooden_table: { x: 32 / 32, y: 25 / 32, z: 32 / 32 },
  Wood_chair: { x: 32 / 32, y: 15 / 32, z: 32 / 32 },
};

// THE DIFFERENCE IS THAT RECTS IF FOR COLLISIONS AND DIMS IS FOR RENDERING
export const KITCHEN_RECTS: Record<
  KitchenPropName,
  { x: number; y: number; z: number }
> = {
  Stove: { x: 32 / 32, y: 30 / 32, z: 26 / 32 },
  Small_countertop: { x: 32 / 32, y: 25 / 32, z: 26 / 32 },
  Sink: { x: 32 / 32, y: 27 / 32, z: 32 / 32 },
  Bowl: { x: 16 / 32, y: 4 / 32, z: 14 / 32 },
  Dish: { x: 9 / 32, y: 1 / 32, z: 9 / 32 },
  Fridge: { x: 32 / 32, y: 63 / 32, z: 34 / 32 },
  Frying_pan: { x: 20 / 32, y: 4 / 32, z: 20 / 32 },
  Glass_cup: { x: 3 / 32, y: 6 / 32, z: 3 / 32 },
  Glass_plant_pot: { x: 7 / 32, y: 15 / 32, z: 7 / 32 },
  Large_countertop: { x: 69 / 32, y: 25 / 32, z: 27 / 32 },
  Large_pot: { x: 14 / 32, y: 11 / 32, z: 14 / 32 },
  Large_wooden_table: { x: 74 / 32, y: 25 / 32, z: 32 / 32 },
  Light_fixture: { x: 9 / 32, y: 6 / 32, z: 32 / 32 },
  Microwave: { x: 31 / 32, y: 18 / 32, z: 19 / 32 },
  Small_wooden_table: { x: 32 / 32, y: 25 / 32, z: 32 / 32 },
  Wood_chair: { x: 14 / 32, y: 15 / 32, z: 16 / 32 },
};
