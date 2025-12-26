"use client";
import React from "react";
import { LayoutTemplate, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Website Builder", "Marketing CRM", "Integrations", "Pricing"],
  Company: ["About Us", "Careers", "Newsroom", "Contact"],
  Resources: ["Documentation", "Community", "API Reference", "Templates", "Guides"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"],
};

export const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-24 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center transition-transform group-hover:rotate-6">
                <LayoutTemplate size={16} className="text-black" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">OriginFlow</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-[200px] mb-6">
              The professional standard for high-conversion website building and data intelligence.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-zinc-600 hover:text-white transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-white mb-6">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-xs text-zinc-500 hover:text-indigo-400 transition-colors flex items-center group"
                    >
                      {link}
                      <ArrowUpRight size={10} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Status & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-zinc-600 font-medium">
              © 2025 OriginFlow Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">
                All Systems Operational
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
             <div className="text-[10px] text-zinc-600">Built with</div>
             <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-zinc-400">Next.js</span>
                <span className="text-[10px] font-bold text-zinc-400">GSAP</span>
                <span className="text-[10px] font-bold text-zinc-400">Vercel</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};