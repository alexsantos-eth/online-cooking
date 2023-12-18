import React from "react";
import { KITCHEN_RECT } from "../../components/KitchenProp/utils";
import KitchenProp from "../../components/KitchenProp";
import { PIXEL } from "../../utils";
import Light from "./components/Light";

interface KitchenProps {}
const Kitchen: React.FC<KitchenProps> = () => {
  return (
    <group>
      {/* LIGHTS  */}
      <>
        <Light />

        <KitchenProp
          name="Light_fixture"
          face="left"
          x={KITCHEN_RECT.Large_countertop.x + KITCHEN_RECT.Light_fixture.x}
          y={KITCHEN_RECT.Fridge.y - KITCHEN_RECT.Small_countertop.y / 2}
          z={KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Light_fixture.z * 2}
        />
      </>

      {/* LEFT PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp
            z={KITCHEN_RECT.Small_countertop.z}
            name="Small_countertop"
            face="left"
            x={0}
          />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Glass_cup"
              face="left"
              x={
                KITCHEN_RECT.Large_countertop.z / 2 -
                KITCHEN_RECT.Glass_cup.z / 2
              }
              y={KITCHEN_RECT.Large_countertop.y}
              z={3 + KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Glass_cup.x}
            />

            <KitchenProp
              name="Glass_cup"
              face="left"
              x={
                KITCHEN_RECT.Large_countertop.z / 2 -
                KITCHEN_RECT.Glass_cup.z / 2
              }
              y={KITCHEN_RECT.Large_countertop.y}
              z={
                3 +
                KITCHEN_RECT.Small_countertop.z +
                KITCHEN_RECT.Glass_cup.x * 3
              }
            />

            <KitchenProp
              name="Glass_cup"
              face="left"
              x={
                KITCHEN_RECT.Large_countertop.z / 2 -
                KITCHEN_RECT.Glass_cup.z / 2
              }
              y={KITCHEN_RECT.Large_countertop.y}
              z={
                3 +
                KITCHEN_RECT.Small_countertop.z +
                KITCHEN_RECT.Glass_cup.x * 5
              }
            />
          </>
        </>

        {/* SECOND BLOCK */}
        <>
          <KitchenProp
            name="Fridge"
            face="left"
            x={0}
            z={
              KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Small_countertop.x
            }
          />
        </>

        {/* THIRD AND FOURTH BLOCK */}
        <>
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

          {/* OVER THIS BLOCK */}
          <>
            {/* MIDDLE */}
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

            {/* LEFT */}
            <pointLight
              color="#ff3d00"
              position={
                [
                  KITCHEN_RECT.Large_pot.z / 2,
                  KITCHEN_RECT.Large_countertop.y +
                    KITCHEN_RECT.Large_pot.y * 1.5,
                  KITCHEN_RECT.Small_countertop.z +
                    KITCHEN_RECT.Small_countertop.x +
                    KITCHEN_RECT.Fridge.x +
                    KITCHEN_RECT.Large_countertop.x / 2 -
                    KITCHEN_RECT.Microwave.x / 2 +
                    KITCHEN_RECT.Microwave.x +
                    KITCHEN_RECT.Large_pot.x,
                ].map((pos) => pos * PIXEL) as [number, number, number]
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
          </>
        </>
      </>

      {/* LEFT TOP PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp
            name="Small_countertop"
            x={0}
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
          />
        </>

        {/* SECOND AND THIRD BLOCK */}
        <>
          <KitchenProp
            name="Large_countertop"
            face="left"
            x={0}
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
            z={KITCHEN_RECT.Small_countertop.z}
          />
        </>

        {/* FOURTH AND FIVE BLOCK */}
        <>
          <KitchenProp
            name="Large_countertop"
            face="left"
            x={0}
            y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
            z={
              KITCHEN_RECT.Small_countertop.z + KITCHEN_RECT.Large_countertop.x
            }
          />
        </>
      </>

      {/* RIGHT PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp name="Small_countertop" x={0} />
        </>

        {/* SECOND BLOCK */}
        <>
          <KitchenProp
            name="Small_countertop"
            x={KITCHEN_RECT.Small_countertop.x}
          />

          {/* OVER THIS BLOCK */}
          <KitchenProp
            name="Glass_plant_pot"
            y={+KITCHEN_RECT.Small_countertop.y}
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x / 4
            }
            z={KITCHEN_RECT.Small_countertop.z / 4}
          />
        </>

        {/* THIRD BLOCK */}
        <>
          <KitchenProp name="Sink" x={KITCHEN_RECT.Small_countertop.x * 2} />
        </>

        {/* FOURTH BLOCK */}
        <>
          <KitchenProp
            name="Stove"
            x={KITCHEN_RECT.Small_countertop.x * 2 + KITCHEN_RECT.Sink.x}
          />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Frying_pan"
              face="back"
              y={+KITCHEN_RECT.Stove.y}
              x={KITCHEN_RECT.Small_countertop.x * 2 + KITCHEN_RECT.Sink.x}
            />
          </>
        </>

        {/* FIFTH BLOCK */}
        <>
          <KitchenProp
            name="Small_countertop"
            x={
              KITCHEN_RECT.Small_countertop.x * 2 +
              KITCHEN_RECT.Sink.x +
              KITCHEN_RECT.Stove.x
            }
          />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Bowl"
              face="back"
              y={KITCHEN_RECT.Small_countertop.y}
              z={KITCHEN_RECT.Small_countertop.z / 2 - KITCHEN_RECT.Bowl.z / 2}
              x={
                KITCHEN_RECT.Small_countertop.x * 2 +
                KITCHEN_RECT.Small_countertop.x / 2 +
                KITCHEN_RECT.Sink.x +
                KITCHEN_RECT.Stove.x -
                KITCHEN_RECT.Bowl.x / 2
              }
            />
          </>
        </>
      </>

      {/* RIGHT TOP PART */}
      <>
        {/* SECOND AND THIRD BLOCK */}
        <KitchenProp
          name="Large_countertop"
          y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
          x={KITCHEN_RECT.Small_countertop.x}
        />

        {/* FOURTH AND FIVE BLOCK */}
        <KitchenProp
          name="Large_countertop"
          y={KITCHEN_RECT.Fridge.y + KITCHEN_RECT.Large_countertop.y / 2}
          x={KITCHEN_RECT.Small_countertop.x + KITCHEN_RECT.Large_countertop.x}
        />
      </>

      {/* CENTER PART */}
      <>
        {/* TABLE */}
        <>
          <KitchenProp
            name="Large_wooden_table"
            x={KITCHEN_RECT.Small_countertop.x * 2}
            z={KITCHEN_RECT.Stove.z * 3}
          />
        </>

        {/* CHAIRS */}
        <>
          <KitchenProp
            name="Wood_chair"
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Wood_chair.x
            }
            z={KITCHEN_RECT.Stove.z * 2 + KITCHEN_RECT.Wood_chair.z / 2}
          />

          <KitchenProp
            name="Wood_chair"
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Wood_chair.x * 4
            }
            z={KITCHEN_RECT.Stove.z * 2 + KITCHEN_RECT.Wood_chair.z / 2}
          />

          <KitchenProp
            name="Wood_chair"
            face="left"
            x={KITCHEN_RECT.Small_countertop.x * 2 - KITCHEN_RECT.Wood_chair.z + 1}
            z={
              KITCHEN_RECT.Stove.z * 3 +
              KITCHEN_RECT.Large_wooden_table.z / 2 -
              KITCHEN_RECT.Wood_chair.x / 2
            }
          />

          <KitchenProp
            name="Wood_chair"
            face="back"
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Wood_chair.x
            }
            z={KITCHEN_RECT.Stove.z * 3 + KITCHEN_RECT.Large_wooden_table.z}
          />

          <KitchenProp
            name="Wood_chair"
            face="back"
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Wood_chair.x * 4
            }
            z={KITCHEN_RECT.Stove.z * 3 + KITCHEN_RECT.Large_wooden_table.z}
          />

          <KitchenProp
            name="Wood_chair"
            face="right"
            x={
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Small_countertop.x +
              KITCHEN_RECT.Large_wooden_table.x
            }
            z={
              KITCHEN_RECT.Stove.z * 3 +
              KITCHEN_RECT.Large_wooden_table.z / 2 -
              KITCHEN_RECT.Wood_chair.x / 2
            }
          />
        </>
      </>
    </group>
  );
};

export default Kitchen;
