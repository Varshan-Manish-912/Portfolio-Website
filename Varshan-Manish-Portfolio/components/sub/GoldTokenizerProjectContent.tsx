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
    "/projects/GoldTokenizer/GoldTokenizer1.png",
    "/projects/GoldTokenizer/GoldTokenizer2.png",
    "/projects/GoldTokenizer/GoldTokenizer3.png",
    "/projects/GoldTokenizer/GoldTokenizer4.png",
];

const GoldTokenizerProjectContent = () => {
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-500 text-transparent bg-clip-text">
          Gold Tokenizing Platform
        </span>
            </h1>

            {/* DESCRIPTION */}
            <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
                <li>
                    Developed a blockchain-based platform to tokenize gold assets,
                    including digital gold, bullion, and coins.
                </li>
                <li>
                    Implemented the ERC-1155 token standard to efficiently manage
                    multiple asset types with shared smart contract logic.
                </li>
                <li>
                    Designed a metadata-driven system capturing attributes such as
                    purity, vendor, weight, and asset type for each token.
                </li>
                <li>
                    Enabled dynamic token minting per purchase, allowing unique asset
                    representation rather than fixed supply tokens.
                </li>
                <li>
                    Built smart contracts using Solidity to handle minting, ownership
                    tracking, and secure transfer of tokenized gold assets.
                </li>
                <li>
                    Compared ERC-1155 with ERC-721 to analyze gas efficiency and
                    demonstrate suitability for multi-asset tokenization.
                </li>
                <li>
                    Integrated a user-facing interface for purchasing and managing
                    different forms of gold assets.
                </li>
                <li>
                    A conference paper based on this project has been published in IEEE Xplore.
                </li>
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md mb-10">
                <a
                    href="https://github.com/Varshan-Manish-912/Gold-Tokenizing-Platform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    GitHub
                </a>

                <a
                    href="https://drive.google.com/file/d/1ktTQ7Op3nGBPsK3shyMKzshYShpcO4TC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    Documentation
                </a>

                <a
                    href="https://ieeexplore.ieee.org/document/11376418"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    Publication
                </a>
            </div>

            {/* GALLERY TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
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
                            <div
                                className="bg-black border-2 border-black rounded-xl p-2 w-[85%] h-72 flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-600"
                            >
                                <img
                                    src={src}
                                    alt={`Gold Tokenizer Image ${index + 1}`}
                                    onClick={() => setFullscreenImage(src)}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* FULLSCREEN VIEW */}
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
                            aria-label="Close fullscreen"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </motion.section>
    );
};

export default GoldTokenizerProjectContent;