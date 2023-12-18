import React from "react";

import { Clone, CloneProps } from "@react-three/drei";

import { PIXEL } from "../../../../utils";
import { useFBXAlignment, useFBXModel } from "./hooks";
import { KitchenPropName } from "./types";

interface KitchenModelProps extends Omit<CloneProps, "object"> {
  x?: number;
  y?: number;
  z?: number;
  name: KitchenPropName;
  face?: "left" | "right" | "front" | "back";
}

const KitchenProp: React.FC<KitchenModelProps> = ({
  name,
  x = 0,
  y = 0,
  z = 0,
  face = "front",
  ...meshProps
}) => {
  const { fbx, meshRef } = useFBXModel(name);
  const { align, alignZ } = useFBXAlignment({ fbx, meshRef });

  return (
    <Clone
      receiveShadow
      castShadow
      key={`${name}-${align}-${alignZ}-${z}`}
      object={fbx}
      ref={meshRef}
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
      position={[align + x * PIXEL, y * PIXEL, alignZ + z * PIXEL]}
      {...meshProps}
    />
  );
};

export default KitchenProp;
