"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Phone, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <main className="min-h-screen bg-white flex overflow-hidden">
      {/* Left Side: Immersive Visuals */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden"
      >
        <img 
          src="/login_bg.png" 
          alt="Modern financial growth" 
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
                 Join India's Most <span className="text-blue-400">Trusted</span> Tax Platform.
               </h2>
               <p className="text-xl text-slate-300 mb-12 max-w-lg leading-relaxed">
                 Start your journey towards stress-free compliance and financial clarity today.
               </p>
             </motion.div>

             <div className="space-y-4">
               {[
                 "Real-time Tax Planning",
                 "Expert-Led Filing Support",
                 "24/7 Compliance Monitoring"
               ].map((text, idx) => (
                 <div key={idx} className="flex items-center space-x-3 text-slate-200 font-semibold">
                   <div className="bg-primary/20 p-1 rounded-full">
                     <CheckCircle2 size={18} className="text-blue-400" />
                   </div>
                   <span>{text}</span>
                 </div>
               ))}
             </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-slate-300">
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">99%</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Success Rate</span>
             </div>
             <div className="w-px h-10 bg-white/10"></div>
             <div className="flex flex-col">
               <span className="text-2xl font-bold text-white">24/7</span>
               <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Support</span>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-50/50 relative overflow-y-auto">
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
          className="w-full max-w-md py-12"
        >
          <div className="mb-10 lg:text-left text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Register.</h1>
            <p className="text-slate-500 font-medium text-lg">Create your personalized tax cockpit.</p>
          </div>

          <form className="space-y-5" onSubmit={handleRegister}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  required 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Mobile Number</label>
              <div className="flex space-x-2">
                <div className="relative flex-1 group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                  <input 
                    required 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                  />
                </div>
                <button 
                  type="button"
                  className="px-5 py-3.5 bg-blue-50 text-primary font-bold rounded-[1.25rem] text-sm hover:bg-blue-100 transition-all border border-blue-100 whitespace-nowrap active:scale-95"
                >
                  OTP
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  required 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Create Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
                <input 
                  required 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-[1.25rem] focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="flex items-start space-x-3 ml-1 mb-2">
               <input type="checkbox" className="mt-1 w-4 h-4 rounded text-primary border-slate-300 focus:ring-primary" required />
               <p className="text-xs text-slate-500 leading-relaxed font-medium">
                 I agree to the <Link href="#" className="text-primary font-bold hover:underline">Terms</Link> and <Link href="#" className="text-primary font-bold hover:underline">Privacy Policy</Link>.
               </p>
            </div>

            <button 
              type="submit"
              className="w-full py-5 blue-gradient text-white font-bold rounded-[1.25rem] shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              <span>Create Account</span>
              <ArrowRight size={20} />
            </button>
          </form>

          <div className="pt-8 mt-10 border-t border-slate-200 text-center">
            <p className="text-slate-500 font-bold">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline ml-1">Log in here</Link>
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-2 text-slate-400">
             <ShieldCheck size={16} />
             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secured by 256-bit Encryption</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

