import { CloneProps } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

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

type CloneLProps = GroupProps & Omit<CloneProps, "object">;
export interface KitchenModelProps extends CloneLProps {
  x?: number | string;
  y?: number | string;
  z?: number | string;
  physicsType?: "Static" | "Dynamic" | "Kinematic";
  physics?: boolean;
  physicsStartAnimation?: boolean;
  mass?: number;
  above?: KitchenPropName[];
  name: KitchenPropName;
  face?: "left" | "right" | "front" | "back";
}
