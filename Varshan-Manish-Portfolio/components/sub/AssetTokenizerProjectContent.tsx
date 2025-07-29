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
  "/projects/AssetTokenizer/AssetTokenizer.jpg",
  "/projects/AssetTokenizer/AssetTokenizer1.png",
  "/projects/AssetTokenizer/AssetTokenizer2.png",
  "/projects/AssetTokenizer/AssetTokenizer3.png",
  "/projects/AssetTokenizer/AssetTokenizer4.png",
  "/projects/AssetTokenizer/AssetTokenizer5.png",
  "/projects/AssetTokenizer/AssetTokenizer6.png",
  "/projects/AssetTokenizer/AssetTokenizer7.png",
  "/projects/AssetTokenizer/AssetTokenizer8.png",
];
const AssetTokenizerProjectContent = () => {
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
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 overflow-visible">
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
          Real Estate Asset Tokenizer - Using Blockchain
        </span>
      </h1>
      <ul className="max-w-3xl text-left text-gray-300 text-lg mb-10 list-disc list-inside space-y-4">
        <li>
          Developed a blockchain-based tokenization platform for real estate
          assets, leveraging Ethereum smart contracts.
        </li>
        <li>
          Built a secure decentralized app (DApp) for users to invest in
          fractionalized ownership of real estate properties.
        </li>
        <li>
          Integrated asset management, including creation, modification, and
          deletion of properties on the blockchain.
        </li>
        <li>
          Enabled seamless investment opportunities by minting ERC-1155 tokens
          representing ownership shares of real estate assets.
        </li>
        <li>
          Implemented authentication with MetaMask for wallet-based user login
          and token transactions.
        </li>
        <li>
          Wrote Solidity smart contracts for property tokenization and ownership
          tracking, ensuring compliance with token standards.
        </li>
        <li>
          Utilized MongoDB for backend data storage, tracking token ownership
          and asset availability in real time.
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full max-w-md mb-10">
        <a
          href="https://github.com/Varshan-Manish-912/Real-Estate-Asset-Tokenizer-Using-Ethereum-Blockchain"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1TDbGVC2I1jmyKkiD72swBOkKGAAEJDBF/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 rounded-lg hover:opacity-90 transition font-medium"
        >
          Documentation
        </a>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-300 text-transparent bg-clip-text">
          Gallery
        </span>
      </h2>
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
                transition-all duration-300 hover:bg-purple-500 hover:border-purple-500"
              >
                <img
                  src={src}
                  alt={`Asset Tokenizer Image ${index + 1}`}
                  onClick={() => setFullscreenImage(src)}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
export default AssetTokenizerProjectContent;
