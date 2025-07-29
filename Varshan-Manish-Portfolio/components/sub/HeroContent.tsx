"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "react-lottie";
import Link from "next/link";
const lottieAnimations = [
  {
    animationData: require("/public/Animation-1747129850124.json"),
    label: "Full Stack Web Development",
  },
  {
    animationData: require("/public/Animation-1747032139633.json"),
    label: "Mobile App Development",
  },
  {
    animationData: require("/public/Animation-1747032068394.json"),
    label: "Blockchain Development",
  },
  {
    animationData: require("/public/Animation-1747031522285.json"),
    label: "Software Engineering",
  },
];
const HeroContent = () => {
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentAnimation(
          (prevIndex) => (prevIndex + 1) % lottieAnimations.length
        );
        setFadeIn(true);
      }, 500);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 mt-32 md:mt-40 pt-20 md:pt-0 w-full z-[5] gap-10 "
    >
      <div className="h-full w-full flex flex-col justify-center text-start">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col text-4xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span className="block">Welcome. I am</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-200">
            Varshan Manish
          </span>

          <span className="block mt-6 md:mt-8 text-2xl md:text-3xl">
            and I have been exploring domains like<br></br>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
              <Typewriter
                words={[
                  "Full Stack Web Development",
                  "Mobile Application Development",
                  "Blockchain Development",
                  "Software Engineering",
                ]}
                loop={true}
                cursor={false}
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </span>
            <span className="ml-1 cursor-blink text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">|</span>
          </span>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex md:block justify-center md:justify-start mt-6"
        >
          <Link
            href="/MoreAboutMe"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] w-full md:w-auto text-lg"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex justify-end items-center w-[50%] h-full"
      >
        <div
          key={currentAnimation}
          className="flex flex-col items-center justify-center h-full"
        >
          <motion.div
            className="w-full h-full flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: fadeIn ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lottie
              options={{
                animationData: lottieAnimations[currentAnimation].animationData,
                loop: true,
                autoplay: true,

              }}
              height={500}
              width={500}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 text-center"
          >
            {lottieAnimations[currentAnimation].label}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default HeroContent;
