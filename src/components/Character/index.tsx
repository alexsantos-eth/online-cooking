import { CapsuleCollider, RigidBody } from '@react-three/rapier';

import { useControlls } from '../../hooks/character';
import KitchenPropMesh from '../../rooms/kitchen/components/KitchenProp/components/PropMesh';

const Player = () => {
  const { ref, axe } = useControlls();

  return (
    <>
      <RigidBody
        ref={ref}
        mass={1}
        type="dynamic"
        colliders={false}
        position={[10, 2, 10]}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[2, 0.5]} />
      </RigidBody>

      <group
        ref={axe}
        scale={0.3}
        onPointerMissed={() => {
          if (!axe.current) return;
          axe.current.children[0].rotation.x = -0.5;
        }}
      >
        <KitchenPropMesh
          name="Frying_pan"
          rotation={[Math.PI, Math.PI * 0.6, Math.PI / 8]}
          position={[1, -0.7, 0.5]}
        />
      </group>
    </>
  );
};

export default Player;
