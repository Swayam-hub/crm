"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const KillerBackground = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030303]">
      {/* 1. Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] [animation-delay:2s] animate-pulse" />

      {/* 2. Interactive Spotlight */}
      <div 
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-[500px] z-30 translate-x-[-50%] translate-y-[-50%] bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0%,transparent_70%)]"
      />

      {/* 3. The Grid with Masking */}
      <div 
        ref={gridRef}
        className="absolute inset-0 z-10 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), 
                            linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 4. Film Grain / Noise Overlay */}
      <div className="absolute inset-0 z-40 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};