import { PIXEL } from "../../utils";

// CONSTANTS
const WALL_X_BLOCK_SIZE = 9;
const WALL_Y_BLOCK_SIZE = 9;

export const WALL_HEIGHT = WALL_Y_BLOCK_SIZE * PIXEL;
export const WALL_WIDTH = WALL_X_BLOCK_SIZE * PIXEL;
export const WALL_WEIGHT = 0.2;

// CALCULATIONS
export const WALL_HEIGHT_HALF = WALL_HEIGHT / 2;
export const WALL_HEIGHT_HALF_HALF = WALL_HEIGHT_HALF / 2;
export const WALL_WEIGHT_HALF = WALL_WEIGHT / 2;
