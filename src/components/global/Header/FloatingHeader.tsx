"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/global/Button";
import { LayoutTemplate } from "lucide-react";

const navLinks = [
  { name: "Features", href: "#" },
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
];

export const FloatingHeader = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-[100] flex justify-center pt-6"
    >
      <nav className="w-[95%] max-w-7xl h-14 flex items-center justify-between px-6 rounded-full border border-white/10 bg-black/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center transition-transform group-hover:rotate-12">
            <LayoutTemplate size={18} className="text-white" />
          </div>
          <span className="font-bold tracking-tight text-white">OriginFlow</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm text-zinc-400 hover:text-white">Log in</button>
          <Button size="sm" className="rounded-full shadow-indigo-500/20 shadow-lg">
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};