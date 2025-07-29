"use client";
import {
  Blockchain_Skill,
  Web_Development,
  Database,
  Cloud_Computing,
  Programming_languages,
  Developer_Tools,
  Mobile_Development,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-6 h-full overflow-hidden pb-0 py-0"
    >
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
      <div className="relative z-[25] scale-90 w-full select-text">
        <SkillText />
        <div className="flex flex-col w-full space-y-6">
          {[
            { title: "Programming Languages", data: Programming_languages },
            { title: "Web Development", data: Web_Development },
            { title: "Blockchain Development", data: Blockchain_Skill },
            { title: "Database Management", data: Database },
            { title: "Cloud Computing Technologies", data: Cloud_Computing },
            { title: "Developer Tools", data: Developer_Tools },
            {
              title: "Mobile Application Development",
              data: Mobile_Development,
            },
          ].map((category, catIdx) => (
            <div key={catIdx}>
              <h3 className="text-xl font-bold text-center text-white mb-2">
                {category.title}
              </h3>
              <div className="flex flex-row justify-around flex-wrap gap-4 items-center">
                {category.data.map((image, index) => (
                  <SkillDataProvider
                    key={index}
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                    label={image.label}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
