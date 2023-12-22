import React from "react";

import { CuboidCollider } from "@react-three/rapier";

import { PIXEL } from "../../../../../../../../utils";
import { KitchenModelProps } from "../../../../types";
import { KITCHEN_RECTS } from "../../../../utils";

const KitchenCollider: React.FC<KitchenModelProps> = (props) => {
  const isRotated = ["right", "left"].includes(props.face ?? "front");

  return (
    <CuboidCollider
      args={[
        (PIXEL * KITCHEN_RECTS[props.name][isRotated ? "z" : "x"]) / 2,
        (PIXEL * KITCHEN_RECTS[props.name].y) / 2,
        (PIXEL * KITCHEN_RECTS[props.name][isRotated ? "x" : "z"]) / 2,
      ]}
    />
  );
};

export default KitchenCollider;
