import React, { useRef } from "react";
import { Group, Object3DEventMap } from "three";

import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import KitchenProp from "./components/KitchenProp";
import Rooms from "./rooms";
import { KITCHEN_RECT } from "./components/KitchenProp/utils";

interface AppProps {}
const App: React.FC<AppProps> = () => {
  const targetObject: React.MutableRefObject<Group<Object3DEventMap> | null> =
    useRef(null);

  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <Canvas
      linear
      flat
        camera={{
          fov: 75,
          position: [8, 4, 6],
        }}
      >
        <ambientLight intensity={4} />
        <OrbitControls makeDefault />
        <Sky />

        <group ref={targetObject}>
          <Rooms />
          <KitchenProp
            name="Large_countertop"
            face="left"
            x={0}
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
            z={KITCHEN_RECT.Small_countertop.z}
          />
          <KitchenProp
            name="Large_countertop"
            face="left"
            x={0}
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
            z={
              KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Large_countertop.x
            }
          />

          <KitchenProp
            name="Small_countertop"
            x={0}
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
          />

          <KitchenProp
            name="Large_countertop"
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
            x={KITCHEN_RECT.Small_countertop.x}
          />
          <KitchenProp
            name="Large_countertop"
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
            x={
              KITCHEN_RECT.Small_countertop.x + KITCHEN_RECT.Large_countertop.x
            }
          />

          <KitchenProp
            name="Small_countertop"
            face="left"
            x={0}
            z={KITCHEN_RECT.Small_countertop.z}
          />

          <KitchenProp
            name="Fridge"
            face="left"
            x={0}
            z={
              KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Small_countertop.x
            }
          />

          <KitchenProp
            name="Large_countertop"
            face="left"
            x={0}
            z={
              KITCHEN_RECT.Small_countertop.z +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Fridge.x
            }
          />

          <KitchenProp
            name="Microwave"
            face="left"
            x={0}
            y={KITCHEN_RECT.Large_countertop.y}
            z={
              KITCHEN_RECT.Small_countertop.z +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Fridge.x +
              KITCHEN_RECT.Large_countertop.x / 2 -
              KITCHEN_RECT.Microwave.x / 2
            }
          />

          <KitchenProp
            name="Large_pot"
            face="left"
            x={0}
            y={KITCHEN_RECT.Large_countertop.y}
            z={
              KITCHEN_RECT.Small_countertop.z +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Fridge.x +
              KITCHEN_RECT.Large_countertop.x / 2 -
              KITCHEN_RECT.Microwave.x / 2 +
              KITCHEN_RECT.Microwave.x
            }
          />

          <KitchenProp name="Small_countertop" x={0} />
          <KitchenProp
            name="Small_countertop"
            x={KITCHEN_RECT.Small_countertop.x}
          />
          <KitchenProp
            name="Small_countertop"
            x={KITCHEN_RECT.Small_countertop.x}
          />

          <KitchenProp name="Sink" x={KITCHEN_RECT.Small_countertop.x * 2} />

          <KitchenProp
            name="Stove"
            x={KITCHEN_RECT.Small_countertop.x * 2 + KITCHEN_RECT.Sink.x}
          />
          <KitchenProp
            name="Small_countertop"
            x={
              KITCHEN_RECT.Small_countertop.x * 2 +
              KITCHEN_RECT.Sink.x +
              KITCHEN_RECT.Stove.x
            }
          />

          <KitchenProp
            name="Glass_plant_pot"
            y={+KITCHEN_RECT.Small_countertop.y}
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x / 4
            }
            z={KITCHEN_RECT.Small_countertop.z / 4}
          />

          <KitchenProp
            name="Large_wooden_table"
            x={
              KITCHEN_RECT.Small_wooden_table.x +
              KITCHEN_RECT.Small_countertop.x
            }
            z={KITCHEN_RECT.Stove.z * 2}
          />

          <KitchenProp
            name="Wood_chair"
            face="left"
            x={
              KITCHEN_RECT.Small_wooden_table.x +
              KITCHEN_RECT.Small_countertop.x -
              KITCHEN_RECT.Wood_chair.x
            }
            z={
              KITCHEN_RECT.Stove.z * 2 +
              KITCHEN_RECT.Large_wooden_table.z / 2 -
              KITCHEN_RECT.Wood_chair.x / 2
            }
          />

          <KitchenProp
            name="Wood_chair"
            face="back"
            x={
              KITCHEN_RECT.Small_wooden_table.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Wood_chair.x
            }
            z={KITCHEN_RECT.Stove.z * 2 + KITCHEN_RECT.Large_wooden_table.z}
          />

          <KitchenProp
            name="Wood_chair"
            face="back"
            x={
              KITCHEN_RECT.Small_wooden_table.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Wood_chair.x * 3
            }
            z={KITCHEN_RECT.Stove.z * 2 + KITCHEN_RECT.Large_wooden_table.z}
          />
        </group>
      </Canvas>
    </div>
  );
};

export default App;
