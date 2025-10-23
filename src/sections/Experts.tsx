"use client";

import React from "react";
import Image from "next/image";

const experts = [
  {
    image: "/experts/expert1.png",
    name: "Dr. Alex Kostadinov",
    role: "Psycology Specialization | 15 years +",
    location: "Singapore",
  },
  {
    image: "/experts/expert1.png",
    name: "Dr. Ahmed Ansari",
    role: "Psycology Specialization | 5 years +",
    location: "Singapore",
  },
  {
    image: "/experts/expert1.png",
    name: "Dr. Bruce Wills",
    role: "Trauma Specialist | 20 years +",
    location: "Austria",
  },
  {
    image: "/experts/expert1.png",
    name: "Dr. Garcia J",
    role: "Psycology Specialization | 15 years +",
    location: "NYC",
  },
];

const Experts: React.FC = () => {
  return (
    <section
      id="experts"
      className="w-full min-h-screen max-w-7xl mx-auto flex flex-col justify-center items-center px-6 py-16"
    >
      <h2 className="text-[32px] md:text-[48px] text-[#1F1F1F] font-normal w-full text-left">
        Let&apos;s Talk!
      </h2>
      <p className="text-[16px] text-[#5E6B64] mb-12 text-left w-full">
        Our group of expert therapists and counsellors are here to support you.
      </p>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-18">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="w-full"
          >
            <div className="relative w-full h-[350px] rounded-[12px] overflow-hidden">
              <Image
                src={expert.image}
                alt={expert.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4">
              <p className="text-[#09090B] text-[32px] font-semibold mb-3 leading-[1.1em]">{expert.name}</p>
              <p className="text-[#52525B] text-lg font-medium mb-2 leading-[1.4em]">{expert.role}</p>
              <p className="text-[#52525B] text-base">{expert.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
