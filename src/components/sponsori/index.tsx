"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Sponsors = () => {
  const logos = [
    {
      name: "EU",
      width: 220, // Increased width for EU specifically
      height: 60,
    },
    {
      name: "EVOLVE",
      width: 180,
      height: 60,
    },
    {
      name: "UN-WOMEN",
      width: 180,
      height: 60,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex gap-16 sm:gap-24 md:gap-32 flex-none pr-16 sm:pr-24 md:pr-32"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`${index < logos.length ? "" : "second-"}${logo.name}`}
                className="flex items-center justify-center w-[180px] h-[60px] relative"
              >
                <Image
                  src={`/sponsors/${logo.name}.png`}
                  style={{
                    objectFit: "contain",
                    transform: logo.name === "EU" ? "scale(1.5)" : "none",
                  }}
                  width={logo.width}
                  height={logo.height}
                  alt={`${logo.name} Logo`}
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
