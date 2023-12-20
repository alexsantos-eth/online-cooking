import React from "react";

import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";

import CameraControls from "./components/CameraControls";
import Rooms from "./rooms";
import Kitchen from "./rooms/kitchen";
import { DEVMODE } from "./utils";

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
        <ambientLight
          intensity={DEVMODE ? 2 : 0.7}
          color={DEVMODE ? "#fff" : "#ffe4b3"}
        />
        <CameraControls />
        <Physics gravity={[0, -9.8, 0]}>
          <Rooms />
          <Kitchen />
        </Physics>
      </Canvas>
    </div>
  );
};

export default App;
