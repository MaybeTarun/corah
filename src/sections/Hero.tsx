"use client";

import React from "react";
import { MagnifyingGlass } from "revoicons";
import Navbar from "@/components/Navbar";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Navbar/>

      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://framerusercontent.com/assets/Vd6TZMoLPdnnckVFSH24JPgHqY.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-base tracking-[0.2em] mb-2 uppercase">
          You are not alone
        </p>

        <h1 className="text-[53px] mb-8 garamond italic font-light leading-[1em]">
          You are light waiting
          <br />
          to be seen
        </h1>

        <div className="relative w-full max-w-[415px] h-[56px] group">

          <MagnifyingGlass
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a3a3a3] group-hover:text-[#7a7a7a] w-5 h-5 pointer-events-none"
          />

          <input
            type="text"
            placeholder="Open door to self discovery"
            className="w-full h-full text-base pl-12 pr-4 rounded-lg bg-white text-[#7a7a7a] placeholder-[#a3a3a3] group-hover:placeholder-[#7a7a7a] focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
