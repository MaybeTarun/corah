"use client";

import React from "react";
import Image from "next/image";
import AnimatedText from "@/components/HoverText";

const Navbar: React.FC = () => {
  const menus = ["About Us", "Life Recenter", "Guides", "Shadow Phase", "FAQ"];

  return (
    <nav className="w-full absolute z-50 bg-white/0 backdrop-blur-[10px] p-6 flex items-center justify-between">

      <div className="flex items-center">
        <Image
          src="https://framerusercontent.com/images/tOJSmwfax23ohs0pIDFGM8e9gk.png?width=2976&height=336"
          alt="corah Logo"
          width={150}
          height={50}
          className="object-contain cursor-pointer"
          priority
        />
      </div>

      <ul className="md:flex gap-8 text-[15px] text-white hidden">
        {menus.map((menu) => (
          <li key={menu} className="cursor-pointer">
            <AnimatedText text={menu} className="text-white text-base" />
          </li>
        ))}
      </ul>

      <button className="border border-white text-black cursor-pointer px-3 py-[6px] rounded-md text-base bg-white hover:bg-transparent hover:text-white transition-colors duration-200">
        Enquire Now
      </button>
    </nav>
  );
};

export default Navbar;
