import React from "react";

import { DEVMODE } from "../../utils";
import KitchenProp from "./components/KitchenProp";
import Light from "./components/Light";

interface KitchenProps {}
const Kitchen: React.FC<KitchenProps> = () => {
  if (DEVMODE) {
    return (
      <group>
        <KitchenProp physics name="Small_countertop" x="0" />
        <KitchenProp physics name="Wood_chair" x="1" />

        <KitchenProp name="Small_countertop" x="0" z="1" />
        <KitchenProp name="Wood_chair" x="1" z="1" />

        <KitchenProp
          physics
          physicsType="Static"
          name="Small_countertop"
          x="0"
          z="2"
        />
        <KitchenProp
          physics
          physicsType="Static"
          name="Wood_chair"
          x="1"
          z="2"
        />
      </group>
    );
  }

  return (
    <group>
      {/* LIGHTS */}
      <>
        <Light x="3.5" z="2" y="2" />

        {/* THIS IS AN EXCEPTION OF Y POSITION  NEVER DO THIS IN EDITOR MODE  */}
        <KitchenProp
          physics={true}
          physicsType="Static"
          name="Light_fixture"
          face="left"
          x="3"
          z="1"
          y="1.6"
        />
      </>

      {/* LEFT PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp
            physics={true}
            physicsType="Static"
            name="Small_countertop"
            face="left"
          />
        </>

        {/* SECOND BLOCK */}
        <>
          <KitchenProp
            physics={true}
            name="Small_countertop"
            face="left"
            z="1"
          />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              physics={true}
              z="1"
              name="Glass_cup"
              face="left"
              above={["Small_countertop"]}
            />
          </>
        </>

        {/* THIRD BLOCK */}
        <>
          <KitchenProp physics={true} name="Fridge" face="left" z="2" />
        </>

        {/* FOURTH BLOCK */}
        <>
          <KitchenProp
            physics={true}
            name="Small_countertop"
            face="left"
            z="3"
          />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              physics={true}
              name="Microwave"
              face="left"
              above={["Large_countertop"]}
              z="3"
            />
          </>
        </>

        {/* FIFTH BLOCK */}
        <>
          <KitchenProp
            physics={true}
            name="Small_countertop"
            face="left"
            z="4"
          />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              physics={true}
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
            physics={true}
            key={`left_top_${i}`}
            name="Small_countertop"
            above={["Fridge", "Large_pot"]}
            face="left"
            physicsType="Static"
            z={i}
          />
        ))}
      </>

      {/* FRONT PART */}
      <>
        {/* FIRST BLOCK */}
        <>
          <KitchenProp
            physics={true}
            physicsType="Static"
            name="Small_countertop"
            z={0}
          />
        </>

        {/* SECOND BLOCK */}
        <>
          <KitchenProp physics={true} name="Small_countertop" x="1" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              physics={true}
              name="Glass_plant_pot"
              above={["Small_countertop"]}
              x="1"
            />
          </>
        </>

        {/* THIRD BLOCK */}
        <>
          <KitchenProp physics={true} name="Sink" x="2" />
        </>

        {/* FOURTH BLOCK */}
        <>
          <KitchenProp physics={true} name="Stove" x="3" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              physics={true}
              name="Frying_pan"
              face="back"
              above={["Stove"]}
              x="3"
            />
          </>
        </>

        {/* FIFTH BLOCK */}
        <>
          <KitchenProp physics={true} name="Small_countertop" x="4" />

          {/* OVER THIS BLOCK */}
          <>
            <KitchenProp
              physics={true}
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
            physics={true}
            key={`front_top_${i}`}
            name="Small_countertop"
            above={["Fridge", "Large_pot"]}
            physicsType="Static"
            x={i}
          />
        ))}
      </>

      {/* CENTER PART */}
      <>
        {/* TABLE */}
        <>
          <KitchenProp physics={true} name="Large_wooden_table" x="3" z="3" />

          {/* OVER THIS TABLE */}
          <>
            <KitchenProp
              physics={true}
              name="Bowl"
              x="3"
              z="3"
              above={["Large_wooden_table"]}
            />

            <KitchenProp
              physics={true}
              name="Dish"
              x="4"
              z="3"
              above={["Large_wooden_table"]}
            />

            <KitchenProp
              physics={true}
              name="Glass_cup"
              x="4"
              z="3"
              above={["Large_wooden_table", "Dish"]}
            />
          </>

          {/* CHAIRS */}
          <>
            <KitchenProp physics={true} name="Wood_chair" x="3" z="2" />
            <KitchenProp physics={true} name="Wood_chair" x="4" z="2" />
            <KitchenProp
              physics={true}
              name="Wood_chair"
              x="5"
              z="3"
              face="right"
            />
            <KitchenProp
              physics={true}
              name="Wood_chair"
              x="4"
              z="4"
              face="back"
            />
            <KitchenProp
              physics={true}
              name="Wood_chair"
              x="3"
              z="4"
              face="back"
            />
            <KitchenProp
              physics={true}
              name="Wood_chair"
              x="2"
              z="3"
              face="left"
            />
          </>
        </>
      </>
    </group>
  );
};

export default Kitchen;
