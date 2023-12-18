import React from "react";

import { Canvas } from "@react-three/fiber";

import CameraControls from "./components/CameraControls";
import Rooms from "./rooms";
import Kitchen from "./rooms/kitchen";

interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          fov: 60,
          position: [11, 3, 8],
        }}
      >
        <ambientLight intensity={0.7} color="#ffe4b3" />
        <CameraControls />
        <Rooms />
        <Kitchen />
      </Canvas>
    </div>
  );
};

export default App;
