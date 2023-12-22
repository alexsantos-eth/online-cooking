import { useRef, useState } from "react";
import * as THREE from "three";

import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";

const Character: React.FC = (props) => {
  const [orientation, setOrientation] = useState(Math.PI);
  const [, getKeys] = useKeyboardControls();

  useFrame((state) => {
    // retrieve keys
    const keys = getKeys();

    let { forward, backward, leftward, rightward } = keys;

    // Keys pressed counter
    const nbOfKeysPressed = Object.values(keys).filter((key) => key).length;

    if (forward && backward && nbOfKeysPressed === 2) forward = false;

    if (leftward && rightward && nbOfKeysPressed === 2) leftward = false;

    const angle = Math.PI / 4 / 7; // rotation normalizedSpeed (more divided => more smooth)

    const topLeftAngle = 3.927; // (225 * Math.PI / 180).toFixed(3)

    const bottomLeftAngle = 5.498; // (315 * Math.PI / 180).toFixed(3)

    const topRightAngle = 2.356; // (135 * Math.PI / 180).toFixed(3)

    const bottomRightAngle = 0.785; // (45 * Math.PI / 180).toFixed(3)

    let aTanAngle = Math.atan2(Math.sin(orientation), Math.cos(orientation));
    aTanAngle = aTanAngle < 0 ? aTanAngle + Math.PI * 2 : aTanAngle;
    aTanAngle = Number(aTanAngle.toFixed(3));
    aTanAngle = aTanAngle == 0 ? Number((Math.PI * 2).toFixed(3)) : aTanAngle;

    const keysCombinations = {
      forwardRight: forward && !backward && !leftward && rightward,
      forwardLeft: forward && !backward && leftward && !rightward,
      backwardRight: !forward && backward && !leftward && rightward,
      backwardLeft: !forward && backward && leftward && !rightward,
      forward: forward && !backward && !leftward && !rightward,
      right: !forward && !backward && !leftward && rightward,
      backward: !forward && backward && !leftward && !rightward,
      left: !forward && !backward && leftward && !rightward,
    };

    // Forward-Rightward
    if (keysCombinations.forwardRight && aTanAngle != topRightAngle) {
      setOrientation(
        (prevState) => prevState + angle * (aTanAngle > topRightAngle ? -1 : 1)
      );
    }

    // Forward-Leftward
    if (keysCombinations.forwardLeft && aTanAngle != topLeftAngle) {
      setOrientation(
        (prevState) => prevState + angle * (aTanAngle > topLeftAngle ? -1 : 1)
      );
    }

    // Backward-Rightward
    if (keysCombinations.backwardRight && aTanAngle != bottomRightAngle) {
      setOrientation(
        (prevState) =>
          prevState +
          angle *
            (aTanAngle > bottomRightAngle && aTanAngle < topLeftAngle ? -1 : 1)
      );
    }

    // Backward-Leftward
    if (keysCombinations.backwardLeft && aTanAngle != bottomLeftAngle) {
      setOrientation(
        (prevState) =>
          prevState +
          angle *
            (aTanAngle < topRightAngle || aTanAngle > bottomLeftAngle ? -1 : 1)
      );
    }

    // Rightward
    if (keysCombinations.right && Math.sin(orientation) != 1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.cos(orientation) > 0 ? 1 : -1)
      );
    }

    // Leftward
    if (keysCombinations.left && Math.sin(orientation) != -1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.cos(orientation) > 0 ? -1 : 1)
      );
    }

    // Forward
    if (keysCombinations.forward && Math.cos(orientation) != -1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.sin(orientation) > 0 ? 1 : -1)
      );
    }

    // Backward
    if (keysCombinations.backward && Math.cos(orientation) != 1) {
      setOrientation(
        (prevState) => prevState + angle * (Math.sin(orientation) > 0 ? -1 : 1)
      );
    }

    // Lock X and Z model rotations and update rotation Y
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(new THREE.Euler(0, orientation, 0));

    /**
     * Camera Movement
     */
    if (!props.orbitControls) {
      const cameraPosition = new THREE.Vector3();

      cameraPosition.z += 5;
      cameraPosition.y += 2.5;

      const cameraTarget = new THREE.Vector3();

      cameraTarget.y += 0.25;

      state.camera.position.copy(cameraPosition);
      state.camera.lookAt(cameraTarget);
    }
  });

  return (
    <RigidBody
      lockRotations={true}
      colliders={false}
      position={[0, 1, 0]}
      restitution={0.2}
      friction={1}
    >
      <CapsuleCollider args={[0.3, 0.25]} position={[0, -0.45, 0]} />=
    </RigidBody>
  );
};

export default Character;
