import React from "react";

import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Rooms from "./rooms";
import Kitchen from "./rooms/kitchen";

interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          fov: 75,
          position: [8, 3.5, 7],
        }}
      >
        <ambientLight intensity={0.7} color="#ffe4b3" />
        <OrbitControls makeDefault />
        <Rooms />
        <Kitchen />
        <Sky />
      </Canvas>
    </div>
  );
};

export default App;
