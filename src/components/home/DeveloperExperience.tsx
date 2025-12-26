"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Highlight, themes, type Language } from "prism-react-renderer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Terminal, Cpu, Code2, Webhook } from "lucide-react";

// A custom, indigo-tinted dark theme for the code editor
const customDarkTheme = {
  plain: {
    color: "#e2e8f0", // zinc-200
    backgroundColor: "transparent",
  },
  styles: [
    { types: ["comment"], style: { color: "#64748b", fontStyle: "italic" } }, // zinc-500
    { types: ["string", "inserted"], style: { color: "#a5b4fc" } }, // indigo-300
    { types: ["builtin", "char", "constant", "function"], style: { color: "#818cf8" } }, // indigo-400
    { types: ["punctuation", "operator"], style: { color: "#e2e8f0" } },
    { types: ["variable"], style: { color: "#c084fc" } }, // purple-400
    { types: ["keyword"], style: { color: "#6366f1", fontWeight: "bold" } }, // indigo-500
  ],
};

const exampleCode = `import { useCRM, BuilderComponent } from '@originflow/sdk';

// 1. Create custom components that sync with your data
export const CustomPricingCard = ({ planId }) => {
  // Fetch real-time pricing data from the CRM engine
  const { data, isLoading } = useCRM.getPlan(planId);

  if (isLoading) return <SkeletonLoader />;

  return (
    <BuilderComponent.Card className="p-6 border-indigo-500/50">
      <h3 className="text-2xl font-bold">{data.name}</h3>
      <div className="text-4xl font-black">\${data.price}</div>
      {/* Automatically tracks clicks back to CRM leads */}
      <BuilderComponent.Button trackEvent="purchase_intent">
        Subscribe Now
      </BuilderComponent.Button>
    </BuilderComponent.Card>
  );
};`;

export const DeveloperExperience = () => {
  const terminalRef = useRef<HTMLDivElement>(null);

  // GSAP: 3D Tilt Effect on Hover
  useGSAP(() => {
    if (!terminalRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = terminalRef.current!.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;

      gsap.to(terminalRef.current, {
        rotateY: x,
        rotateX: -y,
        transformPerspective: 1000,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(terminalRef.current, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    terminalRef.current.addEventListener("mousemove", handleMouseMove);
    terminalRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        // cleanup provided by @gsap/react, but good practice to remove listeners if moving outside
        terminalRef.current?.removeEventListener("mousemove", handleMouseMove);
        terminalRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, { scope: terminalRef });

  const features = [
    { icon: <Code2 />, title: "React Server Components", desc: "Ship zero-bundle-size components." },
    { icon: <Cpu />, title: "Typed SDK", desc: "Full TypeScript autocomplete for CRM data." },
    { icon: <Webhook />, title: "Edge Functions", desc: "Run server-side logic right at the edge." },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Subtle Grid Background specifically for this section */}
       <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div>
          <div className="flex items-center gap-2 text-indigo-400 mb-6">
            <Terminal size={20} />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Built for Developers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6">
            Extensible with standard <br />
            <span className="text-white bg-indigo-500/10 px-2 border border-indigo-500/20 rounded-lg">React & TypeScript.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
            Don't get locked into a black box. Eject whenever you want, or extend the builder with your own custom components using our typed SDK.
          </p>

          <div className="grid gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{f.title}</h4>
                  <p className="text-sm text-zinc-500">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: The Glass Terminal */}
        <div className="relative perspective-[1000px]">
            {/* Behind-terminal Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-600/30 blur-[100px] -z-10" />
            
            <motion.div
                ref={terminalRef}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="rounded-2xl border border-white/10 bg-[#09090b]/80 backdrop-blur-xl overflow-hidden shadow-2xl will-change-transform"
            >
                {/* Faux Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-zinc-700" />
                        <div className="w-3 h-3 rounded-full bg-zinc-700" />
                        <div className="w-3 h-3 rounded-full bg-zinc-700" />
                    </div>
                    <div className="text-xs text-zinc-500 font-mono">components/CustomPricing.tsx</div>
                    <div className="w-3" /> {/* Spacer */}
                </div>

                {/* Code Editor Area */}
                <div className="p-6 overflow-x-auto font-mono text-[13px] leading-relaxed">
                    <Highlight theme={customDarkTheme as any} code={exampleCode} language="tsx">
                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={{ ...style, backgroundColor: 'transparent' }}>
                            {tokens.map((line, i) => (
                            <motion.div
                                key={i}
                                {...getLineProps({ line })}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.03, duration: 0.4 }} // Stagger effect
                                className="table-row"
                            >
                                <span className="table-cell text-zinc-700 text-right pr-4 select-none">{i + 1}</span>
                                <span className="table-cell">
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                                </span>
                            </motion.div>
                            ))}
                        </pre>
                        )}
                    </Highlight>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};