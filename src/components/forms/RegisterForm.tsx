"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";
import { RegisterInput, registerSchema } from "@/lib/validation";

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInput) => {
    // Simulate API call
    console.log("Auth Data:", data);
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-100 p-8 rounded-4xl border border-white/10 bg-zinc-900/50 backdrop-blur-2xl shadow-2xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tighter text-white">Welcome Back</h1>
          <p className="text-sm text-zinc-500 mt-2">Log in to your OriginFlow terminal</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
               <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Name</label>
            <input 
              {...register("name")}
              className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
              placeholder="Enter name"
            />
            {errors.name && <p className="text-[10px] text-red-400 font-bold">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Email Address</label>
            <input 
              {...register("email")}
              className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
              placeholder="name@company.com"
            />
            {errors.email && <p className="text-[10px] text-red-400 font-bold">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">Password</label>
            <input 
              {...register("password")}
              type="password"
              className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
              placeholder="••••••••"
            />
            {errors.password && <p className="text-[10px] text-red-400 font-bold">{errors.password.message}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-50"
          >
            {isSubmitting ? "Authenticating..." : "Initialize Session"}
          </button>
        </form>

        <p className="mt-8 text-center text-xs text-zinc-600">
          Don't have an account? <Link href="/register" className="text-indigo-400 hover:underline">Register</Link>
        </p>
      </motion.div>
    </div>
  );
}