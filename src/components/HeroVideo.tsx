"use client";

import { useRef, useState, useEffect } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function onCanPlay() {
      // Small delay to ensure first frame is painted
      setTimeout(() => setReady(true), 100);
    }

    if (video.readyState >= 3) {
      onCanPlay();
    } else {
      video.addEventListener("canplay", onCanPlay, { once: true });
      return () => video.removeEventListener("canplay", onCanPlay);
    }
  }, []);

  return (
    <>
      {/* Branded placeholder — visible until video is ready */}
      <div
        className={`absolute inset-0 bg-primary flex items-center justify-center transition-opacity duration-700 ${
          ready ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src="/kokos-logo.png"
          alt=""
          className="w-16 h-16 md:w-20 md:h-20 object-contain animate-pulse"
        />
      </div>

      {/* Video — fades in when loaded */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover scale-105 transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
    </>
  );
}
