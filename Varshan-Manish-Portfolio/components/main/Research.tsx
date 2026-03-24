"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

interface ResearchItem {
    date: string;
    title: string;
    desc: string;
    status: string;
    link: string;
    secondaryLink: string;
}

const researchData: ResearchItem[] = [
    {
        date: "February 17, 2026",
        title:
            "Blockchain based System and Method for Multi-Form Gold Tokenization using ERC-1155 Token Standard",
        desc: "Conference Paper Published in IEEE Xplore",
        status: "Conference Paper",
        link: "https://ieeexplore.ieee.org/document/11376418",
        secondaryLink: "/GoldTokenizerProject"
    },
    {
        date: "March 13, 2026",
        title: "A system for personalized skincare product recommendation with ingredient-level safety and explainable decision reasoning",
        desc:
            "Patent Published in the Indian Patent Office. Application Number: 202641025050",
        status: "Patent",
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
        secondaryLink: "/SkinCareProject"
    },
    {
        date: "March 13, 2026",
        title: "A blockchain-based system for decentralized governance and lifecycle management of a physical or infrastructure asset",
        desc:
            "Patent Published in the Indian Patent Office. Application Number: 202641025055",
        status: "Patent",
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
        secondaryLink: "/AssetTokenizerProject"
    },
];

const ResearchTimeline = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={ref}
            id="research"
            className="flex flex-col items-center justify-center py-24 px-6 text-white z-[20]"
        >
            {/* Title */}
            <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-20">
                Research
            </h1>

            <div className="relative w-full max-w-5xl">
                {/* Background Line */}
                <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-purple-500/20 to-cyan-500/20" />

                {/* Animated Progress Line */}
                <motion.div
                    style={{ height }}
                    className="absolute left-1/2 -translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                />

                {researchData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    const statusColor =
                        item.status === "Conference Paper"
                            ? "bg-purple-600"
                            : "bg-cyan-600";

                    return (
                        <div
                            key={index}
                            className={`relative mb-20 flex w-full ${
                                isLeft ? "justify-start" : "justify-end"
                            }`}
                        >
                            {/* 🔥 INTERACTIVE CARD */}
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                className="w-[45%] perspective-[1200px] group"
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
                                        whileHover={{
                                            rotate: [0, 1.5, -1.5, 0],
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 12,
                                        }}
                                        className="relative bg-[#111111] hover:bg-purple-900 transition-all duration-300 p-6 rounded-xl shadow-2xl border border-purple-500/20
                                        hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] overflow-hidden"
                                    >
                                        {/* Glow Layer */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl" />

                                        {/* CONTENT */}
                                        <div className="relative z-10 flex flex-col gap-2">

                                            {/* Date */}
                                            <motion.p
                                                whileHover={{ y: -2 }}
                                                className="text-sm text-cyan-400"
                                            >
                                                {item.date}
                                            </motion.p>

                                            {/* Title */}
                                            <motion.h2
                                                whileHover={{ y: -4 }}
                                                className="text-xl font-bold text-white"
                                            >
                                                {item.title}
                                            </motion.h2>

                                            {/* Status */}
                                            <motion.span
                                                whileHover={{ scale: 1.05 }}
                                                className={`inline-block mt-1 px-3 py-1 text-xs rounded-full w-fit ${statusColor}`}
                                            >
                                                {item.status}
                                            </motion.span>

                                            {/* Description */}
                                            <motion.p
                                                whileHover={{ y: -2 }}
                                                className="text-gray-300 mt-2 text-sm"
                                            >
                                                {item.desc}
                                            </motion.p>

                                            {/* ACTION BUTTONS */}
                                            <motion.div
                                                whileHover={{ y: -3 }}
                                                className="flex gap-3 mt-4 flex-wrap"
                                            >
                                                {/* Primary */}
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                                                >
                                                    {item.status ===
                                                    "Conference Paper"
                                                        ? "View Publication"
                                                        : "View Patent"}
                                                </a>
                                                <a
                                                    href={item.secondaryLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]"
                                                >
                                                    View Project
                                                </a>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </Tilt>
                            </motion.div>

                            {/* Timeline Node */}
                            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <div className="relative">
                                    <div className="w-5 h-5 bg-purple-500 rounded-full border-4 border-[#0d0d0d] z-10" />
                                    <div className="absolute inset-0 rounded-full bg-purple-500 opacity-50 animate-ping" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ResearchTimeline;