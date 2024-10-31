"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Sponsors = () => {
  // Standardized sizes for all logos
  const logos = [
    { name: "EU", width: 180, height: 60 },
    { name: "UN-WOMEN", width: 180, height: 60 }, // Changed name to match actual logo
    { name: "EVOLVE", width: 180, height: 60 },
  ];

  return (
    <div className="py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <motion.div
            className="flex gap-32 flex-none pr-32"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo) => (
              <React.Fragment key={logo.name}>
                <div className="flex items-center justify-center w-[180px] h-[60px]">
                  <Image
                    src={`/sponsors/${logo.name}.png`}
                    className="object-contain w-full h-full"
                    width={180}
                    height={60}
                    alt={`${logo.name} Logo`}
                    priority
                  />
                </div>
              </React.Fragment>
            ))}
            {/* Second set of logos for seamless animation */}
            {logos.map((logo) => (
              <React.Fragment key={`second-${logo.name}`}>
                <div className="flex items-center justify-center w-[180px] h-[60px]">
                  <Image
                    src={`/sponsors/${logo.name}.png`}
                    className="object-contain w-full h-full"
                    width={180}
                    height={60}
                    alt={`${logo.name} Logo`}
                    priority
                  />
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
