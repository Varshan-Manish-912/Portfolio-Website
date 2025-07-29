"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [logoBounce, setLogoBounce] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Reset nav item bounce after animation
  useEffect(() => {
    if (activeIndex !== null) {
      const timeout = setTimeout(() => setActiveIndex(null), 500);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  // Reset logo bounce after animation
  useEffect(() => {
    if (logoBounce) {
      const timeout = setTimeout(() => setLogoBounce(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [logoBounce]);

  const navLinkBase =
      "cursor-pointer transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-200";

  const navLink = (text: string, href: string, index: number) => (
      <a
          href={href}
          className={`${navLinkBase} ${activeIndex === index ? "animate-bounce-once" : ""}`}
          onMouseEnter={() => setActiveIndex(index)}
      >
        {text}
      </a>
  );

  return (
      <div
          id="navbar"
          className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 md:px-10 z-[30]"
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          {/* Logo */}
          <Link
              href="/"
              className={`h-auto w-auto hidden md:flex items-center ${
                  logoBounce ? "animate-bounce-once" : ""
              }`}
              onMouseEnter={() => setLogoBounce(true)}
          >
            <Image
                src="/logo1.png"
                alt="Varshan Logo"
                width={220}
                height={40}
                className="rounded-md"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20 ml-auto">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              {navLink("Experiences", "/#experience", 0)}
              {navLink("Skills", "/#skills", 1)}
              {navLink("About Me", "/#about-me", 2)}
              {navLink("Projects", "/#projects", 3)}
            </div>
          </div>

          {/* Socials + Mobile Menu Icon */}
          <div className="flex flex-row gap-5 ml-auto">
            {Socials.map((social) => (
                <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                >
                  <Image src={social.src} alt={social.name} width={32} height={32} />
                </a>
            ))}
            <div className="md:hidden flex items-center ml-2">
              {menuOpen ? (
                  <FiX
                      className="text-white w-7 h-7 cursor-pointer"
                      onClick={toggleMenu}
                  />
              ) : (
                  <FiMenu
                      className="text-white w-7 h-7 cursor-pointer"
                      onClick={toggleMenu}
                  />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
            <div className="md:hidden w-full bg-[#030014e6] border-t border-[#7042f861] mt-2 rounded-b-lg text-gray-200">
              <div className="flex flex-col items-center justify-center py-4 gap-4">
                {navLink("Experiences", "#experience", 0)}
                {navLink("Skills", "#skills", 1)}
                {navLink("About Me", "#about-me", 2)}
                {navLink("Projects", "#projects", 3)}
              </div>
            </div>
        )}
      </div>
  );
};

export default Navbar;
