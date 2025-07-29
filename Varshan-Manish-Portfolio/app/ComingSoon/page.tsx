"use client";
import React, { useEffect, useRef, useState } from "react";
const ComingSoon = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(true);
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      let offset = 0;
      let shouldShowVideo = true;
      if (width < 768) {
        offset = -260;
        shouldShowVideo = true;
      } else if (width >= 768 && width <= 1100) {
        offset = 0;
        shouldShowVideo = false;
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
    <section className="flex items-center justify-center min-h-screen bg-black text-white text-center p-6 relative overflow-hidden z-[1]">
      {showVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="rotate-180 absolute h-full w-full left-0 z-[10] object-cover"
          style={{ top: "-320px" }}
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      )}
      <div className="z-[30]">
        <h1 className="text-4xl font-bold">Coming Soon!</h1>
        <p className="text-xl mt-4">This section is under development.</p>
      </div>
    </section>
  );
};
export default ComingSoon;
