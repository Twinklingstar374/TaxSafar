"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Building, ShieldCheck, Award } from "lucide-react";

const stats = [
  { 
    label: "Active Clients", 
    value: "50k+", 
    icon: <Users size={20} />, 
    description: "Trusted across India" 
  },
  { 
    label: "Expert Consultants", 
    value: "500+", 
    icon: <Building size={20} />, 
    description: "Verified Professionals" 
  },
  { 
    label: "Success Rate", 
    value: "99.9%", 
    icon: <ShieldCheck size={20} />, 
    description: "Compliant Filings" 
  },
  { 
    label: "Experience", 
    value: "15+ Yrs", 
    icon: <Award size={20} />, 
    description: "Industry Leadership" 
  },
];

const Stats = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-blue-500/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">{stat.value}</h3>
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-blue-400 mb-2">{stat.label}</p>
              <p className="text-xs text-slate-500 font-medium">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
