"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import RequestCallModal from "@/components/RequestCallModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar onRequestCall={() => setIsModalOpen(true)} />
      <Hero onRequestCall={() => setIsModalOpen(true)} />
      <Stats />
      <Services />
      <AboutUs />
      <Footer />
      
      <RequestCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </main>
  );
}

