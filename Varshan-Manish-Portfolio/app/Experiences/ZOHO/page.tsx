"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import "../../../components/styles/Floater.css"

const Page = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(true);

    useEffect(() => {
        const updateLayout = () => {
            const width = window.innerWidth;
            let offset = -250;
            let shouldShow = true;

            if (width < 768) {
                offset = -260;
                shouldShow = true;
            } else if (width >= 768 && width <= 1100) {
                offset = 0;
                shouldShow = false;
            } else {
                offset = -250;
                shouldShow = true;
            }

            if (videoRef.current) {
                videoRef.current.style.top = `${offset}px`;
            }

            setShowVideo(shouldShow);
        };

        updateLayout();
        window.addEventListener("resize", updateLayout);
        window.addEventListener("orientationchange", updateLayout);

        return () => {
            window.removeEventListener("resize", updateLayout);
            window.removeEventListener("orientationchange", updateLayout);
        };
    }, []);

    const documentLinks = [
        {
            name: "Formal Testimonials",
            url: "https://drive.google.com/drive/folders/1ezz_EgBb1_Cwm0Z53VY1j2CNJPzD3FGw?usp=sharing",
        },
        {
            name: "Internship Offer Letter",
            url: "https://drive.google.com/drive/folders/1iXgdoPtDZc_feSbV_ucxkats01WSDMhz?usp=sharing",
        },
        {
            name: "Internship Completion Certificate",
            url: "https://drive.google.com/drive/folders/1h1IGzfpMvenSx_A_UZhchTfY-e79mu-M?usp=sharing",
        },
        {
            name: "Internship Work Log",
            url: "https://drive.google.com/drive/folders/19e3FhPVrgH2ybBsW0b7AjxxZ77KHz4Y4?usp=sharing",
        },
    ];

    return (
        <div className="relative flex flex-col min-h-[600px] md:min-h-screen w-full overflow-hidden">
            {showVideo && (
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="rotate-180 absolute h-[80vh] w-full left-0 object-cover -z-10"
                    style={{ top: "-320px" }}
                >
                    <source src="/blackhole.mp4" type="video/mp4" />
                    <source src="/blackhole.webm" type="video/webm" />
                </video>
            )}

            <motion.section
                className="relative z-[20] flex flex-col justify-center items-center px-6 pt-[14rem] pb-24 text-white text-center animate-floating overflow-visible"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className="text-5xl md:text-6xl pb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-12 overflow-visible"
                >
                    My Experience at ZOHO
                </motion.h1>

                <ul className="max-w-3xl text-left text-gray-300 text-lg mb-16 list-disc list-inside space-y-4 overflow-visible">
                    <li>
                        Worked as a Software Development Intern from <strong>May 20, 2025</strong> to{" "}
                        <strong>July 4, 2025</strong> at ZOHO’s PDF Editor Product Team, based in Estancia IT Park, Chennai.
                    </li>
                    <li>
                        Contributed to the development of <strong>18+ client-side and server-side functions</strong> using technologies like{" "}
                        <span className="text-white font-semibold">Apache PDFBox</span>,{" "}
                        <span className="text-white font-semibold">Spring</span>, and{" "}
                        <span className="text-white font-semibold">PDF-Lib.js</span>.
                    </li>
                    <li>
                        Explored advanced PDF internals like:
                        <ul className="list-disc list-inside pl-5 space-y-2">
                            <li>Struct Tree Root (Accessibility)</li>
                            <li>Font Subsetting</li>
                            <li>Annotation Parsing</li>
                            <li>FillSignInfos</li>
                        </ul>
                    </li>
                    <li>
                        Wrote reusable features for page actions (add, rotate, delete), text tools, and editing; implemented fully in product.
                    </li>
                    <li>
                        Performed load testing and profiling with <strong>Java Flight Recorder</strong> and{" "}
                        <strong>JDK Mission Control</strong> to optimize performance.
                    </li>
                    <li>
                        Worked with the team’s system architect and received formal testimonial and praise from the system architect, the team manager and mentor.
                    </li>
                </ul>

                <div className="flex flex-wrap justify-center items-center gap-8">
                    {documentLinks.map((doc, index) => (
                        <motion.div
                            key={index}
                            animate={{ y: [0, -12, 0, 12, 0] }}
                            transition={{
                                duration: 6 + index * 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2,
                            }}
                        >
                            <Tilt
                                glareEnable
                                glareMaxOpacity={0.2}
                                glareColor="#fff"
                                glarePosition="all"
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                scale={1.05}
                                transitionSpeed={400}
                                className="bg-[#1a1a1a] p-5 rounded-xl shadow-2xl w-[250px] min-h-[100px] flex flex-col justify-center items-center text-center hover:scale-105 transition-transform duration-300"
                            >
                                <Link
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500"
                                >
                                    {doc.name}
                                </Link>
                            </Tilt>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </div>
    );
};
export default Page;
