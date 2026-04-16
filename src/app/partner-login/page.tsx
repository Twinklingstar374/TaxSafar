"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, ArrowRight, Briefcase, Info, ShieldCheck, Award, Zap } from "lucide-react";

export default function PartnerLoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <main className="min-h-screen bg-white flex overflow-hidden">
      {/* Left Side: Immersive Visuals (Expert Boardroom) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 relative bg-indigo-950 overflow-hidden"
      >
        <img 
          src="/partner_bg.png" 
          alt="Expert Consulting Room" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/60 to-slate-950/90"></div>
        
        <div className="relative z-10 w-full h-full flex flex-col p-16 justify-between text-white">
          <Link href="/" className="flex items-center space-x-2 group">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:rotate-12">
               <span className="text-primary font-bold text-2xl">T</span>
             </div>
             <span className="text-3xl font-bold tracking-tight text-white">Tax<span className="text-blue-300">Safar</span></span>
          </Link>

          <div>
             <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.4, duration: 0.6 }}
             >
               <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-6 uppercase tracking-widest border border-blue-500/30">
                 <Award size={14} />
                 <span>Verified Expert Portal</span>
               </div>
               <h2 className="text-5xl font-extrabold leading-tight mb-6">
                 Growth Tools For The <span className="text-blue-400">Modern Professional.</span>
               </h2>
               <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed">
                 Join India's fastest-growing tax network. Manage clients, automate filings, and scale your consulting business.
               </p>
             </motion.div>

             <div className="space-y-6">
                {[
                  { icon: <Zap className="text-yellow-400" size={18} />, text: "AI-Powered Compliance Automation" },
                  { icon: <ShieldCheck className="text-green-400" size={18} />, text: "Highly Secure Client Data Vault" },
                  { icon: <Briefcase className="text-blue-400" size={18} />, text: "Unified Case Management System" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-200">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                      {item.icon}
                    </div>
                    <span className="font-semibold">{item.text}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-10">
             <div className="flex flex-col">
               <span className="text-2xl font-bold">4.9/5</span>
               <span className="text-xs text-slate-400 uppercase font-bold tracking-widest">Expert Rating</span>
             </div>
             <div className="text-right">
                <p className="text-sm text-slate-400 font-medium italic">"The most efficient portal for CAs in India."</p>
                <p className="text-xs text-white font-bold mt-1">— Rahul Sharma, Senior Consultant</p>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Partner Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50 relative">
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
            <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Partner Portal.</h1>
            <p className="text-slate-500 font-medium text-lg">Secure access for verified experts.</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  required 
                  type="email" 
                  placeholder="name@taxsafar.com"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-bold text-slate-700">Access Key</label>
                <Link href="#" className="text-sm font-bold text-primary hover:underline">Forgot Key?</Link>
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
              <label htmlFor="remember" className="text-sm text-slate-600 font-medium cursor-pointer">Remember me on this station</label>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-slate-900 text-white font-bold rounded-[1.25rem] shadow-xl hover:bg-slate-800 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              <span>Partner Login</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="mt-10 p-6 bg-blue-50/50 rounded-[1.5rem] border border-blue-100 flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-primary flex-shrink-0">
               <Info size={20} />
            </div>
            <div>
               <p className="text-sm text-slate-700 font-bold mb-1">New Partner?</p>
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                 Join our network of 500+ tax professionals. <Link href="#" className="text-primary font-bold hover:underline underline-offset-2">Apply for verification</Link> to start your journey.
               </p>
            </div>
          </div>

          <div className="pt-8 mt-10 border-t border-slate-200 text-center">
            <p className="text-slate-500 font-bold">
              Not a partner?{" "}
              <Link href="/login" className="text-primary hover:underline ml-1">Switch to user login</Link>
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-2 text-slate-400 opacity-60">
             <ShieldCheck size={16} />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Authorized Access Only</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

