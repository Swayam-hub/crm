"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  GitBranch, 
  Database, 
  Zap, 
  Activity, 
  Webhook, 
  Box, 
  Key,
  Globe
} from "lucide-react";
import { ApiInspector } from "./ApiInspector";

export const DevBento = () => {
    const [isInspectorOpen, setIsInspectorOpen] = useState(false);
    console.log(isInspectorOpen);
    
  return (
    <>
    <ApiInspector isOpen={isInspectorOpen} onClose={() => setIsInspectorOpen(false)} />
    <section className="py-32 px-6 max-w-7xl mx-auto font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-5xl font-bold tracking-tighter mb-4">
            Built for <span className="text-indigo-400">Engineers.</span>
          </h2>
          <p className="text-zinc-500 max-w-md text-lg">
            A website builder that speaks GraphQL, deploys to the Edge, and scales with your git workflow.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900/50 p-2 rounded-xl border border-white/5">
           <div className="flex -space-x-2">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#09090b] bg-zinc-800 flex items-center justify-center text-[10px] font-bold">JS</div>
              ))}
           </div>
           <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold px-2">v4.2.0-stable</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[300px]">
        
        {/* LARGE: THE DEPLOYMENT PIPELINE */}
        <DevBlock className="md:col-span-8 md:row-span-2 bg-[#050505]">
          <DevHeader title="Deployment Pipeline" icon={<GitBranch size={14} />} />
          <div className="p-8 h-full flex flex-col justify-center">
             <div className="relative space-y-12">
                {/* Visual Connection Line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-indigo-500 via-zinc-800 to-transparent" />

                <PipelineStep status="success" label="Commit: Initializing SDK" sub="main -> origin" time="2m ago" />
                <PipelineStep status="loading" label="Building Edge Functions" sub="Optimizing chunks..." time="Running" />
                <PipelineStep status="pending" label="CDN Propagation" sub="240 global nodes" time="Next" />
             </div>
             
             {/* Log Stream Snippet */}
             <div className="mt-12 p-4 bg-black rounded-xl border border-white/5 font-mono text-[10px] text-zinc-500">
                <div className="flex gap-2"><span className="text-indigo-500">[INFO]</span> Successfully connected to CRM Cluster B</div>
                <div className="flex gap-2"><span className="text-emerald-500">[DONE]</span> Compiled 142 React Server Components</div>
             </div>
          </div>
          </DevBlock>
        {/* </BentoBlock> */}

        {/* RIGHT: DATABASE SCHEMA */}
        <DevBlock className="md:col-span-4 md:row-span-1">
          <DevHeader title="Schema Engine" icon={<Database size={14} />} />
          <div className="p-6">
             <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between p-2 rounded bg-white/3 border border-white/5">
                   <span className="text-zinc-400">userId</span>
                   <span className="text-indigo-400">UUID</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-white/3 border border-white/5">
                   <span className="text-zinc-400">last_login</span>
                   <span className="text-purple-400">Timestamp</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-white/3 border border-white/5">
                   <span className="text-zinc-400">conversion</span>
                   <span className="text-emerald-400">Boolean</span>
                </div>
             </div>
          </div>
        </DevBlock>

        {/* RIGHT: API KEYS & WEBHOOKS */}
        <DevBlock className="md:col-span-4 md:row-span-1 cursor-pointer group" onClick={() => setIsInspectorOpen(true)}>
          <DevHeader title="API Credentials" icon={<Key size={14} />} />
          <div className="p-6">
            <div className="p-6">
         {/* ... contents ... */}
         <div className="mt-4 flex items-center gap-2 text-indigo-400 group-hover:gap-3 transition-all">
            <span className="text-[10px] font-bold uppercase tracking-widest">Inspect API Calls</span>
            <Globe size={14} />
         </div>
      </div>
             <div className="space-y-4">
                <div className="h-10 w-full bg-zinc-900 rounded-lg border border-white/5 flex items-center px-4 justify-between">
                   <span className="text-[10px] font-mono text-zinc-500">pk_live_****************</span>
                   <button className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Copy</button>
                </div>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-medium">
                   Use this key to authorize requests from your custom React environment.
                </p>
             </div>
             <div className="flex gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] uppercase font-bold text-zinc-500">Webhooks: Active</span>
             </div>
          </div>
        </DevBlock>

        {/* BOTTOM: SYSTEM HEALTH / PERFORMANCE */}
        <DevBlock className="md:col-span-12 md:row-span-1 bg-linear-to-r from-black to-[#0c0c0e]">
          <DevHeader title="Global Performance Index" icon={<Activity size={14} />} />
          <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
             <Metric label="Server Latency" value="14ms" trend="-2ms" />
             <Metric label="Edge Hits" value="98.2%" trend="+0.4%" />
             <Metric label="API Success" value="100%" trend="stable" />
             <Metric label="Build Time" value="1.2s" trend="-0.5s" />
          </div>
        </DevBlock>
      </div>
 
    </section>
    </>
  );
};

/* --- SUB-COMPONENTS --- */

const DevHeader = ({ title, icon }: any) => (
  <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between">
    <div className="flex items-center gap-2">
       <span className="text-indigo-500">{icon}</span>
       <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">{title}</span>
    </div>
    <div className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
  </div>
);

const PipelineStep = ({ status, label, sub, time }: any) => (
  <div className="flex items-start gap-6 relative z-10">
    <div className={`h-12 w-12 rounded-xl flex items-center justify-center border ${
      status === 'success' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' :
      status === 'loading' ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-500' :
      'bg-zinc-900 border-white/5 text-zinc-700'
    }`}>
      {status === 'success' ? <Zap size={18}/> : <Box size={18}/>}
    </div>
    <div className="flex-1">
       <div className="flex justify-between items-center mb-1">
          <h4 className="text-sm font-bold text-white">{label}</h4>
          <span className="text-[10px] font-mono text-zinc-600 uppercase">{time}</span>
       </div>
       <p className="text-[11px] text-zinc-500 font-medium">{sub}</p>
    </div>
  </div>
);

const Metric = ({ label, value, trend }: any) => (
  <div className="space-y-1">
    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">{label}</p>
    <div className="flex items-baseline gap-2">
       <span className="text-3xl font-black tracking-tighter text-white">{value}</span>
       <span className={`text-[10px] font-bold ${trend.includes('+') ? 'text-emerald-500' : trend === 'stable' ? 'text-zinc-500' : 'text-indigo-400'}`}>
          {trend}
       </span>
    </div>
  </div>
);

const DevBlock = ({ children, className }: any) => (
  <div className={`relative rounded-4xl border border-white/10 bg-[#09090b] group hover:border-white/20 transition-colors ${className}`}>
     {children}
  </div>
);