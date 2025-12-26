"use client";

import { ReactNode, useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { useAnimationFrame } from "framer-motion";

type Props = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: Props) {
  const lenis = useLenis();

  // 🔗 Sync Lenis with Framer Motion RAF
  useAnimationFrame((time) => {
    lenis?.raf(time);
  });

  // 🔧 Optional global config
  useEffect(() => {
    lenis?.on("scroll", () => {
      // hook for analytics / effects
    });
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        // smoothTouch: false, // ✅ better mobile UX
      }}
    >
      {children}
    </ReactLenis>
  );
}
