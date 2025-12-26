"use client";
import { KillBackground } from "@/components/global/Background/KillBackground";
import { Footer } from "@/components/global/Footer";
import { Header1 } from "@/components/global/Header/Header1";
import { DeveloperExperience } from "@/components/home/DeveloperExperience";
import { DevBento } from "@/components/home/Features";
import HeroComponent from "@/components/home/HeroComponent";
import { Pricing } from "@/components/home/Pricing";
import { StickyComparison } from "@/components/home/StickyComparison";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroHome() {
  return (

     

      <div className="relative z-10">
        <HeroComponent />
        <DevBento />
        {/* New Comparison Section */}
        <StickyComparison />

        {/* Call to Action Footer Section */}
        {/* <section className="py-40 flex flex-col items-center text-center px-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Ready to build <br /> something <span className="italic text-zinc-500">iconic?</span>
          </h2>
          <div className="flex gap-4">
            <button className="h-14 px-10 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold transition-all shadow-[0_0_30px_rgba(79,70,229,0.3)]">
              Get Started for Free
            </button>
          </div>
        </section> */}

        <Pricing />
        <DeveloperExperience />
        <Footer />
      </div>
  );
}