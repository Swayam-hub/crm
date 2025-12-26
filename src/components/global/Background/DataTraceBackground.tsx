"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const DataTraceBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pulses = document.querySelectorAll(".grid-pulse");
    
    pulses.forEach((pulse) => {
      // Create a random path for each pulse of light
      const animatePulse = () => {
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 5;
        
        gsap.fromTo(pulse, 
          { strokeDashoffset: 100, opacity: 0 },
          { 
            strokeDashoffset: -100, 
            opacity: 0.8, 
            duration: duration, 
            delay: delay,
            ease: "power2.inOut",
            onComplete: animatePulse 
          }
        );
      };
      animatePulse();
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 bg-[#050505] overflow-hidden">
      {/* Radial Mask to keep focus in the center */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />

      {/* The Architectural Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#333" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Animated Pulses (Lines that "travel" the grid) */}
        {[...Array(10)].map((_, i) => (
          <line
            key={i}
            className="grid-pulse"
            x1={Math.floor(Math.random() * 10) * 80}
            y1="0"
            x2={Math.floor(Math.random() * 10) * 80}
            y2="100%"
            stroke="white"
            strokeWidth="1"
            strokeDasharray="20 80"
          />
        ))}
      </svg>

      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};