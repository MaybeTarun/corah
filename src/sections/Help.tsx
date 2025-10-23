"use client";

import React from "react";
import Image from "next/image";

const helpData = [
  {
    image: "/help/brain.png",
    title: "Start Your Journey",
    subtitle:
      "Take the first step toward a healthier, addiction-free life. Every small move today leads to lasting change tomorrow.",
  },
  {
    image: "/help/brain.png",
    title: "Support Your Loved Ones",
    subtitle:
      "Help someone you care about take control of their recovery. Compassion and understanding can make all the difference.",
  },
  {
    image: "/help/brain.png",
    title: "Pay For Treatment",
    subtitle:
      "Affordable recovery is possible. Explore flexible options that make quality treatment within reach.",
  },
  {
    image: "/help/brain.png",
    title: "Sustaining Recovery",
    subtitle:
      "Recovery doesn't end with treatment—it grows every day. Stay committed, stay supported, and keep thriving.",
  },
];

const Help: React.FC = () => {
  return (
    <section
      id="help"
      className="w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center px-6 py-16"
    >
      <h2 className="text-[32px] md:text-[48px] text-[#1F1F1F] font-normal w-full text-left">
        Get The Help You Need 
      </h2>
      <p className="text-[16px] text-[#5E6B64] mb-12 text-left w-full">
        Clinically reviewed resources to guide you on your recovery journey.
      </p>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8">
        {helpData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[450px] bg-[#F4F4F5] rounded-[12px] p-8 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start justify-between">
              <p className="text-[#09090B] text-[32px] font-semibold leading-[1.2em] w-[80%]">
                {item.title}
              </p>
              <Image
                src={item.image}
                alt={item.title}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <p className="text-[#666666] text-base leading-[1.6em] w-[90%] line-clamp-5">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Help;
