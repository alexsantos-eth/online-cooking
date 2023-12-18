import React from "react";

import { PIXEL } from "../../../../utils";
import { KITCHEN_RECT } from "../KitchenProp/utils";
import { useLightStart } from "./hooks";

interface LightProps {}
const Light: React.FC<LightProps> = () => {
  const [lightIntensity] = useLightStart();

  return (
    <spotLight
      position={[
        (KITCHEN_RECT.Large_countertop.x + KITCHEN_RECT.Light_fixture.x * 2) *
          PIXEL,
        3.5,
        (KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Light_fixture.z * 3) *
          PIXEL,
      ]}
      intensity={lightIntensity}
      color="#fff"
      penumbra={0.1}
      angle={Math.PI}
    />
  );
};

export default Light;
