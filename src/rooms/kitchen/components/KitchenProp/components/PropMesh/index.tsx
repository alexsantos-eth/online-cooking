import { Clone } from "@react-three/drei";

import { PIXEL } from "../../../../../../utils";
import { useFBXModel } from "../../hooks";
import { KitchenModelProps } from "../../types";
import { KITCHEN_DIMS } from "../../utils";

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

export default KitchenPropMesh;
