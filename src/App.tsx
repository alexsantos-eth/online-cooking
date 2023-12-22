import React from "react";

import { KeyboardControls, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import Character from "./components/Character";
import Rooms from "./rooms";
import Kitchen from "./rooms/kitchen";
import { DEVMODE } from "./utils";
import Pointer from "./ui/Pointer";

interface AppProps {}
const App: React.FC<AppProps> = () => {
  return (
    <>
      <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
        <KeyboardControls
          map={[
            { name: "forward", keys: ["ArrowUp", "w", "W"] },
            { name: "backward", keys: ["ArrowDown", "s", "S"] },
            { name: "left", keys: ["ArrowLeft", "a", "A"] },
            { name: "right", keys: ["ArrowRight", "d", "D"] },
            { name: "jump", keys: ["Space"] },
          ]}
        >
          <Canvas
            camera={{
              fov: 60,
              rotation: [0, 0.8, 0],
            }}
          >
            <ambientLight
              intensity={DEVMODE ? 2 : 0.7}
              color={DEVMODE ? "#fff" : "#ffe4b3"}
            />
            {DEVMODE && <axesHelper position={[0, 0, 0]} />}
            <Physics debug={DEVMODE} gravity={[0, -9.8, 0]}>
              <Rooms />
              <Kitchen />
              <Character />
            </Physics>
            <PointerLockControls />
          </Canvas>
        </KeyboardControls>
      </div>
      <Pointer />
    </>
  );
};

export default App;
