"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Navbar from "./navbar/navbar";

const Lenis = ({ children }) => {
  return (
    <ReactLenis
      options={{
        duration: 2,
        wheelMultiplier: 1.5,
      }}
      root
    >
      {children}
    </ReactLenis>
  );
};

export default Lenis;
