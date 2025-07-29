"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Experience = () => {
    return (
        <section
            id="experience"
            className="flex flex-col items-center justify-center w-full px-6 text-white z-[20]"
        >
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-10"
            >
                Experience
            </motion.h1>

            {/* Card Parallax */}
            <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.03}
                transitionSpeed={400}
                className="w-full max-w-4xl"
            >
                <motion.div
                    whileHover={{ rotate: [0, 1.5, -1.5, 0] }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="bg-[#111111] hover:bg-purple-900 transition-colors duration-300 p-6 rounded-xl shadow-2xl flex flex-col md:flex-row gap-8 items-center group"
                >
                    {/* Logo Shake on Hover */}
                    <motion.div
                        whileHover={{ rotate: [0, 2, -2, 2, -2, 0] }}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0 w-[140px] h-[140px] relative rounded-xl overflow-hidden"
                    >
                        <div className="relative w-full h-full bg-white rounded-xl p-3 flex items-center justify-center">
                            <Image
                                src="/zoho-logo.png"
                                alt="ZOHO Logo"
                                fill
                                className="object-contain rounded-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold text-white">
                            Software Development Intern
                        </h2>
                        <p className="text-md font-semibold text-purple-400">
                            ZOHO Corporation
                        </p>
                        <p className="text-sm italic text-gray-400">
                            May 2025 – July 2025 | Onsite at Estancia IT Park, Chennai
                        </p>

                        <Link
                            href="/Experiences/ZOHO"
                            className="inline-block mt-4 bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-transform duration-300"
                        >
                            Learn more
                        </Link>
                    </div>
                </motion.div>
            </Tilt>
        </section>
    );
};

export default Experience;
