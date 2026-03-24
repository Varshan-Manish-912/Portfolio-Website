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
            {/* Title */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-10"
            >
                Experience
            </motion.h1>

            {/* 🔥 PARALLAX CARD */}
            <motion.div
                whileHover={{ scale: 1.04 }}
                className="w-full max-w-4xl perspective-[1200px] group"
            >
                <Tilt
                    glareEnable
                    glareMaxOpacity={0.3}
                    glareColor="#ffffff"
                    glarePosition="all"
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    scale={1.02}
                    transitionSpeed={500}
                    className="w-full"
                >
                    <motion.div
                        whileHover={{ rotate: [0, 1.5, -1.5, 0] }}
                        transition={{ type: "spring", stiffness: 200, damping: 12 }}
                        className="relative bg-[#111111] hover:bg-purple-900 transition-all duration-300 p-6 rounded-xl shadow-2xl border border-purple-500/20
                        hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] overflow-hidden"
                    >
                        {/* 🔥 OP GRADIENT GLOW */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
                        bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-cyan-500/20 blur-xl" />

                        {/* Subtle base tint */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 opacity-40" />

                        {/* CONTENT */}
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center w-full">

                            {/* Logo */}
                            <motion.div
                                whileHover={{ rotate: [0, 2, -2, 2, -2, 0], scale: 1.05 }}
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

                            {/* Text Content */}
                            <div className="flex flex-col gap-2">
                                <motion.h2
                                    whileHover={{ y: -3 }}
                                    className="text-2xl font-bold text-white"
                                >
                                    Software Development Intern
                                </motion.h2>

                                <motion.p
                                    whileHover={{ y: -2 }}
                                    className="text-md font-semibold text-purple-400"
                                >
                                    ZOHO Corporation
                                </motion.p>

                                <p className="text-sm italic text-gray-400">
                                    May 2025 – July 2025 | Onsite at Estancia IT Park, Chennai
                                </p>

                                <motion.div whileHover={{ y: -2 }}>
                                    <Link
                                        href="/Experiences/ZOHO"
                                        className="inline-block mt-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold px-5 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                                    >
                                        Learn more
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </Tilt>
            </motion.div>
        </section>
    );
};

export default Experience;