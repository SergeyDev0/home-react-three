import React from "react";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./../office/Office";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={.25}>
        <Office />
      </ScrollControls>
    </>
  );
};

export default Experience;
