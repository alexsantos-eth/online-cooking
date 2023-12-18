import React from "react";

import { OrbitControls } from "@react-three/drei";
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
          position: [11, 3, 10],
        }}
      >
        <ambientLight intensity={0.7} color="#ffe4b3" />
        <OrbitControls
          makeDefault
          enableDamping
          panSpeed={0.05}
          zoomSpeed={0.05}
          rotateSpeed={0.05}
          maxPolarAngle={Math.PI / 2.1}
          minPolarAngle={Math.PI / 2.6}
        />
        <Rooms />
        <Kitchen />
      </Canvas>
    </div>
  );
};

export default App;
