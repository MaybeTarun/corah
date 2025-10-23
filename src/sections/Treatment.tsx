"use client";

import React from "react";
import Image from "next/image";
import { ArrowFatRight, ArrowUpRight } from "revoicons";

const cardData = [
  {
    icon: "/treatment/brain.png",
    heading: "What are you struggling with?",
    sub: "Providers specializing in the conditions and substances for which you are seeking help",
  },
  {
    icon: "/treatment/brain.png",
    heading: "What Kind of Care Do You Need?",
    sub: "Residential, outpatient, and other levels of care to meet your unique needs.",
  },
  {
    icon: "/treatment/brain.png",
    heading: "What Insurance Do You Have?",
    sub: "Depending on your plan, insurance may cover up to 100% the cost of treatment.",
  },
];

const Treatment: React.FC = () => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 bg-white">
      <h2 className="text-[32px] md:text-[48px] text-[#1F1F1F] font-normal mb-4 w-full text-center">
        Find the perfect treatment for you
      </h2>
      <p className="text-center text-black/40 text-base md:text-lg mb-32 w-full">
        Answer a few questions and we will help you
      </p>
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-6 max-w-7xl">
        {cardData.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="w-full p-10 flex flex-col items-center gap-4 min-h-[240px]">
              <Image
                src={item.icon}
                alt={item.heading}
                width={40}
                height={40}
                className="object-contain mb-5"
              />
              <p className="text-[24px] md:text-[32px] font-semibold text-center text-black">
                {item.heading}
              </p>
              <p className="text-[#666666] text-base text-center md:w-[85%]">{item.sub}</p>
            </div>
            {idx < cardData.length - 1 && (
              <div className="hidden md:flex items-center mx-2">
                <ArrowFatRight size={32} color="#5591FA" />
              </div>
            )}
            {idx < cardData.length - 1 && (
              <div className="flex md:hidden items-center rotate-90">
                <ArrowFatRight size={24} color="#5591FA" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <button className="mt-14 px-3 py-2 bg-[#5591FA] text-white text-base rounded-[8px] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex items-center gap-2">
        <ArrowUpRight size={16} />
        Answer Now
      </button>
    </section>
  );
};

export default Treatment;
