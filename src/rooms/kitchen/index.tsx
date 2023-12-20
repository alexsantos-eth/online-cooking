import React from "react";

import { DEVMODE } from "../../utils";
import KitchenProp from "./components/KitchenProp";
import Light from "./components/Light";

interface KitchenProps {}
const Kitchen: React.FC<KitchenProps> = () => {
  if (DEVMODE) {
    return (
      <group>
        <KitchenProp name="Wood_chair" x="3" z="1" y="1" physics />
      </group>
    );
  }

  return (
    <group>
      {/* LIGHTS */}
      <>
        <Light x="3.5" z="2" y="2" />

        {/* THIS IS AN EXCEPTION OF Y POSITION  NEVER DO THIS IN EDITOR MODE  */}
        <KitchenProp name="Light_fixture" face="left" x="3" z="1" y="1.6" />
      </>

      {/* LEFT PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp name="Small_countertop" face="left" />
        </>

        {/* SECOND BLOCK */}
        <>
          <KitchenProp name="Small_countertop" face="left" z="1" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              z="1"
              name="Glass_cup"
              face="left"
              above={["Small_countertop"]}
            />
          </>
        </>

        {/* THIRD BLOCK */}
        <>
          <KitchenProp name="Fridge" face="left" z="2" />
        </>

        {/* FOURTH BLOCK */}
        <>
          <KitchenProp name="Large_countertop" face="left" z="3" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Microwave"
              face="left"
              above={["Large_countertop"]}
              z="3"
            />

            <KitchenProp
              name="Large_pot"
              face="left"
              above={["Large_countertop"]}
              z="4"
            />
          </>
        </>
      </>

      {/* LEFT TOP PART */}
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <KitchenProp
            key={`left_top_${i}`}
            name="Small_countertop"
            above={["Fridge", "Large_pot"]}
            face="left"
            z={i}
          />
        ))}
      </>

      {/* FRONT PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp name="Small_countertop" z={0} />
        </>

        {/* SECOND BLOCK */}
        <>
          <KitchenProp name="Small_countertop" x="1" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Glass_plant_pot"
              above={["Small_countertop"]}
              x="1"
            />
          </>
        </>

        {/* THIRD BLOCK */}
        <>
          <KitchenProp name="Sink" x="2" />
        </>

        {/* FOURTH BLOCK */}
        <>
          <KitchenProp name="Stove" x="3" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Frying_pan"
              face="back"
              above={["Stove"]}
              x="3"
            />
          </>
        </>

        {/* FIFTH BLOCK */}
        <>
          <KitchenProp name="Small_countertop" x="4" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              name="Bowl"
              face="back"
              above={["Small_countertop"]}
              x="4"
            />
          </>
        </>
      </>

      {/* FRONT TOP PART */}
      <>
        {Array.from({ length: 5 }).map((_, i) => (
          <KitchenProp
            key={`front_top_${i}`}
            name="Small_countertop"
            above={["Fridge", "Large_pot"]}
            x={i}
          />
        ))}
      </>

      {/* CENTER PART */}
      <>
        {/* TABLE */}
        <>
          <KitchenProp name="Large_wooden_table" x="3" z="3" />

          {/* OVER THIS TABLE */}
          <>
            <KitchenProp
              name="Bowl"
              x="3"
              z="3"
              above={["Large_wooden_table"]}
            />

            <KitchenProp
              name="Dish"
              x="4"
              z="3"
              above={["Large_wooden_table"]}
            />

            <KitchenProp
              name="Glass_cup"
              x="4"
              z="3"
              above={["Large_wooden_table", "Dish"]}
            />
          </>

          {/* CHAIRS */}
          <>
            <KitchenProp name="Wood_chair" x="3" z="2" />
            <KitchenProp name="Wood_chair" x="4" z="2" />
            <KitchenProp name="Wood_chair" x="5" z="3" face="right" />
            <KitchenProp name="Wood_chair" x="4" z="4" face="back" />
            <KitchenProp name="Wood_chair" x="3" z="4" face="back" />
            <KitchenProp name="Wood_chair" x="2" z="3" face="left" />
          </>
        </>
      </>
    </group>
  );
};

export default Kitchen;
