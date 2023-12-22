import React from "react";

import KitchenPropModel from "./components/PropModel";
import { KitchenModelProps } from "./types";
import KitchenPropWithPhysics from "./components/PropWithPhysics";

const KitchenProp: React.FC<KitchenModelProps> = (props) => {
  if (props.physics) return <KitchenPropWithPhysics {...props} />;
  return <KitchenPropModel {...props} />;
};

KitchenProp.defaultProps = {
  face: "front",
  physics: false,
  physicsStartAnimation: true,
};

export default KitchenProp;
