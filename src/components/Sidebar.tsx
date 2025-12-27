"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  LayoutGrid, 
  Terminal, 
  Database, 
  Globe, 
  Settings, 
  ChevronRight, 
  Plus,
  GitBranch,
  Monitor,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/zustand/use-sidebar";

const navItems = [
  { name: "Overview", icon: <LayoutGrid size={18} />, active: true },
  { name: "Deployments", icon: <Terminal size={18} />, badge: "2" },
  { name: "Data Engine", icon: <Database size={18} /> },
  { name: "Edge Network", icon: <Globe size={18} /> },
  { name: "Monitoring", icon: <Activity size={18} /> },
];

export const Sidebar = () => {
  const { isCollapsed, toggle } = useSidebarStore();

  return (
    <aside 
      className={cn(
        "fixed left-0 top-14 z-50 border-r border-white/5 bg-[#050505] transition-all duration-500 ease-in-out flex flex-col",
        "h-[calc(100vh-3.5rem)]",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* 1. Workspace Switcher */}
      <div className="p-6">
        <div className="flex items-center gap-3 p-2 rounded-xl bg-white/3 border border-white/5 group cursor-pointer hover:border-indigo-500/30 transition-all">
          <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
            <Monitor size={16} className="text-white" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Acme_Prod</p>
              <p className="text-[10px] text-zinc-500 font-mono">v4.2.0-stable</p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Navigation List */}
      <nav className="flex-1 px-4 space-y-2">
        {!isCollapsed && (
          <p className="px-4 text-[10px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-4">
            Development
          </p>
        )}
        {navItems.map((item) => (
          <div 
            key={item.name}
            className={cn(
              "flex items-center gap-4 p-3 rounded-xl cursor-pointer group transition-all",
              item.active 
                ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" 
                : "text-zinc-500 hover:bg-white/5 hover:text-white"
            )}
          >
            <div className="shrink-0">{item.icon}</div>
            {!isCollapsed && (
              <div className="flex flex-1 justify-between items-center">
                <span className="text-xs font-bold">{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded font-mono">
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* 3. Git Status Panel (The Dev Touch) */}
      {!isCollapsed && (
        <div className="m-4 p-4 rounded-2xl bg-[#09090b] border border-white/5">
           <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-emerald-500">
                 <GitBranch size={12} />
                 <span className="text-[10px] font-mono font-bold uppercase">Main</span>
              </div>
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
           </div>
           <p className="text-[10px] text-zinc-500 leading-relaxed">
             Last deployed 14m ago by <span className="text-zinc-300">@dev_user</span>
           </p>
        </div>
      )}

      {/* 4. Footer & Collapse Toggle */}
      <div className="p-4 border-t border-white/5 flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
             <div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10" />
             <div className="text-left">
                <p className="text-[10px] font-bold text-white">Dev Profile</p>
                <p className="text-[9px] text-zinc-500 uppercase tracking-widest">Settings</p>
             </div>
          </div>
        )}
        <button 
          onClick={toggle}
          className="p-2 rounded-lg hover:bg-white/5 text-zinc-500"
        >
          <ChevronRight size={16} className={cn("transition-transform", !isCollapsed && "rotate-180")} />
        </button>
      </div>
    </aside>
  );
};