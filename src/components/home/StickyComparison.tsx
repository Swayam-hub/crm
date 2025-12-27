"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Check, X, Zap, Shield, BarChart, Globe } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    name: "Visual Page Builder",
    competitor: "Basic Templates",
    crm: "None (External)",
    origin: "Pixel-Perfect Canvas",
    icon: <Globe size={16} />,
  },
  {
    name: "Real-time Lead Sync",
    competitor: "Manual Export",
    crm: "Complex API",
    origin: "Native & Instant",
    icon: <Zap size={16} />,
  },
  {
    name: "Advanced SEO AI",
    competitor: "Plugin Required",
    crm: "Limited",
    origin: "Built-in Engine",
    icon: <Shield size={16} />,
  },
  {
    name: "Customer Tracking",
    competitor: "Google Analytics only",
    crm: "Segmented",
    origin: "End-to-End Attribution",
    icon: <BarChart size={16} />,
  },
];

export const StickyComparison = () => {
  const tableRef = useRef(null);

  useGSAP(() => {
    // Animate rows in one by one as they enter view
    gsap.from(".comparison-row", {
      opacity: 0,
      x: -20,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: tableRef.current,
        start: "top 80%",
      },
    });
  }, { scope: tableRef });

  return (
    <section ref={tableRef} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          Stop stitching tools together.
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto">
          Legacy stacks cost more in time than they do in subscriptions. 
          See how <span className="text-white font-bold">OriginFlow</span> changes the game.
        </p>
      </div>

      <div className="relative overflow-x-auto rounded-2xl border border-white/5 bg-zinc-900/20 backdrop-blur-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="sticky top-14 z-20 bg-[#09090b]/90 backdrop-blur-xl border-b border-white/10">
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-500">Feature</th>
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-500">Legacy Builders</th>
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-500">Standalone CRM</th>
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-indigo-400 bg-indigo-500/5 relative">
                OriginFlow
                {/* Visual indicator for "The Winner" */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 shadow-[0_0_15px_#6366f1]" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {features.map((f, i) => (
              <tr key={i} className="comparison-row group hover:bg-white/2 transition-colors">
                <td className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="text-zinc-500 group-hover:text-indigo-400 transition-colors">{f.icon}</div>
                    <span className="text-sm font-medium text-white">{f.name}</span>
                  </div>
                </td>
                <td className="p-6 text-sm text-zinc-500">{f.competitor}</td>
                <td className="p-6 text-sm text-zinc-500">{f.crm}</td>
                <td className="p-6 text-sm font-bold text-white bg-indigo-500/2 border-x border-white/5">
                  <div className="flex items-center gap-2">
                    <Check size={16} className="text-indigo-400" />
                    {f.origin}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trust Summary Footer */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/1">
              <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                  <Zap size={20} />
              </div>
              <div>
                  <h4 className="font-bold mb-1">99.9% Uptime</h4>
                  <p className="text-xs text-zinc-500">Your business never stops, neither do we.</p>
              </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/1">
              <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <Shield size={20} />
              </div>
              <div>
                  <h4 className="font-bold mb-1">Enterprise Security</h4>
                  <p className="text-xs text-zinc-500">Bank-level encryption for all CRM data.</p>
              </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl border border-white/5 bg-white/1">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <BarChart size={20} />
              </div>
              <div>
                  <h4 className="font-bold mb-1">Unified Analytics</h4>
                  <p className="text-xs text-zinc-500">One dashboard for all your marketing metrics.</p>
              </div>
          </div>
      </div>
    </section>
  );
};