"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Layout, MousePointer2, Users, Zap } from "lucide-react";

export const KillBackground = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Smooth Parallax for floating objects
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 30;
      const y = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(".floating-node", {
        x: (i) => x * (i + 1) * 0.4,
        y: (i) => y * (i + 1) * 0.4,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 -z-50 bg-[#09090b] overflow-hidden">
      {/* 1. The Grid Layer */}
      <div className="absolute inset-0 opacity-[0.08] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_90%)]"
           style={{ backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* 2. Floating Glass Nodes */}
      <FloatingNode icon={<Layout size={18} />} label="Page Builder" className="top-[15%] left-[10%]" />
      <FloatingNode icon={<Users size={18} />} label="CRM Pipeline" className="top-[25%] right-[15%]" />
      <FloatingNode icon={<Zap size={18} />} label="Auto-Deploy" className="bottom-[20%] left-[20%]" />
      <FloatingNode icon={<MousePointer2 size={18} />} label="Heatmaps" className="bottom-[30%] right-[10%]" />

      {/* 3. Deep Color Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
    </div>
  );
};

const FloatingNode = ({ icon, label, className }: any) => (
  <div className={`floating-node absolute flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md shadow-2xl ${className}`}>
    <div className="text-indigo-400">{icon}</div>
    <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">{label}</span>
  </div>
);