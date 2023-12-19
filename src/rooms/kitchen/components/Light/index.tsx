import React from "react";

import { PIXEL } from "../../../../utils";
import { useLightStart } from "./hooks";

interface LightProps {
  x?: number | string;
  y?: number | string;
  z?: number | string;
}
const Light: React.FC<LightProps> = ({ x = 0, y = 0, z = 0 }) => {
  const [lightIntensity] = useLightStart();

  const matrix = [+x, +y, +z];
  const MatrixX = matrix[0] * PIXEL;
  const MatrixY = matrix[1] * PIXEL;
  const MatrixZ = matrix[2] * PIXEL;

  return (
    <spotLight
      position={[MatrixX, MatrixY, MatrixZ]}
      intensity={lightIntensity}
      color="#fff"
      penumbra={0.1}
      angle={Math.PI}
    />
  );
};

export default Light;
