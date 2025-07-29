"use client";
import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Link from "next/link";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-10 relative"
    >
      <motion.h1
        variants={slideInFromLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="text-[40px] font-bold text-center text-gray-200 mb-10 z-[25]"
      >
        {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
          About Me
        </span>
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10 z-[25] relative">
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-[25]"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            transitionSpeed={400}
            className="w-[358px] h-[550px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-gray-900"
          >
            <Image
              src="/varshan.jpeg"
              alt="Varshan Manish"
              fill
              className="object-cover w-full h-full rounded-2xl"
            />
          </Tilt>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 text-gray-300 max-w-xl text-center md:text-left relative z-[25]"
        >
          <h2 className="text-3xl font-bold text-white">Varshan Manish</h2>
          <p className="text-lg italic text-gray-400">
            M.Tech (Integrated) in Computer Science Engineering, VIT Vellore
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I have been working tirelessely to learn more skills. I am very much
            interested in the field of artificial intelligence machine and deep
            learning. I am striving hard to learn more technologies related to
            AI and ML. I am also working hard to learn any new technologies and
            frameworks that spring up in the domain of full stack development
            and blockchain as they are under a rapid evolution phase. My goal is
            to add more and more icons in the skill section above until my last
            breath.
          </p>
          <Link
            href="https://drive.google.com/file/d/1wEUVVWvPQQlinQVQxZM7M7t1GLcbYbiN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 z-[30]"
          >
            Download Resume
          </Link>
          <Link
            href="/MoreAboutMe"
            className="inline-block mt-6 bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300 z-[30]"
          >
            Learn more about me
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutMe;
