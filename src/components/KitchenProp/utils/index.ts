import { KitchenPropName } from "../types";

export const KITCHEN_RECT: Record<
  KitchenPropName,
  { x: number; y: number; z: number; padding?: number }
> = {
  Microwave: { x: 20, y: 0, z: 0 },
  Sink: { x: 20, y: 0, z: 0 },
  Stove: { x: 20, y: 19, z: 16 },
  Fridge: { x: 20, y: 40, z: 0 },
  Dish: { x: 20, y: 0, z: 0 },
  Bowl: { x: 7, y: 0, z: 7 },
  Glass_cup: { x: 2, y: 0, z: 2 },
  Glass_plant_pot: { x: 20, y: 0, z: 0 },
  Large_countertop: { x: 44, y: 16, z: 16 },
  Large_pot: { x: 5, y: 6, z: 8 },
  Large_wooden_table: { x: 47, y: 0, z: 19 },
  Light_fixture: { x: 10, y: 0, z: 6 },
  Small_countertop: { x: 20, y: 16, z: 17 },
  Small_wooden_table: { x: 20, y: 0, z: 0 },
  Wood_chair: { x: 8, y: 0, z: 6 },
  Frying_pan: { x: 20, y: 0, z: 0 },
};
