import React from "react";

import { PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

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
        {DEVMODE && <axesHelper position={[0, 0, 0]} />}
        {DEVMODE ? <PointerLockControls /> : <CameraControls />}
        <Physics debug={DEVMODE} gravity={[0, -9.8, 0]}>
          <Rooms />
          <Kitchen />
          {/* <OrbitControls makeDefault enableDamping /> */}
          {/* <PointerLockControls />
          <KeyboardControls
            map={[
              { keys: ["w"], name: "forward" },
              { keys: ["s"], name: "backward" },
              { keys: ["a"], name: "left" },
              { keys: ["d"], name: "right" },
            ]}
          >
            <Character />
          </KeyboardControls> */}
        </Physics>
      </Canvas>
    </div>
  );
};

export default App;
