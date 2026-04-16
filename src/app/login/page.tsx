"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2, Globe, Layout } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <main className="min-h-screen bg-white flex overflow-hidden">
      {/* Left Side: Immersive Visuals (Visible on desktop) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden"
      >
        <img 
          src="/login_bg.png" 
          alt="Modern financial office" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-slate-900/80"></div>
        
        <div className="relative z-10 w-full h-full flex flex-col p-16 justify-between text-white">
          <Link href="/" className="flex items-center space-x-2 group">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:rotate-12">
               <span className="text-primary font-bold text-2xl">T</span>
             </div>
             <span className="text-3xl font-bold tracking-tight">Tax<span className="text-blue-200">Safar</span></span>
          </Link>

          <div>
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.6 }}
             >
               <h2 className="text-5xl font-extrabold leading-tight mb-6">
                 Simplify Your Tax Journey With India's Trusted <span className="text-blue-400">Experts.</span>
               </h2>
               <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed">
                 Empowering businesses and individuals with seamless compliance and financial growth strategies.
               </p>
             </motion.div>

             <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
               <div className="space-y-2">
                 <p className="text-4xl font-bold">50k+</p>
                 <p className="text-slate-400 font-medium">Trusted Clients</p>
               </div>
               <div className="space-y-2">
                 <p className="text-4xl font-bold">15+</p>
                 <p className="text-slate-400 font-medium">Years Experience</p>
               </div>
             </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-slate-300">
             <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-${i*100+400} overflow-hidden`}>
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                 </div>
               ))}
             </div>
             <p className="font-medium">Join 5,000+ CA experts on the platform</p>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50/50 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-8">
           <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 blue-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-slate-900">TaxSafar</span>
           </Link>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <div className="mb-10 lg:text-left text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Login.</h1>
            <p className="text-slate-500 font-medium text-lg">Welcome back to your financial cockpit.</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email or Mobile</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  required 
                  type="text" 
                  placeholder="name@company.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Password</label>
                <Link href="#" className="text-sm font-bold text-primary hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  required 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 ml-1">
              <input type="checkbox" className="w-4 h-4 rounded text-primary border-slate-300 focus:ring-primary cursor-pointer transition-all" id="remember" />
              <label htmlFor="remember" className="text-sm text-slate-600 font-medium cursor-pointer">Stay logged in for 30 days</label>
            </div>

            <button 
              type="submit"
              className="w-full py-5 blue-gradient text-white font-bold rounded-[1.25rem] shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              <span>Access Account</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-slate-50 px-4 text-slate-400 font-bold uppercase tracking-widest">Or authenticate with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            <button className="flex items-center justify-center space-x-3 py-4 bg-white border border-slate-200 rounded-[1.25rem] hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]">
              <Globe size={20} className="text-blue-500" />
              <span>Google</span>
            </button>
            <button className="flex items-center justify-center space-x-3 py-4 bg-white border border-slate-200 rounded-[1.25rem] hover:bg-slate-50 transition-all font-bold text-slate-700 shadow-sm active:scale-[0.98]">
              <Layout size={20} className="text-indigo-500" />
              <span>Microsoft</span>
            </button>
          </div>

          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-500 font-bold">
              New to TaxSafar?{" "}
              <Link href="/register" className="text-primary hover:underline ml-1">Create an expert account</Link>
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-2 text-slate-400">
             <ShieldCheck size={16} />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Bank-grade 256-bit SSL Security</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

