"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const HeroContent = dynamic(() => import("../sub/HeroContent"), { ssr: false });
const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      let offset: number;
      let shouldShowVideo = true;
      if (width < 768) {
        offset = -260;
        shouldShowVideo = true;
      } else if (width >= 768 && width <= 1100) {
        offset = -250;
        shouldShowVideo = true;
      } else {
        offset = -250;
        shouldShowVideo = true;
      }
      if (videoRef.current) {
        videoRef.current.style.top = `${offset}px`;
      }
      setShowVideo(shouldShowVideo);
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    window.addEventListener("orientationchange", updateLayout);
    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("orientationchange", updateLayout);
    };
  }, []);
  return (
    <div className="relative flex flex-col min-h-[600px] md:min-h-screen w-full overflow-hidden ">
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute h-[80vh] w-full left-0 object-cover z-[1]"
          style={{ top: "-320px" }}
        >
          <source src="/blackhole.mp4" type="video/mp4" />
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}
      <HeroContent />
    </div>
  );
};
export default Hero;
