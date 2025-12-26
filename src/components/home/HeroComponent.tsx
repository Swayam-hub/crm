import React from 'react'
import { motion } from "framer-motion";
import { Button } from "../global/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
const HeroComponent = () => {
  return (
     <section className="max-w-7xl mx-auto pt-44 pb-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Typography & CTA */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8 w-fit">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Everything you need to scale to $10k/mo
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            The Builder <br />
            <span className="text-zinc-500 italic">for the</span> <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              1% of Marketers.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-12 leading-relaxed">
            A high-performance engine that merges pixel-perfect design with real-time CRM intelligence. Build, track, and scale without ever leaving the canvas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-10 text-lg rounded-xl bg-white text-black hover:bg-zinc-200 group">
              Get Started Free 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-10 text-lg rounded-xl">
              Live Demo
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-zinc-500">
             {['No-code Editor', 'Direct CRM Sync', 'Instant SEO'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                   <CheckCircle2 size={14} className="text-indigo-500" /> {item}
                </div>
             ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE: The "Visual Proof" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="relative group"
        >
          {/* Glowing Aura behind mockup */}
          <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full group-hover:bg-indigo-500/30 transition-colors" />
          
          <div className="relative border border-white/10 bg-zinc-900/80 rounded-2xl p-2 backdrop-blur-3xl shadow-2xl">
            <div className="rounded-xl border border-white/5 bg-black aspect-[4/3] overflow-hidden flex flex-col">
               {/* CRM Visualization Component Peek */}
               <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-950/50">
                  <div className="flex gap-4">
                     <div className="w-12 h-2 rounded-full bg-zinc-800" />
                     <div className="w-8 h-2 rounded-full bg-zinc-800" />
                  </div>
                  <div className="h-6 w-16 rounded-md bg-indigo-500/20 border border-indigo-500/30" />
               </div>
               <div className="flex-1 p-6 space-y-4">
                  <div className="h-4 w-full bg-zinc-900 rounded" />
                  <div className="h-4 w-[80%] bg-zinc-900 rounded" />
                  <div className="h-4 w-[90%] bg-zinc-900 rounded opacity-50" />
                  <div className="pt-8 grid grid-cols-2 gap-4">
                    <div className="h-20 bg-indigo-500/5 border border-indigo-500/10 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xl font-bold">+128%</span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Growth</span>
                    </div>
                    <div className="h-20 bg-zinc-900 border border-white/5 rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xl font-bold">1.2k</span>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Leads</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>

      </section>
  )
}

export default HeroComponent