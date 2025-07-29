"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/swiperFix.css";
import { Autoplay, Navigation } from "swiper/modules";
import ProjectCard from "../sub/ProjectCard";
import type { Swiper as SwiperType } from "swiper";

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const projects = [
    {
      src: "/projects/ExpenseElixir/expenseElixir.png",
      title: "Expense Elixir",
      desc: "A modern expense tracking application with rich visualizations and intuitive UI for budgeting.",
      link: "/ExpenseElixirProject/",
    },
    {
      src: "/projects/AssetTokenizer/AssetTokenizer.jpg",
      title: "Asset Tokenizer",
      desc: "Tokenize real estate assets using Ethereum blockchain for enhanced investment opportunities.",
      link: "/AssetTokenizerProject/",
    },
    {
      src: "/projects/Covid19Manager/Covid19Manager.JPG",
      title: "Covid-19 Manager",
      desc: "A manager and tracker application for Covid-19 Cases Using Its Own RESTFul APIs and hosted with GAE.",
      link: "/Covid19ManagerProject/",
    },
    {
      src: "/projects/DeepFakeDetector/DeepFakeDetector.png",
      title: "Deepfake Detector",
      desc: "A Deepfake video detector that uses ResNeXt-50 Convolution Neural Network and LSTM to predict the result.",
      link: "/DeepFakeDetectorProject/",
    },
    {
      src: "/projects/TamilOCR/TamilOCR.png",
      title: "Tamil Handwritten OCR",
      desc: "An OCR for Tamil handwritten characters using CNN and 2005 HP Tamil Character Dataset.",
      link: "/TamilOCRProject/",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center py-16 px-4 md:px-8 z-[20]"
      id="projects"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8">
        My Projects
      </h1>

      <Swiper
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="w-full max-w-[1400px] relative px-4 sm:px-6 md:px-8"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              >
                <ProjectCard
                  src={project.src}
                  title={project.title}
                  description={project.desc}
                  link={project.link}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Projects;
