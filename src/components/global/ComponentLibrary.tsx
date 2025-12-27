"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Box, 
  Type, 
  Image as ImageIcon, 
  Columns, 
  MousePointerClick, 
  Search,
  X
} from "lucide-react";

const components = [
  { group: "Elements", items: [
    { name: "Headline", icon: <Type size={16} />, desc: "SEO Optimized H1-H6" },
    { name: "Button", icon: <MousePointerClick size={16} />, desc: "Micro-interaction ready" },
  ]},
  { group: "Layout", items: [
    { name: "Container", icon: <Box size={16} />, desc: "Auto-centering wrapper" },
    { name: "Flex Grid", icon: <Columns size={16} />, desc: "Responsive 12-col system" },
  ]},
  { group: "Media", items: [
    { name: "Image", icon: <ImageIcon size={16} />, desc: "Next.js Image optimized" },
  ]}
];

export const ComponentLibrary = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-150"
          />

          {/* Library Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-87.5 bg-[#0c0c0e] border-l border-white/10 z-200 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">Library</h3>
                <p className="text-[10px] text-zinc-500 font-medium mt-1">v4.0 Core Components</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg text-zinc-500 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600" size={14} />
                <input 
                  type="text" 
                  placeholder="Search components..." 
                  className="w-full bg-white/3 border border-white/5 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Component List */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              {components.map((group) => (
                <div key={group.group} className="mb-8">
                  <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600 mb-4 px-2">
                    {group.group}
                  </h4>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <motion.div
                        key={item.name}
                        whileHover={{ x: 4 }}
                        className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/3 cursor-pointer transition-colors border border-transparent hover:border-white/5"
                      >
                        <div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-zinc-200">{item.name}</p>
                          <p className="text-[10px] text-zinc-500">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Shortcut Hint */}
            <div className="p-6 border-t border-white/5 bg-white/1">
              <div className="flex items-center justify-between text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                <span>Quick Search</span>
                <span className="px-1.5 py-0.5 rounded bg-zinc-800 border border-white/10 text-zinc-400 font-mono">⌘ K</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};