"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiperFix.css";
import "../styles/Floater.css";

const images = [
    "/projects/SkinCare/SkinCare.png",
];

const SkincareProjectContent = () => {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    useEffect(() => {
        if (fullscreenImage) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [fullscreenImage]);

    return (
        <motion.section
            className="relative z-[10] flex flex-col justify-center items-center px-6 pt-[10rem] pb-20 text-white text-center animate-floating"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <br />
            <br />
            <br />

            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          AI-Based Personalized Skincare Recommendation System
        </span>
            </h1>

            {/* CONTENT */}
            <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
                <li>
                    Designed an AI-driven recommendation system for skincare products
                    based on ingredient-level safety, skin compatibility, and explainable reasoning.
                </li>

                <li>
                    Developed a unified product representation using semantic embeddings
                    combining product metadata, ingredient composition, and textual descriptors.
                </li>

                <li>
                    Implemented a probabilistic prediction engine to determine product suitability
                    across multiple skin types using adaptive threshold-based classification.
                </li>

                <li>
                    Built a similarity-based refinement module using vector-space proximity
                    to improve prediction robustness through neighborhood consensus validation.
                </li>

                <li>
                    Developed a graph-based reasoning system modeling relationships between
                    cosmetic ingredients and skin types to generate evidence-backed recommendations.
                </li>

                <li>
                    Integrated ingredient-level safety analysis to enforce exclusion constraints
                    and prevent harmful product recommendations.
                </li>

                <li>
                    Designed an explainable AI layer that provides human-readable reasoning
                    for each recommendation based on probabilities, similarity signals,
                    and ingredient evidence.
                </li>

                <li>
                    Addressed over-recommendation issues using constrained multi-label decision
                    logic to ensure controlled and reliable outputs.
                </li>

                <li>
                    Conducted novelty and patentability analysis comparing the system with
                    existing industry solutions and prior art in skincare recommendation systems.
                </li>
                <li>This project has been patented and has been published by the Indian Patent Office.
                    Application Number: 202641025050
                </li>
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md mb-10">
                <a
                    href="https://github.com/Varshan-Manish-912/Skin-Care-Prediction-Using-SBERT-and-Logistic-Regression"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    GitHub
                </a>

                <a
                    href="https://drive.google.com/file/d/1RE2Vk61AqC9GpAiuB7gQQHpSffPI0yXq/view?usp=sharing"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    Documentation
                </a>
                <a
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    Patent
                </a>
            </div>

            {/* GALLERY TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-300 text-transparent bg-clip-text">
          Gallery
        </span>
            </h2>

            {/* SWIPER */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1025: { slidesPerView: 3 },
                }}
                className="w-full max-w-[1400px] relative px-4 sm:px-6 md:px-8"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center">
                            <div className="bg-black border-2 border-black rounded-xl p-2 w-[85%] h-72 flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-pink-500 hover:border-pink-500"
                            >
                                <img
                                    src={src}
                                    alt={`Skincare Project ${index + 1}`}
                                    onClick={() => setFullscreenImage(src)}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* FULLSCREEN */}
            {fullscreenImage && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-center items-center p-4 overflow-auto">
                    <div className="relative flex justify-center items-center max-w-[90vw] max-h-[90vh]">
                        <img
                            src={fullscreenImage}
                            alt="Fullscreen preview"
                            className="w-auto h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
                        />
                        <button
                            onClick={() => setFullscreenImage(null)}
                            className="absolute -top-12 -right-6 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:scale-105 transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </motion.section>
    );
};

export default SkincareProjectContent;