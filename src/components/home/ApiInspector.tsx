"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import { 
  Code2, 
  Copy, 
  Check, 
  Terminal, 
  X, 
  Globe, 
  Shield 
} from "lucide-react";

const apiExamples = {
  curl: `curl -X POST https://api.originflow.com/v1/deploy \\
  -H "Authorization: Bearer {YOUR_API_KEY}" \\
  -d '{
    "project_id": "proj_882x",
    "environment": "production",
    "edge_runtime": "nodejs-20"
  }'`,
  javascript: `const response = await fetch('https://api.originflow.com/v1/leads', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.ORIGIN_API_KEY
  },
  body: JSON.stringify({
    event: 'website_visit',
    metadata: { source: 'organic' }
  })
});`,
};

export const ApiInspector = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [method, setMethod] = useState<"curl" | "javascript">("curl");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiExamples[method]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 h-full w-full max-w-[450px] bg-[#050505] border-l border-white/10 z-[250] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/5 bg-zinc-950/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                  <Terminal size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white">API Inspector</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] text-zinc-500 font-mono uppercase">REST API v1.2</p>
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-lg text-zinc-500 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Language Selector */}
            <div className="px-6 py-4 flex gap-2">
              {["curl", "javascript"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setMethod(lang as any)}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all ${
                    method === lang 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-zinc-500 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code Block Container */}
            <div className="flex-1 overflow-y-auto p-6 bg-black">
              <div className="relative group">
                <button 
                  onClick={copyToClipboard}
                  className="absolute right-4 top-4 p-2 rounded-md bg-white/5 border border-white/10 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
                
                <Highlight theme={themes.vsDark} code={apiExamples[method]} language={method === 'curl' ? 'bash' : 'javascript'}>
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className="text-[12px] font-mono leading-relaxed overflow-x-auto">
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                          <span className="text-zinc-700 mr-4 select-none inline-block w-4">{i + 1}</span>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>

              {/* Documentation Snippet */}
              <div className="mt-12 space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-600">Response Object</h4>
                 <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] font-mono text-[11px]">
                    <span className="text-purple-400">"status"</span>: <span className="text-emerald-400">"success"</span>,<br />
                    <span className="text-purple-400">"deployment_url"</span>: <span className="text-indigo-400">"https://project-a.flow.io"</span>
                 </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 bg-zinc-950/50">
               <button className="w-full py-3 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                  View Full API Docs
               </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};