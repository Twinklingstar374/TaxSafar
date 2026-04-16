"use client";

import React from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Twitter = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Facebook = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/#about" },
      { name: "Services", href: "/#services" },
      { name: "Expert Portal", href: "/partner-login" },
      { name: "Careers", href: "#" },
    ],
    services: [
      { name: "GST Filing", href: "#" },
      { name: "Income Tax", href: "#" },
      { name: "Registrations", href: "#" },
      { name: "Accounting", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white shadow-xl rounded-xl flex items-center justify-center border border-slate-100 transition-transform group-hover:rotate-12">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">Tax<span className="text-primary">Safar</span></span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
              India's premier digital cockpit for tax compliance and financial growth. Empowering 50k+ clients with expert-led tax solutions.
            </p>
            <div className="flex items-center space-x-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary hover:-translate-y-1 transition-all shadow-sm">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-1 hidden lg:block"></div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors flex items-center group">
                      {link.name}
                      <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Services</h4>
              <ul className="space-y-4 text-sm font-bold text-slate-500">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-primary transition-colors flex items-center group">
                      {link.name}
                      <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Stay Updated</h4>
              <p className="text-xs text-slate-500 font-medium mb-4 leading-relaxed">Join our weekly newsletter for tax insights and compliance updates.</p>
              <div className="space-y-3">
                 <div className="relative group">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-primary/5 focus:border-primary outline-none transition-all"
                    />
                    <button className="absolute right-2 top-1.5 p-1.5 bg-primary text-white rounded-lg shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                       <ArrowRight size={14} />
                    </button>
                 </div>
                 <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <ShieldCheck size={12} className="text-green-500" />
                    <span>Spam-free • Secure</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-bold text-slate-400">
              <div className="flex items-center space-x-2">
                 <MapPin size={16} />
                 <span>Head Office: New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                 <Phone size={16} />
                 <span>+91 (0) 11 4050 6070</span>
              </div>
           </div>
           <p className="text-sm font-bold text-slate-400">
              © {currentYear} TaxSafar Platforms Pvt Ltd. All rights reserved.
           </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10 translate-y-1/2 translate-x-1/2"></div>
    </footer>
  );
};

export default Footer;
