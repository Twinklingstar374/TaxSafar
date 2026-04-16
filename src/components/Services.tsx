"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Search, 
  Briefcase, 
  Building2, 
  Scale, 
  Calculator, 
  CircleDollarSign, 
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";

const services = [
  {
    title: "Return Filing",
    description: "Expert-led GST, Income Tax, and TDS filing ensuring 100% compliance with current laws.",
    icon: FileText,
    color: "blue",
    featured: true
  },
  {
    title: "Assessment & Resolution",
    description: "Professional handling of tax notices and audit representations with result-oriented strategies.",
    icon: Search,
    color: "indigo",
  },
  {
    title: "Registrations",
    description: "Start-to-finish support for Company Incorporation, GST, Trademarks, and MSME setups.",
    icon: Briefcase,
    color: "blue",
  },
  {
    title: "Virtual Office",
    description: "Premium professional addresses for GST & MCA registrations with instant digital setup.",
    icon: Building2,
    color: "indigo",
  },
  {
    title: "CFO Consultancy",
    description: "Financial structuring, advisory, and end-to-end strategic legal support for startups.",
    icon: Scale,
    color: "blue",
  },
  {
    title: "Cloud Accounting",
    description: "Next-gen bookkeeping with real-time reports and secure data vault integration.",
    icon: Calculator,
    color: "indigo",
  },
  {
    title: "Capital Assistance",
    description: "Documentation and advisory for Business, Home, and Personal loans via banking partners.",
    icon: CircleDollarSign,
    color: "blue",
  },
  {
    title: "Wealth Advisory",
    description: "Tax-efficient investment strategies and portfolio guidance for sustainable growth.",
    icon: TrendingUp,
    color: "indigo",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-6"
          >
            <Zap size={12} className="text-blue-500" />
            <span>Our Service Catalog</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6"
          >
            Professional Solutions <br />
            <span className="text-gradient">For Modern Business.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 font-medium"
          >
            Explore our range of tech-driven compliance services designed to scale with your ambitions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`group p-8 rounded-[2.5rem] border transition-all duration-500 relative flex flex-col ${
                service.featured 
                  ? "bg-white border-primary/20 shadow-premium-lg ring-1 ring-primary/5" 
                  : "bg-white/50 border-slate-100 hover:bg-white hover:border-white hover:shadow-premium-lg"
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 ${
                service.color === "blue" 
                  ? "bg-blue-50 text-blue-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6" 
                  : "bg-indigo-50 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white group-hover:rotate-6"
              }`}>
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {service.title}
              </h3>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-50 group-hover:border-primary/10 transition-colors">
                <button className="flex items-center text-xs font-black text-slate-400 group-hover:text-primary transition-all">
                  Full Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                {service.featured && (
                   <span className="text-[9px] font-black uppercase text-primary bg-primary/5 px-2 py-1 rounded-md">Popular</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-slate-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                 <h4 className="text-2xl md:text-3xl font-black text-white mb-3">Can't find what you're looking for?</h4>
                 <p className="text-slate-400 font-medium">Our experts handle customized compliance requests for enterprises.</p>
              </div>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:-translate-y-1 active:scale-95 transition-all text-sm whitespace-nowrap">
                 Connect With Expert
              </button>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
