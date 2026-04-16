"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Target, Eye, ShieldCheck, CheckCircle2 } from "lucide-react";

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform width from 70% to 100% and scale from 0.9 to 1
  const width = useTransform(scrollYProgress, [0.1, 0.4], ["70%", "100%"]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.4], ["4rem", "0rem"]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  React.useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(err => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
        >
          <ShieldCheck size={12} />
          <span>The Interior Portal Preview</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6"
        >
          The Future of Compliance <br />
          <span className="text-gradient">Starts From Within.</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
        >
          More than just a service, we provide a sophisticated "Financial Cockpit" where you manage your entire compliance roadmap in real-time.
        </motion.p>
      </div>

      {/* Interactive Video/Preview Container */}
      <div className="relative w-full flex justify-center mb-32">
        <motion.div 
          style={{ width, scale, borderRadius }}
          className="relative aspect-video max-w-[1400px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-slate-900 border border-slate-800 group"
        >
          <video 
            ref={videoRef}
            src="/dashboard_preview.mp4" 
            poster="/dashboard_preview.png"
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-80 transition-opacity duration-1000 transform scale-105"
          />
          
          {/* Dashboard Glass Overlay Elements */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white z-10 pointer-events-none">
             <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-2">Internal Dashboard</p>
                <h3 className="text-2xl font-black">Next-Gen Tax Automation</h3>
             </div>
             <div className="hidden md:block">
                <div className="flex -space-x-3 mb-2">
                   {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                     </div>
                   ))}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Trusted by 50k+ Users</p>
             </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-slate-900 mb-8">Our Heritage & Expertise</h3>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              TaxSafar was built on the foundation of transparency and professional expertise. We've replaced traditional, slow consultancy with a digital-first approach that keeps you in command.
            </p>
            
            <div className="space-y-6">
              {[
                "Certified by leading global compliance bodies",
                "Dedicated team of CA and Legal Consultants",
                "Advanced 256-bit encryption for data security",
                "24/7 Priority support for enterprise partners"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-4">
                   <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-primary" />
                   </div>
                   <span className="text-slate-700 font-bold">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 transition-transform group-hover:rotate-6">
                <Target size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">Our Mission</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                To democratize expert tax advice and make compliance a competitive advantage for every business in India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-premium-lg transition-all group lg:translate-y-8"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-500 mb-6 transition-transform group-hover:-rotate-6">
                <Eye size={28} />
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-4">Our Vision</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Building the digital backbone of India's economy, where every transaction is seamless and compliant.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
