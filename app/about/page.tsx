"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import Stats from "@/components/Stats";
import RequestCallModal from "@/components/RequestCallModal";
import { motion } from "framer-motion";
import { Users, Award, Shield, MapPin } from "lucide-react";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-primary/20 selection:text-primary">
      <Navbar onRequestCall={() => setIsModalOpen(true)} />
      
      {/* About Hero */}
      <section className="pt-40 pb-20 overflow-hidden relative bg-slate-900 border-b-8 border-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
              Simplifying compliance, boosting profits.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-medium mx-auto max-w-2xl">
              TaxSafar is India's leading tech-driven consultancy helping your business run smarter, faster, and 100% compliant.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Embedded Existing About Component */}
      <div className="py-20 bg-white">
        <AboutUs />
      </div>

      <div className="bg-slate-50 py-10 border-y border-slate-200">
        <Stats />
      </div>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">We believe in building trust through transparency, expertise, and unstoppable technology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Data Security", desc: "Your financial data is encrypted and protected with bank-grade security protocols." },
              { icon: Users, title: "Client First", desc: "Every strategy we build starts with understanding your specific business needs." },
              { icon: Award, title: "Expertise", desc: "Our team consists of certified CAs, CSs, and top-tier financial advisors." },
              { icon: MapPin, title: "Pan-India Reach", desc: "Providing virtual and physical compliance support to businesses across all 28 states." }
            ].map((value, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <RequestCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}
