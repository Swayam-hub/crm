"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../global/Button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for solo entrepreneurs.",
    monthlyPrice: 29,
    yearlyPrice: 19,
    features: ["5 Projects", "Basic CRM Sync", "10k Monthly Visitors", "Standard Support"],
    action: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "The power user's choice.",
    monthlyPrice: 79,
    yearlyPrice: 59,
    features: ["Unlimited Projects", "Deep CRM Intelligence", "100k Monthly Visitors", "Priority Support", "Custom Domains"],
    action: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For scaling agencies.",
    monthlyPrice: 199,
    yearlyPrice: 159,
    features: ["White-label Builder", "Full API Access", "1M Monthly Visitors", "Dedicated Manager", "SLA Guarantee"],
    action: "Contact Sales",
    popular: false,
  },
];

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            Simple, <span className="text-zinc-500">scalable</span> pricing.
          </h2>
          
          {/* THE TOGGLE */}
          <div className="flex items-center gap-4 bg-zinc-900/50 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md w-fit mx-auto">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "relative px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors z-10",
                billingCycle === "monthly" ? "text-black" : "text-zinc-500 hover:text-white"
              )}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "relative px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors z-10",
                billingCycle === "yearly" ? "text-black" : "text-zinc-500 hover:text-white"
              )}
            >
              {billingCycle === "yearly" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              Yearly
            </button>
          </div>
          
          <p className="mt-4 text-xs font-bold text-indigo-400 uppercase tracking-[0.2em] animate-pulse">
            Save 20% with yearly billing
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col p-8 rounded-[2.5rem] border transition-all duration-500 group",
                plan.popular 
                  ? "bg-zinc-900 border-indigo-500/50 shadow-[0_0_40px_rgba(79,70,229,0.1)] scale-105 z-10" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/20"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-[10px] font-black uppercase tracking-widest text-white shadow-lg shadow-indigo-500/40">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tighter">$</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-6xl font-black tracking-tighter"
                  >
                    {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </motion.span>
                </AnimatePresence>
                <span className="text-zinc-500 font-medium">/mo</span>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check size={16} className="text-indigo-500 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.popular ? "default" : "outline"} 
                className={cn(
                  "w-full h-14 rounded-2xl text-xs uppercase font-bold tracking-[0.2em]",
                  plan.popular ? "bg-indigo-600 hover:bg-indigo-500 text-white" : ""
                )}
              >
                {plan.action}
              </Button>
            </div>
          ))}
        </div>

        {/* SECURE FOOTER */}
        <div className="mt-16 flex items-center gap-8 opacity-40">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles size={14}/> Encrypted Billing
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <Check size={14}/> Cancel Anytime
            </div>
        </div>
      </div>
    </section>
  );
};