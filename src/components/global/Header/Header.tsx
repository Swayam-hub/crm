"use client";
import { usePathname } from "next/navigation";
import { Button } from "../Button";
import { useSidebarStore } from "@/zustand/use-sidebar";
import { cn } from "@/lib/utils";

export const Header = () => {
  const pathname = usePathname();
const { isCollapsed } = useSidebarStore();
const isLandingPage = pathname === "/";
  return (
    <nav 
      className={cn(
        "fixed top-0 right-0 z-60 h-14 flex items-center border-b border-white/5 bg-black/60 backdrop-blur-md transition-all duration-500",
        isLandingPage 
          ? "left-0" 
          : isCollapsed 
            ? "left-(--sidebar-collapsed)" 
            : "left-(--sidebar-width)"
      )}
    >
      {/* // <nav className="fixed top-0 left-0 w-full z-100 h-14 flex items-center border-b border-white/5 bg-black/60 backdrop-blur-md"> */}
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-5 h-5 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <span className="text-sm font-bold tracking-[0.2em] uppercase">Origin</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {['Engine', 'Builder', 'Data', 'Network'].map((item) => (
              <a key={item} href="#" className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 hover:text-white">Log Systems</button>
          <div className="h-4 w-px bg-white/10" />
          <Button variant="outline" size="sm" className="h-8 rounded-none border-white/20 hover:bg-white hover:text-black text-[10px] uppercase font-bold tracking-widest">
            Deploy Now
          </Button>
        </div>
      </div>
    </nav>
  );
};