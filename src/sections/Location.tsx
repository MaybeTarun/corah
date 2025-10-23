"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const locationData = [
  {
    image: "/locations/location1.png",
    name: "Singapore",
    quantity: "750+ Treatment Centres",
  },
  {
    image: "/locations/location1.png",
    name: "Thailand",
    quantity: "350+ Treatment Centres",
  },
  {
    image: "/locations/location1.png",
    name: "Hong Kong",
    quantity: "350+ Treatment Centres",
  },
  {
    image: "/locations/location1.png",
    name: "Macau",
    quantity: "1000+ Treatment Centres",
  },
  {
    image: "/locations/location1.png",
    name: "Taiwan",
    quantity: "150+ Treatment Centres",
  },
  {
    image: "/locations/location1.png",
    name: "Mumbai",
    quantity: "450+ Treatment Centres",
  },
];

const CARD_WIDTH = 380;
const CARD_GAP = 32;

const Locations: React.FC = () => {
  const x = useMotionValue(0);
  const animationRef = useRef<number>(0);

  const speed = 1;

  const startScroll = () => {
    cancelAnimationFrame(animationRef.current);

    const step = () => {
      const totalWidth = locationData.length * (CARD_WIDTH + CARD_GAP);
      const prev = x.get();
      const next = prev - speed;
      x.set(next <= -totalWidth ? 0 : next);

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopScroll = () => cancelAnimationFrame(animationRef.current);

  useEffect(() => {
    startScroll();
    return () => stopScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="locations"
      className="w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <h2 className="text-[32px] md:text-[48px] text-[#1F1F1F] font-normal w-full text-center md:text-left">
        Find The Right Location
      </h2>
      <p className="text-[16px] text-[#5E6B64] mb-12">
        Explore addiction treatment options anywhere in the world
      </p>

      <div
        className="relative w-full my-10"
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
      >
        
        <motion.div className="flex gap-8 md:gap-10" style={{ x }}>
          {[...locationData, ...locationData].map((item, index) => (
            <motion.div
              key={index}
              className="h-[420px] w-[380px] flex-shrink-0 rounded-[12px] overflow-hidden relative"
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-2xl font-medium">{item.name}</p>
                <p className="text-sm font-normal">{item.quantity}</p>
              </div>
            </motion.div>          
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;