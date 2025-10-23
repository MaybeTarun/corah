"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollRevealText";

const Quote: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
      <div className="bg-[#f0f4f3] text-[#5e6b64] rounded-full py-2 px-6 text-xs md:text-sm">The Heart of Corah</div>
      <div className="text-center text-black/40 text-[32px] md:text-[48px] leading-[1.2em] font-light">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={0}
          blurStrength={10}
        >
          We know life can feel heavy sometimes, but remember, you are never alone. You are as important as the world around you, and this moment, too, will pass. We are here, walking beside you.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Quote;
