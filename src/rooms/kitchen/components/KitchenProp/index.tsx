import React, { Ref } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";

import { useBox } from "@react-three/cannon";
import { Clone } from "@react-three/drei";

import { DEVMODE, PIXEL } from "../../../../utils";
import { useFBXModel } from "./hooks";
import { getMatrixFromProps } from "./tools";
import { KitchenModelProps } from "./types";
import { KITCHEN_DIMS, KITCHEN_RECTS } from "./utils";

const KitchenPropMesh: React.FC<KitchenModelProps> = ({
  name,
  physics,
  face = "front",
  ...meshProps
}) => {
  const { fbx } = useFBXModel(name);

  const isRotated = ["right", "left"].includes(face);

  return (
    <>
      {DEVMODE && (
        <mesh
          rotation={[
            0,
            face === "left"
              ? Math.PI / 2
              : face === "right"
              ? -Math.PI / 2
              : face === "front"
              ? 0
              : Math.PI,
            0,
          ]}
          position={[
            physics
              ? 0
              : (PIXEL *
                  (isRotated ? KITCHEN_DIMS[name].z : KITCHEN_DIMS[name].x)) /
                2,
            physics ? 0 : (PIXEL * KITCHEN_DIMS[name].y) / 2,
            physics
              ? 0
              : (PIXEL *
                  (isRotated ? KITCHEN_DIMS[name].x : KITCHEN_DIMS[name].z)) /
                2,
          ]}
        >
          <boxGeometry
            args={[
              PIXEL * KITCHEN_DIMS[name].x,
              PIXEL * KITCHEN_DIMS[name].y,
              PIXEL * KITCHEN_DIMS[name].z,
            ]}
          />
          <meshStandardMaterial wireframe />
        </mesh>
      )}

      <Clone
        castShadow
        object={fbx}
        receiveShadow
        scale={[0.007, 0.007, 0.007]}
        rotation={[
          0,
          face === "left"
            ? Math.PI / 2
            : face === "right"
            ? -Math.PI / 2
            : face === "front"
            ? 0
            : Math.PI,
          0,
        ]}
        position={[
          physics
            ? 0
            : (PIXEL *
                (isRotated ? KITCHEN_DIMS[name].z : KITCHEN_DIMS[name].x)) /
              2,
          physics ? -((KITCHEN_DIMS[name].y / 2) * PIXEL) : 0,
          physics
            ? 0
            : (PIXEL *
                (isRotated ? KITCHEN_DIMS[name].x : KITCHEN_DIMS[name].z)) /
              2,
        ]}
        {...meshProps}
      />
    </>
  );
};

export const KitchenPropWithPhysics: React.FC<KitchenModelProps> = (props) => {
  const { MatrixX, MatrixY, MatrixZ } = getMatrixFromProps(props);

  const [ref] = useBox(() => ({
    mass: 1,
    type: "Dynamic",
    position: [
      MatrixX,
      MatrixY + (props.physicsStartAnimation ? 1 : 0),
      MatrixZ + (KITCHEN_RECTS[props.name].z / 2) * PIXEL,
    ],
    args: [
      PIXEL * KITCHEN_RECTS[props.name].x,
      PIXEL * KITCHEN_RECTS[props.name].y,
      PIXEL * KITCHEN_RECTS[props.name].z,
    ],
  }));

  return (
    <mesh
      ref={ref as unknown as Ref<Mesh<BufferGeometry<NormalBufferAttributes>>>}
    >
      <KitchenPropMesh {...props} />
    </mesh>
  );
};

export const KitchenPropStatic: React.FC<KitchenModelProps> = (props) => {
  const { MatrixX, MatrixY, MatrixZ } = getMatrixFromProps(props);

  return (
    <mesh position={[MatrixX, MatrixY, MatrixZ]}>
      <KitchenPropMesh {...props} />
    </mesh>
  );
};

const KitchenProp: React.FC<KitchenModelProps> = (props) => {
  if (props.physics) return <KitchenPropWithPhysics {...props} />;
  return <KitchenPropStatic {...props} />;
};

KitchenProp.defaultProps = {
  physics: false,
  physicsStartAnimation: false,
  face: "front",
};

export default KitchenProp;
