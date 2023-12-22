import { RigidBody } from "@react-three/rapier";

import { PIXEL } from "../../../../../../utils";
import { getMatrixFromProps } from "../../tools";
import { KitchenModelProps } from "../../types";
import { KITCHEN_DIMS } from "../../utils";
import KitchenPropMesh from "../PropMesh";
import KitchenCollider from "./components/Collider";

const KitchenPropWithPhysics: React.FC<KitchenModelProps> = (props) => {
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
        <KitchenCollider {...props} />
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
        MatrixY +
          (PIXEL * KITCHEN_DIMS[name].y) / 2 +
          (props.physicsStartAnimation
            ? // RANDOM BETWEEN 0 AND 0.5
              Math.random() / 2
            : 0),
        MatrixZ + (PIXEL * KITCHEN_DIMS[name][isRotated ? "x" : "z"]) / 2,
      ]}
    >
      <KitchenCollider {...props} />
      <KitchenPropMesh {...props} />
    </RigidBody>
  );
};

export default KitchenPropWithPhysics;
