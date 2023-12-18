import { Plane, useTexture } from "@react-three/drei";
import { PIXEL } from "../utils";
import { KITCHEN_RECT } from "../components/KitchenProp/utils";

// CONSTANTS
const WALL_HEIGHT = 12; //12
const WALL_WIDTH = 12;
const WALL_WEIGHT = 0.2;

// CALCULATIONS
const WALL_HEIGHT_HALF = WALL_HEIGHT / 2;
const WALL_HEIGHT_HALF_HALF = WALL_HEIGHT_HALF / 2;
const WALL_WEIGHT_HALF = WALL_WEIGHT / 2;

const Rooms: React.FC = () => {
  const wallTexture = useTexture("assets/textures/wall.jpg");
  const floorTexture = useTexture("assets/textures/floor.jpg");

  return (
    <group>
      {/* BACK */}
      <mesh
        position={[WALL_WIDTH / 2, WALL_HEIGHT_HALF_HALF, -WALL_WEIGHT_HALF]}
        receiveShadow
      >
        <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT_HALF, WALL_WEIGHT]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* FRONT */}
      <mesh
        position={[
          WALL_WIDTH / 2,
          WALL_HEIGHT_HALF_HALF,
          WALL_WIDTH + WALL_WEIGHT_HALF,
        ]}
        receiveShadow
      >
        <boxGeometry args={[WALL_WIDTH, WALL_HEIGHT_HALF, WALL_WEIGHT]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* LEFT */}
      <mesh
        position={[-WALL_WEIGHT_HALF, WALL_HEIGHT_HALF_HALF, WALL_WIDTH / 2]}
        receiveShadow
      >
        <boxGeometry args={[WALL_WEIGHT, WALL_HEIGHT_HALF, WALL_WIDTH]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* RIGHT */}
      <mesh
        position={[
          WALL_WIDTH + WALL_WEIGHT_HALF,
          WALL_HEIGHT_HALF_HALF,
          WALL_WIDTH / 2,
        ]}
        receiveShadow
      >
        <boxGeometry args={[WALL_WEIGHT, WALL_HEIGHT_HALF, WALL_WIDTH]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      <Plane
        position={[WALL_WIDTH / 2, 0, WALL_WIDTH / 2]}
        args={[WALL_WIDTH, WALL_WIDTH]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial map={floorTexture} />
      </Plane>

      {/* TOP */}

      <mesh
        position={[
          WALL_WIDTH / 2,
          (KITCHEN_RECT.Fridge.y +
            KITCHEN_RECT.Small_countertop.y / 2 +
            KITCHEN_RECT.Small_countertop.y +
            4) *
            PIXEL,
          WALL_WIDTH / 2,
        ]}
        receiveShadow
      >
        <boxGeometry args={[WALL_WIDTH, WALL_WEIGHT, WALL_WIDTH]} />
        <meshStandardMaterial color="rgb(230, 230, 230)" />
      </mesh>
    </group>
  );
};

export default Rooms;
