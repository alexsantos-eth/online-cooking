import { useRef } from 'react';
import { Group, MathUtils, Vector3 } from 'three';

import { Ray } from '@dimforge/rapier3d-compat';
import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, useRapier } from '@react-three/rapier';

const SPEED = 5;
const direction = new Vector3();
const frontVector = new Vector3();
const sideVector = new Vector3();
const rotation = new Vector3();
const lerp = MathUtils.lerp;

export const useControlls = () => {
  const ref = useRef<RapierRigidBody | null>(null);
  const axe = useRef<Group | null>(null);
  const rapier = useRapier();
  const [, get] = useKeyboardControls();

  useFrame((state) => {
    if (!ref.current) return;
    if (!axe.current) return;

    const { forward, backward, left, right, jump } = get();
    const velocity = ref.current.linvel();

    const bodyTranslation = ref.current.translation();
    state.camera.position.set(
      bodyTranslation.x,
      bodyTranslation.y,
      bodyTranslation.z
    );

    // AXE
    axe.current.children[0].rotation.x = lerp(
      axe.current.children[0].rotation.x,
      Math.sin(+(velocity.x > 1) * state.clock.elapsedTime * 10) / 6,
      0.1
    );
    axe.current.rotation.copy(state.camera.rotation);
    axe.current.position
      .copy(state.camera.position)
      .add(state.camera.getWorldDirection(rotation).multiplyScalar(1));

    frontVector.set(0, 0, +backward - +forward);
    sideVector.set(+left - +right, 0, 0);

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation);
    ref.current.setLinvel(
      { x: direction.x, y: velocity.y, z: direction.z },
      false
    );

    const ray = rapier.world.castRay(
      new Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }),
      1.75,
      true
    );

    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75;
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 3, z: 0 }, true);
  });

  return { ref, axe };
};
