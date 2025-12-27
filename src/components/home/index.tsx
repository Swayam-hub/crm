"use client";
import { Footer } from "@/components/global/Footer";
import { DeveloperExperience } from "@/components/home/DeveloperExperience";
import { DevBento } from "@/components/home/Features";
import HeroComponent from "@/components/home/HeroComponent";
import { Pricing } from "@/components/home/Pricing";
import { StickyComparison } from "@/components/home/StickyComparison";

export default function HomeMain() {
  return (
    <div className="relative z-10">
      <HeroComponent />
      <DevBento />
      <StickyComparison />
      <Pricing />
      <DeveloperExperience />
      <Footer />
    </div>
  );
}