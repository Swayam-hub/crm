"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/zustand/use-sidebar";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isCollapsed } = useSidebarStore();

  // Define which paths should NOT show the sidebar (the landing page)
  const isLandingPage = pathname === "/";

  return (
    <div className="flex min-h-screen">
      {/* Only render sidebar if not on landing page */}
      {!isLandingPage && <Sidebar />}

      <main
        className={cn(
          "relative flex-1 transition-all duration-300 ease-in-out",
          // Only apply margins if sidebar is present
          !isLandingPage && (isCollapsed ? "ml-(--sidebar-collapsed)" : "ml-(--sidebar-width)")
        )}
      >
        {children}
      </main>
    </div>
  );
}