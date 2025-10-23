"use client";

import React from "react";
import Image from "next/image";

const balanceData = [
  {
    image: "/balance/brain.png",
    title: "Substance-Based Attachments",
    subtitle:
      "Substance-based attachments are emotional dependencies formed around the use of a particular substance.",
  },
  {
    image: "/balance/brain.png",
    title: "Behavioural Attachments",
    subtitle:
      "Behavioural attachments are emotional bonds formed through repeated habits.",
  },
  {
    image: "/balance/brain.png",
    title: "Emerging & Contextual Wellness Imbalances",
    subtitle:
      "Emerging and contextual wellness imbalances refer to new or situation-specific disruptions in overall well-being.",
  },
];

const Balance: React.FC = () => {
  return (
    <section
      id="balance"
      className="w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center px-6 py-16"
    >
      <h2 className="text-[32px] md:text-[48px] text-[#1F1F1F] font-normal mb-12 w-full text-center md:text-left">
        Find Your Pathway to Balance
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {balanceData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[350px] bg-[#F4F4F5] rounded-[24px] px-6 py-10 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-start justify-between">
              <p className="text-black text-[32px] font-semibold leading-[1.2em] w-[85%]">
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

            <p className="text-[#666666] text-base leading-[1.6em] w-[85%] line-clamp-3">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Balance;
