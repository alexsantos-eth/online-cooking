import { CloneProps } from "@react-three/drei";

export type KitchenPropName =
  | "Bowl"
  | "Dish"
  | "Fridge"
  | "Frying_pan"
  | "Glass_cup"
  | "Glass_plant_pot"
  | "Large_countertop"
  | "Large_pot"
  | "Large_wooden_table"
  | "Light_fixture"
  | "Microwave"
  | "Sink"
  | "Small_countertop"
  | "Small_wooden_table"
  | "Stove"
  | "Wood_chair";

export interface KitchenModelProps extends Omit<CloneProps, "object"> {
  x?: number | string;
  y?: number | string;
  z?: number | string;
  physics?: boolean;
  physicsStartAnimation?: boolean;
  above?: KitchenPropName[];
  name: KitchenPropName;
  face?: "left" | "right" | "front" | "back";
}
