"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequestCallModal from "@/components/RequestCallModal";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-primary/20 selection:text-primary">
      <Navbar onRequestCall={() => setIsModalOpen(true)} />
      
      {/* Contact Hero */}
      <section className="pt-40 pb-20 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              Let's get in touch.
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              Whether you need help with tax filing, company registration, or specialized financial advisory, our experts are ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us Direct</h3>
                <p className="text-slate-500 mb-4 font-medium text-sm">Available Mon-Sat, 10am to 7pm</p>
                <a href="tel:+919784818899" className="text-primary font-black text-lg hover:underline">+91 97848 18899</a>
              </div>

              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Support</h3>
                <p className="text-slate-500 mb-4 font-medium text-sm">We aim to reply within 2 hours</p>
                <a href="mailto:support@taxsafar.com" className="text-slate-900 font-bold hover:text-primary transition-colors">support@taxsafar.com</a>
              </div>

              <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 opacity-10">
                  <MessageSquare size={120} />
                </div>
                <h3 className="text-xl font-bold mb-2 relative z-10">Need quick answers?</h3>
                <p className="text-slate-400 mb-6 font-medium text-sm relative z-10">Request a callback and our executive will reach out instantly.</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors relative z-10"
                >
                  Request Callback
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl h-full">
                <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none block">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900 transition-all placeholder:font-medium placeholder:text-slate-400" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none block">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900 transition-all placeholder:font-medium placeholder:text-slate-400" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none block">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900 transition-all placeholder:font-medium placeholder:text-slate-400" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none block">Service Required</label>
                      <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900 transition-all appearance-none cursor-pointer">
                        <option value="GST">GST Registration & Filing</option>
                        <option value="ITR">Income Tax Return</option>
                        <option value="Company">Company Incorporation</option>
                        <option value="Other">Other Query</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none block">Message</label>
                      <textarea 
                        rows={4}
                        placeholder="How can we help you today?" 
                        className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900 transition-all resize-none placeholder:font-medium placeholder:text-slate-400" 
                      ></textarea>
                    </div>
                  </div>

                  <button 
                    type="button"
                    className="w-full py-4 blue-gradient text-white rounded-xl font-black shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all flex items-center justify-center mt-4"
                  >
                    <span>Send Message</span>
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
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
