import React from "react";

import { OrbitControls } from "@react-three/drei";
import { DEVMODE } from "../../utils";

interface CameraControlsProps {}
const CameraControls: React.FC<CameraControlsProps> = () => {
  if (DEVMODE) return <OrbitControls makeDefault enableDamping />;
  return (
    <OrbitControls
      makeDefault
      enableDamping
      panSpeed={0.05}
      zoomSpeed={0.05}
      rotateSpeed={0.05}
      maxPolarAngle={Math.PI / 2.1}
      minPolarAngle={Math.PI / 2.6}
    />
  );
};

export default CameraControls;
