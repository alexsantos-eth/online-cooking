/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CameraControls: React.FC = () => {
  // @ts-ignore
  const controls: React.MutableRefObject<OrbitControls> = useRef();

  useEffect(() => {
    controls.current.addEventListener("change", () => {
      const { position, rotation } = controls.current.object;
      console.log("Camera Position:", position);
      console.log("Camera Rotation:", controls.current.object);
    });
  }, []);

  useFrame(() => {
    if (controls.current) controls.current.update();
  });

  return <OrbitControls ref={controls} makeDefault />;
};

export default CameraControls;
