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
        secondaryLink: "/GoldTokenizerProject",
    },
    {
        date: "March 13, 2026",
        title:
            "A system for personalized skincare product recommendation with ingredient-level safety and explainable decision reasoning",
        desc:
            "Patent Published in the Indian Patent Office. Application Number: 202641025050",
        status: "Patent",
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
        secondaryLink: "/SkinCareProject",
    },
    {
        date: "March 13, 2026",
        title:
            "A blockchain-based system for decentralized governance and lifecycle management of a physical or infrastructure asset",
        desc:
            "Patent Published in the Indian Patent Office. Application Number: 202641025055",
        status: "Patent",
        link: "https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus",
        secondaryLink: "/AssetTokenizerProject",
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
            className="flex flex-col items-center justify-center py-24 px-4 md:px-6 text-white z-[20] overflow-hidden"
        >
            {/* Title */}
            <h1 className="text-[32px] md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 mb-16 md:mb-20 text-center">
                Research
            </h1>

            <div className="relative w-full max-w-5xl">

                {/* Timeline Line */}
                <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-purple-500/20 to-cyan-500/20" />

                {/* Animated Line */}
                <motion.div
                    style={{ height }}
                    className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-[3px] bg-gradient-to-b from-purple-500 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.7)]"
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
                            className="relative mb-16 md:mb-20 flex w-full"
                        >
                            {/* CARD */}
                            <motion.div
                                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                whileHover={{ scale: 1.05 }}
                                className={`
                                    w-full md:w-[45%] max-w-full perspective-[1200px] group
                                    ml-12 md:ml-0
                                    ${isLeft ? "md:mr-auto" : "md:ml-auto"}
                                `}
                            >
                                {/* Prevent overflow */}
                                <div className="w-full overflow-hidden rounded-xl">
                                    <Tilt
                                        glareEnable
                                        glareMaxOpacity={0.3}
                                        glareColor="#ffffff"
                                        glarePosition="all"
                                        tiltMaxAngleX={15}
                                        tiltMaxAngleY={15}
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
                                            className="relative bg-[#111111] hover:bg-purple-900 transition-all duration-300 p-5 md:p-6 rounded-xl shadow-2xl border border-purple-500/20
                                            hover:shadow-[0_0_40px_rgba(168,85,247,0.6)]"
                                        >
                                            {/* Glow */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-xl" />

                                            {/* Content */}
                                            <div className="relative z-10 flex flex-col gap-2">

                                                <p className="text-sm text-cyan-400">
                                                    {item.date}
                                                </p>

                                                <h2 className="text-lg md:text-xl font-bold text-white">
                                                    {item.title}
                                                </h2>

                                                <span
                                                    className={`inline-block mt-1 px-3 py-1 text-xs rounded-full w-fit ${statusColor}`}
                                                >
                                                    {item.status}
                                                </span>

                                                <p className="text-gray-300 mt-2 text-sm">
                                                    {item.desc}
                                                </p>

                                                <div className="flex gap-3 mt-4 flex-wrap">
                                                    <a
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition-all duration-300 shadow-md"
                                                    >
                                                        {item.status === "Conference Paper"
                                                            ? "View Publication"
                                                            : "View Patent"}
                                                    </a>

                                                    <a
                                                        href={item.secondaryLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-200 hover:scale-105 transition-all duration-300 shadow-md"
                                                    >
                                                        View Project
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Tilt>
                                </div>
                            </motion.div>

                            {/* NODE (perfectly aligned now) */}
                            <div className="pointer-events-none absolute left-5 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                                <div className="relative flex items-center justify-center">
                                    <div className="w-4 h-4 md:w-5 md:h-5 bg-purple-500 rounded-full border-4 border-[#0d0d0d] z-10" />
                                    <div className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full bg-purple-500 opacity-50 animate-ping" />
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