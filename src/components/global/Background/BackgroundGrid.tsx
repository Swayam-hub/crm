"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const SpatialBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Parallax effect for floating objects based on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 40;
      const yPos = (clientY / window.innerHeight - 0.5) * 40;

      gsap.to(".floating-node", {
        x: (i) => xPos * (i + 1) * 0.5,
        y: (i) => yPos * (i + 1) * 0.5,
        rotateX: yPos * 0.1,
        rotateY: xPos * 0.1,
        duration: 1,
        ease: "power2.out",
        overwrite: true
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 bg-[#020202] overflow-hidden perspective-[1000px]">
      {/* 1. The Perspective Grid Floor */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[100vh] opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          transform: 'rotateX(60deg) translateY(200px)',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />

      {/* 2. Floating Builder Objects */}
      <FloatingObject className="top-[20%] left-[15%] w-32 h-10 border-indigo-500/30 bg-indigo-500/5" label="Button Block" delay={0} />
      <FloatingObject className="top-[60%] left-[10%] w-48 h-32 border-white/10 bg-white/5" label="Hero Card" delay={1} />
      <FloatingObject className="top-[15%] right-[15%] w-40 h-12 border-purple-500/30 bg-purple-500/5" label="Input Field" delay={2} />
      <FloatingObject className="bottom-[25%] right-[10%] w-56 h-40 border-white/10 bg-white/5" label="CRM Leads" delay={3} />

      {/* 3. Deep Space Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05)_0%,transparent_70%)]" />
      
      {/* 4. Film Grain for that "Premium Material" look */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

// Sub-component for floating blocks
const FloatingObject = ({ className, label, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 1 }}
    className={`floating-node absolute rounded-xl border flex items-center justify-center backdrop-blur-sm ${className}`}
  >
    <div className="flex flex-col items-center gap-2">
      <div className="h-1.5 w-8 rounded-full bg-white/10" />
      <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{label}</span>
    </div>
    {/* Inner corner accents for "Pixel Perfect" feel */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 rounded-tl-xl" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 rounded-br-xl" />
  </motion.div>
);