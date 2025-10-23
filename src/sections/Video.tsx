"use client";

import React from "react";

const VideoHero: React.FC = () => {
  return (
    <section className="relative my-40 w-full aspect-video max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://framerusercontent.com/assets/j43KLPporacOnF8jptWQTmfMM8c.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

      <div className="relative z-10 w-full max-w-7xl text-center px-6">
        <h1 className="text-white text-[48px] md:text-[56px] mb-4 leading-[56px]">
          A trusted recovery leader<br/><span className="garamond">for over 10 years </span>
        </h1>
        <p className="text-white text-lg leading-[1.6em]">
          Evidence and ethics matter to us. Since 2013, our expert team has built comprehensive<br className="hidden md:block"/> resources you can trust to find the right treatment for you or your loved one.
        </p>
      </div>
    </section>
  );
};

export default VideoHero;
