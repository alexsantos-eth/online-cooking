import { getMatrixFromProps } from "../../tools";
import { KitchenModelProps } from "../../types";
import KitchenPropMesh from "../PropMesh";

const KitchenPropModel: React.FC<KitchenModelProps> = (props) => {
  const { MatrixX, MatrixY, MatrixZ } = getMatrixFromProps(props);

  return (
    <mesh position={[MatrixX, MatrixY, MatrixZ]}>
      <KitchenPropMesh {...props} />
    </mesh>
  );
};

export default KitchenPropModel;
