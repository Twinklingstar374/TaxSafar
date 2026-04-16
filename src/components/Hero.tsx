"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Zap, BarChart3, Search, Phone } from "lucide-react";


interface HeroProps {
  onRequestCall: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRequestCall }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden section-bg-soft">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-[1.2] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8"
            >
              <Zap size={14} className="animate-pulse" />
              <span>India's Leading Compliance Partner</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6 md:mb-8 text-slate-900"
            >
              Scale Your <br />
              <span className="text-gradient">Business Faster.</span>
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-600 max-w-xl mb-12 leading-relaxed font-medium"
            >
              TaxSafar simplifies your compliance roadmap. Get expert support in ITR, GST, and business registrations while you focus on what matters: **Growth.**
            </motion.p>

            {/* Premium Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="relative max-w-xl lg:max-w-2xl mb-12 group mx-auto lg:mx-0"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-[2rem] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center bg-white border border-slate-200 p-2 rounded-2xl md:rounded-3xl shadow-sm group-focus-within:border-primary/50 group-focus-within:shadow-2xl transition-all duration-300">
                <div className="pl-4 md:pl-5 text-slate-400">
                  <Search size={20} className="md:w-[22px] md:h-[22px]" strokeWidth={2.5} />
                </div>
                <input 
                  type="text" 
                  placeholder="Need GST filing? Search services..."
                  className="w-full px-4 md:px-5 py-3 md:py-4 text-sm md:text-base text-slate-900 outline-none bg-transparent placeholder:text-slate-400 font-semibold"
                />
                <button className="px-6 md:px-8 py-3 md:py-4 blue-gradient text-white font-black rounded-xl md:rounded-[1.25rem] hidden sm:block shadow-lg shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Get Help
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-5"
            >
              <button 
                onClick={onRequestCall}
                className="px-8 md:px-10 py-4 md:py-5 blue-gradient text-white rounded-2xl md:rounded-[1.5rem] font-black shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center group w-full sm:w-auto justify-center"
              >
                <Phone size={18} className="md:w-5 md:h-5 mr-3" />
                Schedule Consultation
                <ChevronRight size={18} className="md:w-5 md:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 md:px-10 py-4 md:py-5 bg-white text-slate-900 rounded-2xl md:rounded-[1.5rem] font-bold hover:bg-slate-50 shadow-sm border border-slate-200 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto"
              >
                View Services
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 md:mt-16 flex items-center space-x-6 md:space-x-10 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 md:space-x-3 text-slate-400 transition-colors cursor-default group">
                 <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-primary/5 border border-slate-100 transition-all">
                    <ShieldCheck size={20} className="md:w-6 md:h-6 text-slate-400 group-hover:text-primary transition-colors" />
                 </div>
                 <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-500">Security</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 text-slate-400 transition-colors cursor-default group">
                 <div className="p-2 rounded-xl bg-slate-50 group-hover:bg-indigo-50 border border-slate-100 transition-all">
                    <BarChart3 size={20} className="md:w-6 md:h-6 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                 </div>
                 <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-slate-500">Reporting</span>
              </div>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 relative lg:block"
          >
            <div className="relative z-10 rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-premium-lg border-4 md:border-8 border-white group">
              <img
                src="/hero_authentic.png"
                alt="TaxSafar Hero"
                className="w-full h-auto object-cover transform scale-110 group-hover:scale-125 group-hover:rotate-1 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Premium Floating Cards - Hidden on mobile/tablet to keep clean */}
            <motion.div
              animate={{ y: [0, -25, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -right-6 glass p-4 rounded-[2rem] shadow-premium-lg z-20 hidden 2xl:block border-slate-100/50"
            >
              <img src="/screen_ui.png" alt="Compliance" className="h-16 w-auto" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-12 glass p-4 rounded-[2rem] shadow-premium-lg z-20 hidden 2xl:block border-slate-100/50"
            >
              <img src="/screen_call.png" alt="Trusted" className="h-16 w-auto" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


