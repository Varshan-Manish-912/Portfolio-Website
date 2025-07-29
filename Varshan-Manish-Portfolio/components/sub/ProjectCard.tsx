"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}
const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div
      className="bg-[#1a1a1a] hover:bg-purple-900 transition-colors duration-300
      rounded-xl shadow-2xl overflow-hidden w-full sm:w-[340px]
      flex flex-col justify-between"
    >
      <div className="relative w-full pb-[56.25%]">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col gap-4 h-full">
        <div>
          <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            {title}
          </h1>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
        </div>

        <div className="mt-auto flex justify-center">
          <Link
            href={link}
            rel="noopener noreferrer"
            className="inline-block text-white bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors w-full text-center"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
