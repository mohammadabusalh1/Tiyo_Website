"use client";

import React from "react";
import { motion } from "framer-motion";

const about = () => {
  const textLines = [
    "Welcome to a world of wild California",
    "desert with Capsules®, where you will",
    "discover exquisite nature observing it",
    "from capsule houses, nestled in the",
    "one of the most breathtaking",
    "destination on the United States.",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Delay between each line animation
        delayChildren: 0.2, // Initial delay before starting
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 30, // Start 30px below
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="p-12 pt-32 h-[100vh] flex flex-col">
      <motion.h3
        className="leading-20 font-medium"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {textLines.map((line, index) => (
          <motion.span
            key={index}
            variants={lineVariants}
            className="block mb-2"
          >
            {line}
          </motion.span>
        ))}
      </motion.h3>
    </div>
  );
};

export default about;
