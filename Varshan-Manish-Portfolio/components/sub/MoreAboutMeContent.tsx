"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Link from "next/link";
const fallingText = (text: string) => {
  return text.split(" ").map((word, i) => (
    <motion.span
      key={i}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));
};
const MiniCard = ({
  heading,
  details,
}: {
  heading: string;
  details: string;
}) => (
  <div className="bg-[#262626] p-4 rounded-lg shadow-md text-sm text-gray-200 w-full">
    <h4 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
      {heading}
    </h4>
    <p>{details}</p>
  </div>
);
const Card = ({
  title,
  content,
  isEducation,
  isHobbies,
  isAchievements,
  isLanguages,
  isSoftSkills,
}: {
  title: string;
  content: string | null;
  isEducation?: boolean;
  isHobbies?: boolean;
  isAchievements?: boolean;
  isLanguages?: boolean;
  isSoftSkills?: boolean;
}) => (
  <Tilt
    glareEnable
    glareMaxOpacity={0.2}
    glareColor="#fff"
    glarePosition="all"
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    scale={1.05}
    transitionSpeed={400}
    className="bg-[#1a1a1a] p-6 rounded-xl shadow-2xl w-full sm:w-[300px] min-h-[250px] flex flex-col justify-between hover:scale-105 transition-all duration-300"
  >
    <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 mb-4">
      {title}
    </h3>
    {isEducation ||
    isHobbies ||
    isAchievements ||
    isLanguages ||
    isSoftSkills ? (
      <div className="flex flex-col gap-3">
        {isEducation && (
          <>
            <MiniCard
              heading="Degree"
              details="M.Tech Integrated CSE at VIT Vellore | CGPA: 9.04"
            />
            <MiniCard
              heading="Class XII"
              details="BVM Global @BHS | CBSE Board Marks: 92.4%"
            />
            <MiniCard
              heading="Class X"
              details="BVM Global @BHS | CBSE Board Marks: 95%"
            />
          </>
        )}
        {isHobbies && (
          <>
            <MiniCard
              heading="Music"
              details="I Like to play the Piano and Electronic Keyboard"
            />
            <MiniCard
              heading="Simulation Gaming"
              details="I like playing Flight Simulators and Urban Planning Simulators."
            />
            <MiniCard
              heading="Sports"
              details="I like playing cricket and games like chess."
            />
          </>
        )}
        {isAchievements && (
          <>
            <MiniCard
              heading="Multiple MUN Best Delegate Awards"
              details="I got the best delegate award in several Model United Nations."
            />
            <MiniCard
              heading="Trinity Certified Grade 4 Pianist"
              details="I am a grade 4 Pianist certified by Trinity College of London."
            />
            <MiniCard
              heading="Entrepreneurship"
              details="I freelanced and created motion graphics templates for clients"
            />
          </>
        )}
        {isLanguages && (
          <>
            <MiniCard
              heading="English"
              details="Fluent in reading, writing, and speaking."
            />
            <MiniCard
              heading="Tamil"
              details="Native language, fluent in reading, writing, and speaking."
            />
            <MiniCard
              heading="Hindi"
              details="Can Manage reading, writing and speaking"
            />
          </>
        )}
        {isSoftSkills && (
          <>
            <MiniCard
              heading="Communication"
              details="Able to articulate thoughts clearly and interact with different people."
            />
            <MiniCard
              heading="Problem-Solving"
              details="Confident at breaking down problems and finding innovative solutions."
            />
            <MiniCard
              heading="Leadership"
              details="Able to lead teams and utilizing everyone's potential to maximize output."
            />
          </>
        )}
      </div>
    ) : (
      <p className="text-sm text-gray-300">{content}</p>
    )}
  </Tilt>
);
const MoreAboutMeContent = () => {
  return (
    <motion.section
      className="relative z-[20] flex flex-col justify-center items-center min-h-screen px-6 pt-[14rem] pb-20 text-white"
      animate={{ y: [0, -15, 0, 15, 0] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <br />
      <br />
      <br />
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mb-12"
      >
        More About Varshan Manish
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-12 items-center mb-20 max-w-6xl">
        <motion.div
          animate={{ y: [0, -10, 0, 10, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Tilt
            className="w-[280px] h-[420px] relative rounded-xl overflow-hidden shadow-lg"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            scale={1.05}
            glareEnable
          >
            <Image
              src="/varshan.jpeg"
              alt="Varshan Manish"
              fill
              className="object-cover"
            />
          </Tilt>
        </motion.div>
        <motion.div
          className="max-w-xl text-lg text-gray-300 leading-relaxed"
          animate={{ y: [0, 10, 0, -10, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {fallingText(
            "I am a 4th year student studying in VIT University Vellore. I am 20 years old. I live in Chennai, India. I am willing to relocate anywhere in India to work. I am a hard worker, a go getter and once I take up a job I will never quit until its done."
          )}
          <br />
          <br />
          {fallingText(
            "Varshan Manish is my name and hardwork, dedication and willingness to learn more is my game."
          )}
        </motion.div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
        {[
          {
            title: "Education",
            content: null,
            isEducation: true,
          },
          {
            title: "Hobbies",
            content: null,
            isHobbies: true,
          },
          {
            title: "Achievements",
            content: null,
            isAchievements: true,
          },
          {
            title: "Languages Known",
            content: null,
            isLanguages: true,
          },
          {
            title: "Soft Skills",
            content: null,
            isSoftSkills: true,
          },
        ].map((card, index) => (
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
            <Card
              title={card.title}
              content={card.content}
              isEducation={card.isEducation}
              isHobbies={card.isHobbies}
              isAchievements={card.isAchievements}
              isLanguages={card.isLanguages}
              isSoftSkills={card.isSoftSkills}
            />
          </motion.div>
        ))}
      </div>
      <Link
        href="https://drive.google.com/file/d/1wEUVVWvPQQlinQVQxZM7M7t1GLcbYbiN/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r from-purple-500 to-yellow-400 text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition-transform duration-300"
      >
        Download Resume
      </Link>
    </motion.section>
  );
};
export default MoreAboutMeContent;
