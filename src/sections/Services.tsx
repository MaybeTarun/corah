"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const servicesData = [
  {
    image: "/services/service1.png",
    name: "Personalized Treatment Programs",
    description:
      "Comprehensive inpatient or outpatient care tailored to individual needs, including therapy, detox, and medical support.",
  },
  {
    image: "/services/service1.png",
    name: "Family Counseling & Support",
    description:
      "Guidance sessions and workshops to help families understand addiction.",
  },
  {
    image: "/services/service1.png",
    name: "Aftercare & Relapse Prevention",
    description:
      "Ongoing counseling group therapy & wellness program designed to help individuals.",
  },
];

const Services: React.FC = () => {
  const controls = useAnimation();
  const isAnimating = useRef(false);

  const startLoop = async () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    while (isAnimating.current) {
      await controls.start({
        y: ["0%", "-100%"],
        transition: {
          duration: 25,
          ease: "linear",
          repeat: 0,
        },
      });
      controls.set({ y: "0%" });
    }
  };

  useEffect(() => {
    startLoop();

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        isAnimating.current = false;
        startLoop();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      isAnimating.current = false;
      document.removeEventListener("visibilitychange", handleVisibility);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="services"
      className="w-full min-h-screen flex justify-center items-center px-6"
    >
      <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white overflow-hidden">

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="bg-[#f0f4f3] text-[#5e6b64] rounded-full py-2 px-6 text-xs md:text-sm w-fit mb-6">
            Services
          </div>

          <h2 className="text-[32px] md:text-[48px] text-[#193625] font-normal leading-tight mb-6 w-[85%]">
            Your guide for the road ahead
          </h2>

          <p className="text-[16px] text-[#5E6B64]">
            Our mission is to empower people to break free<br/> from addiction and
            reclaim their lives. With the right<br/> support, recovery isn&apos;t
            just possible—it&apos;s within reach.
          </p>
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center items-center overflow-hidden h-screen">
          <motion.div
            className="flex flex-col"
            animate={controls}
          >
            {[...servicesData, ...servicesData].map((item, index) => (
              <div
                key={index}
                className="h-[500px] w-full flex-shrink-0 overflow-hidden px-14 mb-4"
              >
                <div className="h-[70%] w-full relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-[12px]"
                  />
                </div>

                <div className="h-[30%] w-full py-4 flex flex-col px-1">
                  <p className="text-[#181818] text-3xl mb-2">{item.name}</p>
                  <p className="text-[#5E6B64] text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
