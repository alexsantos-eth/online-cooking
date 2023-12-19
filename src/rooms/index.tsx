import { Plane, useTexture } from "@react-three/drei";

import { DEVMODE, PIXEL } from "../utils";
import {
  WALL_HEIGHT_HALF,
  WALL_HEIGHT_HALF_HALF,
  WALL_WEIGHT,
  WALL_WEIGHT_HALF,
  WALL_WIDTH,
} from "./utils";

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

      {/* LEFT */}
      <mesh
        position={[-WALL_WEIGHT_HALF, WALL_HEIGHT_HALF_HALF, WALL_WIDTH / 2]}
        receiveShadow
      >
        <boxGeometry args={[WALL_WEIGHT, WALL_HEIGHT_HALF, WALL_WIDTH]} />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* FLOOR */}
      <Plane
        position={[WALL_WIDTH / 2, 0, WALL_WIDTH / 2]}
        args={[WALL_WIDTH, WALL_WIDTH]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <meshStandardMaterial map={floorTexture} />
      </Plane>

      {/* TOP */}
      {!DEVMODE && (
        <mesh
          position={[WALL_WIDTH / 2, 3.4 * PIXEL, WALL_WIDTH / 2]}
          receiveShadow
        >
          <boxGeometry args={[WALL_WIDTH, WALL_WEIGHT, WALL_WIDTH]} />
          <meshStandardMaterial color="rgb(230, 230, 230)" />
        </mesh>
      )}
    </group>
  );
};

export default Rooms;
