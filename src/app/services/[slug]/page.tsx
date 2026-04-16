"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestCallModal from "@/components/RequestCallModal";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the requested service
  const service = services.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  const benefits = [
    "Dedicated Expert Support",
    "100% Tax Compliant Strategy",
    "Streamlined Digital Process",
    "Predictable & Transparent Pricing"
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative selection:bg-primary/20 selection:text-primary">
      <Navbar onRequestCall={() => setIsModalOpen(true)} />
      
      {/* Service Hero */}
      <section className="pt-40 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl border border-slate-100 mb-8 transform -rotate-3">
                <Icon size={32} />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                {service.title} <span className="text-primary italic">Services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                {service.description} Get started with India's most trusted digital compliance cockpit today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 blue-gradient text-white rounded-xl font-black shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center"
                >
                  Consult an Expert
                  <ArrowRight size={18} className="ml-2" />
                </button>
                <Link 
                  href="/login"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center justify-center"
                >
                  Dashboard Access
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative z-10">
                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Why choose TaxSafar for {service.title}?</h3>
                <div className="space-y-6">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100">
                        <CheckCircle2 size={16} className="text-green-500" />
                      </div>
                      <span className="text-slate-700 font-bold text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm font-medium text-slate-500 italic">"The process for {service.title} was so smooth, my return was filed within 24 hours of submitting the docs through the portal."</p>
                  <p className="text-xs font-bold text-slate-900 mt-3">— Happy Client (Rated 4.8/5 on Google)</p>
                </div>
              </div>
              
              {/* Decorative background shapes */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlNWFlN2UiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-50 z-0 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Ready to streamline your {service.title}?</h2>
          <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">Create a free account to access your cockpit and track the status of your applications in real-time.</p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold shadow-xl hover:-translate-y-1 transition-all"
          >
            Get Free Consultation
          </button>
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
