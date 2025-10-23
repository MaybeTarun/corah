"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";

const centersData = [
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Holina Rehab Center",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Horizon Wellness Cente",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Bespoke Rehab Center",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Samara Wellness Center",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Kaya Wellness",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Tambram Wellness",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
  {
    image: "/centers/center1.png",
    location: "Koh Phangan, Thailand",
    name: "Karsan Wellness",
    price: "50k-80k INR/28 Days",
    rating: 4.2,
  },
];

const CARD_WIDTH = 380;
const CARD_GAP = 32;

const Centers: React.FC = () => {
  const x = useMotionValue(0);
  const animationRef = useRef<number>(0);

  const speed = 1;

  const startScroll = () => {
    cancelAnimationFrame(animationRef.current);

    const step = () => {
      const totalWidth = centersData.length * (CARD_WIDTH + CARD_GAP);
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
      id="centers"
      className="w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <h2 className="text-[32px] md:text-[48px] text-[#1F1F1F] font-normal mb-12 w-full text-center md:text-left">
        Centers Near You
      </h2>

      <div
        className="relative w-full my-10"
        onMouseEnter={stopScroll}
        onMouseLeave={startScroll}
      >
        <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <motion.div className="flex gap-8 lg:gap-14" style={{ x }}>
          {[...centersData, ...centersData].map((item, index) => (
            <motion.div
              key={index}
              className="h-[420px] w-[380px] flex-shrink-0 rounded-[12px] overflow-hidden border-2 border-black/30 hover:border-black/50 transition-colors duration-300"
              // whileHover={{ boxShadow: "0 8px 8px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="h-[70%] w-full relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[30%] w-full p-4 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <p className="text-[#5E6B64] text-sm">{item.location}</p>
                <p className="text-[#181818] text-sm font-semibold">⭐ {item.rating}/5</p>
              </div>
              <div>
                <p className="text-[#181818] text-2xl font-medium">{item.name}</p>
              </div>
              <div>
                <p className="text-[#5E6B64] text-sm font-semibold">{item.price}</p>
              </div>
            </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Centers;