import { Ref, useEffect, useRef } from "react";
import * as THREE from "three";

import { useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";

import { usePlayerControls } from "../../hooks/character";

const Character: React.FC = () => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 5;

  const { camera } = useThree();

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    position: [10, 2, 3],
    args: [2],
  }));

  const { forward, backward, left, right, jump } = usePlayerControls();
  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useFrame(() => {
    ref.current?.getWorldPosition(camera.position);
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity?.current[1]) < 0.05)
      api.velocity.set(velocity.current[0], 5, velocity.current[2]);
  });

  return (
    <group>
      <mesh
        castShadow
        ref={
          ref as unknown as Ref<
            THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>>
          >
        }
      >
        <sphereGeometry />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

export default Character;
