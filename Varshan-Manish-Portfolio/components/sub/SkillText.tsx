"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Gradient Skills Heading */}
      <motion.div
        variants={slideInFromTop(0.5)}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-4"
      >
        Technical Skills
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="italic text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Striving hard to add more icons here
      </motion.div>
    </div>
  );
};
export default SkillText;
