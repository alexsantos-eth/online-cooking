import React from "react";

import { Clone } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

import { PIXEL } from "../../../../utils";
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
        physics ? 0 : (PIXEL * KITCHEN_DIMS[name][isRotated ? "z" : "x"]) / 2,
        physics ? -((KITCHEN_DIMS[name].y / 2) * PIXEL) : 0,
        physics ? 0 : (PIXEL * KITCHEN_DIMS[name][isRotated ? "x" : "z"]) / 2,
      ]}
      {...meshProps}
    />
  );
};

export const KitchenPropWithPhysics: React.FC<KitchenModelProps> = (props) => {
  const { MatrixX, MatrixY, MatrixZ } = getMatrixFromProps(props);

  const { face, physicsType, name } = props;
  const isRotated = ["right", "left"].includes(face ?? "front");

  if (physicsType === "Static") {
    return (
      <mesh
        position={[
          MatrixX + (PIXEL * KITCHEN_DIMS[name][isRotated ? "z" : "x"]) / 2,
          MatrixY + (KITCHEN_DIMS[name].y / 2) * PIXEL,
          MatrixZ + (PIXEL * KITCHEN_DIMS[name][isRotated ? "x" : "z"]) / 2,
        ]}
      >
        <CuboidCollider
          args={[
            (PIXEL * KITCHEN_RECTS[props.name][isRotated ? "z" : "x"]) / 2,
            (PIXEL * KITCHEN_RECTS[props.name].y) / 2,
            (PIXEL * KITCHEN_RECTS[props.name][isRotated ? "x" : "z"]) / 2,
          ]}
        />
        <KitchenPropMesh {...props} />
      </mesh>
    );
  }

  return (
    <RigidBody
      colliders={false}
      mass={props.mass}
      position={[
        MatrixX + (PIXEL * KITCHEN_DIMS[name][isRotated ? "z" : "x"]) / 2,
        MatrixY + (PIXEL * KITCHEN_DIMS[name].y) / 2,
        MatrixZ + (PIXEL * KITCHEN_DIMS[name][isRotated ? "x" : "z"]) / 2,
      ]}
    >
      <CuboidCollider
        args={[
          (PIXEL * KITCHEN_RECTS[props.name][isRotated ? "z" : "x"]) / 2,
          (PIXEL * KITCHEN_RECTS[props.name].y) / 2,
          (PIXEL * KITCHEN_RECTS[props.name][isRotated ? "x" : "z"]) / 2,
        ]}
      />
      <KitchenPropMesh {...props} />
    </RigidBody>
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
