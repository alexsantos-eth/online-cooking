import { useTexture } from "@react-three/drei";
import { CuboidCollider } from "@react-three/rapier";

import { DEVMODE, PIXEL } from "../utils";
import { WALL_HEIGHT, WALL_WEIGHT, WALL_WIDTH } from "./utils";

const Rooms: React.FC = () => {
  const wallTexture = useTexture("assets/textures/wall.jpg");
  const floorTexture = useTexture("assets/textures/floor.jpg");

  return (
    <group>
      {/* FLOOR */}
      <CuboidCollider
        rotation={[-Math.PI / 2, 0, 0]}
        args={[WALL_WIDTH, WALL_WIDTH, WALL_WEIGHT]}
        position={[WALL_WIDTH, -WALL_WEIGHT, WALL_WIDTH]}
      />
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[WALL_WIDTH, -WALL_WEIGHT, WALL_WIDTH]}
      >
        <boxGeometry args={[WALL_WIDTH * 2, WALL_WIDTH * 2, WALL_WEIGHT * 2]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      {/* FRONT */}
      <CuboidCollider
        args={[WALL_WIDTH, WALL_HEIGHT, WALL_WEIGHT]}
        position={[WALL_WIDTH, WALL_HEIGHT, -WALL_WEIGHT]}
      />
      <mesh position={[WALL_WIDTH, WALL_HEIGHT, -WALL_WEIGHT]}>
        <boxGeometry
          args={[WALL_WIDTH * 2, WALL_HEIGHT * 2, WALL_WEIGHT * 2]}
        />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* LEFT */}
      <CuboidCollider
        args={[WALL_WEIGHT, WALL_HEIGHT, WALL_WIDTH]}
        position={[-WALL_WEIGHT, WALL_HEIGHT, WALL_WIDTH]}
      />
      <mesh position={[-WALL_WEIGHT, WALL_HEIGHT, WALL_WIDTH]}>
        <boxGeometry
          args={[WALL_WEIGHT * 2, WALL_HEIGHT * 2, WALL_WIDTH * 2]}
        />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* RIGHT */}
      <CuboidCollider
        args={[WALL_WEIGHT, WALL_HEIGHT, WALL_WIDTH]}
        position={[WALL_WIDTH * 2 + WALL_WEIGHT, WALL_HEIGHT, WALL_WIDTH]}
      />
      <mesh position={[WALL_WIDTH * 2 + WALL_WEIGHT, WALL_HEIGHT, WALL_WIDTH]}>
        <boxGeometry
          args={[WALL_WEIGHT * 2, WALL_HEIGHT * 2, WALL_WIDTH * 2]}
        />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* BACK */}
      <CuboidCollider
        args={[WALL_WIDTH, WALL_HEIGHT, WALL_WEIGHT]}
        position={[WALL_WIDTH, WALL_HEIGHT, WALL_WIDTH * 2 + WALL_WEIGHT]}
      />
      <mesh position={[WALL_WIDTH, WALL_HEIGHT, WALL_WIDTH * 2 + WALL_WEIGHT]}>
        <boxGeometry
          args={[WALL_WIDTH * 2, WALL_HEIGHT * 2, WALL_WEIGHT * 2]}
        />
        <meshStandardMaterial map={wallTexture} />
      </mesh>

      {/* TOP */}
      {!DEVMODE && (
        <mesh position={[WALL_WIDTH, 3.4 * PIXEL, WALL_WIDTH]} receiveShadow>
          <boxGeometry args={[WALL_WIDTH * 2, WALL_WEIGHT, WALL_WIDTH * 2]} />
          <meshStandardMaterial color="rgb(230, 230, 230)" />
        </mesh>
      )}
    </group>
  );
};

export default Rooms;
