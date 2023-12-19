import React from "react";

import { Clone, CloneProps } from "@react-three/drei";

import { DEVMODE, PIXEL } from "../../../../utils";
import { useFBXModel } from "./hooks";
import { KitchenPropName } from "./types";
import { KITCHEN_DIMS } from "./utils";

interface KitchenModelProps extends Omit<CloneProps, "object"> {
  x?: number | string;
  y?: number | string;
  z?: number | string;
  above?: KitchenPropName[];
  name: KitchenPropName;
  face?: "left" | "right" | "front" | "back";
}

const KitchenProp: React.FC<KitchenModelProps> = ({
  name,
  x = 0,
  y = 0,
  z = 0,
  above,
  face = "front",
  ...meshProps
}) => {
  const { fbx } = useFBXModel(name);

  const matrix = [+x, +y, +z];
  const MatrixX = matrix[0] * PIXEL;

  const MatrixY =
    (above
      ? above?.map((a) => KITCHEN_DIMS[a].y).reduce((a, b) => a + b, 0) ?? 0
      : matrix[1]) * PIXEL;
  const MatrixZ = matrix[2] * PIXEL;

  const isRotated = ["right", "left"].includes(face);

  return (
    <mesh position={[MatrixX, MatrixY, MatrixZ]}>
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
            (PIXEL *
              (isRotated ? KITCHEN_DIMS[name].z : KITCHEN_DIMS[name].x)) /
              2,
            (PIXEL * KITCHEN_DIMS[name].y) / 2,
            (PIXEL *
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
          (PIXEL * (isRotated ? KITCHEN_DIMS[name].z : KITCHEN_DIMS[name].x)) /
            2,
          0,
          (PIXEL * (isRotated ? KITCHEN_DIMS[name].x : KITCHEN_DIMS[name].z)) /
            2,
        ]}
        {...meshProps}
      />
    </mesh>
  );
};

export default KitchenProp;
