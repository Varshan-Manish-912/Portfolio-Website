"use client";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
      <div className="w-full flex flex-col items-center justify-center m-auto z-[20]">
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-center gap-10 flex-wrap z-[20]">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-[20]">
            <div className="font-bold text-[16px] mb-2 z-[20]">Contact</div>
            <p className="flex flex-row items-center my-[10px] cursor-default z-[20]">
              <span className="text-[15px]">📞 +91 6374342510</span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <span className="text-[15px]">
                ✉️{" "}
                <a
                  href="mailto:varshan.manish.work@gmail.com"
                  className="hover:underline"
                >
                  varshan.manish.work@gmail.com
                </a>
              </span>
            </p>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <RxGithubLogo className="mr-[6px]" />
              <a
                href="https://github.com/Varshan-Manish-912"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] hover:underline"
              >
                Varshan Manish&apos;s GitHub
              </a>
            </p>
          </div>
        </div>
        <div className="mt-6 text-[15px] text-center">
          &copy; Created By Varshan Manish 2025. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
export default Footer;
