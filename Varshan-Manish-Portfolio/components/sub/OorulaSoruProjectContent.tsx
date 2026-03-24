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
    "/projects/OorulaSoru/OorulaSoru.png",
    "/projects/OorulaSoru/OorulaSoru2.png",
    "/projects/OorulaSoru/OorulaSoru3.png",
    "/projects/OorulaSoru/OorulaSoru4.png",
    "/projects/OorulaSoru/OorulaSoru5.png",
    "/projects/OorulaSoru/OorulaSoru6.png",
    "/projects/OorulaSoru/OorulaSoru7.png",
];

const OorulaSoruProjectContent = () => {
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
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Oorula Soru - Food Delivery Platform
        </span>
            </h1>

            {/* CONTENT */}
            <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
                <li>
                    Developed a command-line based food delivery application enabling
                    users to order food from multiple restaurants.
                </li>
                <li>
                    Designed the system to support local restaurants and promote
                    regional cuisines and businesses.
                </li>
                <li>
                    Implemented a structured database using MySQL to manage food items,
                    restaurants, pricing, and categories.
                </li>
                <li>
                    Built a banking simulation system to track user funds, payments,
                    and transaction history in real-time.
                </li>
                <li>
                    Enabled dynamic restaurant selection, menu browsing, and order
                    placement using interactive terminal-based UI.
                </li>
                <li>
                    Integrated modules such as <b>mysql.connector</b>, <b>prettytable</b>,
                    and <b>time</b> for database handling, UI formatting, and execution flow.
                </li>
                <li>
                    Implemented transaction logging and fund updates to simulate
                    real-world payment workflows.
                </li>
                <li>
                    Designed modular architecture with separate components for
                    ordering, banking, restaurant navigation, and miscellaneous features.
                </li>
            </ul>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md mb-10">
                <a
                    href="https://github.com/Varshan-Manish-912/Oorula-Soru-Python-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    GitHub
                </a>

                <a
                    href="https://drive.google.com/file/d/1T2_PAbrHjNVntafIgGQ9gkQm3P2my1nK/view?usp=sharing"
                    target="_blank"
                    className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
                >
                    Documentation
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
                            <div className="bg-black border-2 border-black rounded-xl p-2 w-[85%] h-72 flex items-center justify-center cursor-pointer
                transition-all duration-300 hover:bg-gradient-to-r from-blue-500 to-purple-600"
                            >
                                <img
                                    src={src}
                                    alt={`Oorula Soru Image ${index + 1}`}
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

export default OorulaSoruProjectContent;