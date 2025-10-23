"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = "" }) => {
  const letters = text.split("");
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative inline-block cursor-pointer overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial="rest"
      animate={hovered ? "hover" : "rest"}
    >

      <motion.span
        className="inline-block"
        variants={{
          rest: { transition: { staggerChildren: 0.03 } },
          hover: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={`top-${i}`}
            className="inline-block relative"
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -40, opacity: 0, transition: { duration: 0.25, ease: "easeOut" } },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>

      <motion.span
        className="absolute top-0 left-0"
        variants={{
          rest: { transition: { staggerChildren: 0.03 } },
          hover: { transition: { staggerChildren: 0.03 } },
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={`bottom-${i}`}
            className="inline-block relative"
            variants={{
              rest: { y: 40, opacity: 0 },
              hover: { y: 0, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedText;
