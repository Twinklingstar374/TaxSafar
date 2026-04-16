"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { services } from "../data/services";

interface NavbarProps {
  onRequestCall: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onRequestCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg border-b border-slate-200 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group h-10 w-auto">
            <img 
              src="/original_logo.png" 
              alt="TaxSafar Logo" 
              className="h-full w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium hover:text-primary transition-colors relative group ${
                  isScrolled ? "text-slate-600" : "text-slate-700"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button
                className={`flex items-center text-sm font-medium hover:text-primary transition-colors relative group pt-2 pb-2 ${
                    isScrolled ? "text-slate-600" : "text-slate-700"
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className="ml-1" />
                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-10 -left-1/2 w-[600px] bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-100 overflow-hidden grid grid-cols-2 p-4 gap-2"
                  >
                    {services.map((service, idx) => (
                       <Link
                         key={idx}
                         href={`/services/${service.slug}`}
                         className="flex items-start p-3 hover:bg-slate-50 rounded-xl transition-colors group"
                         onClick={() => setDesktopServicesOpen(false)}
                       >
                         <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                            <service.icon size={20} />
                         </div>
                         <div className="ml-4">
                            <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{service.title}</p>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{service.description}</p>
                         </div>
                       </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className={`text-sm font-medium hover:text-primary transition-colors relative group ${
                  isScrolled ? "text-slate-600" : "text-slate-700"
              }`}
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium hover:text-primary transition-colors relative group ${
                  isScrolled ? "text-slate-600" : "text-slate-700"
              }`}
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-8 ml-2">
              <Link
                href="/login"
                className="text-sm font-bold text-slate-700 hover:text-primary transition-colors"
              >
                Login
              </Link>
              <button
                onClick={onRequestCall}
                className="px-6 py-2.5 blue-gradient text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
              >
                <Phone size={14} className="mr-2" />
                Request a Call
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding Drawer) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] sm:w-[70%] md:w-[60%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <Link href="/" className="flex items-center space-x-2 h-8 w-auto" onClick={() => setIsMobileMenuOpen(false)}>
                  <img 
                    src="/original_logo.png" 
                    alt="TaxSafar Logo" 
                    className="h-full w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-900"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8">
                <nav className="space-y-4">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    Home
                  </Link>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button 
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                    >
                      <span>Services</span>
                      <ChevronDown size={20} className={`transform transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 space-y-3 pl-4 border-l border-slate-100 ml-2 mt-2">
                             {services.map((svc, idx) => (
                               <Link
                                 key={idx}
                                 href={`/services/${svc.slug}`}
                                 onClick={() => setIsMobileMenuOpen(false)}
                                 className="block font-semibold text-slate-600 hover:text-primary"
                               >
                                 {svc.title}
                               </Link>
                             ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-xl font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                </nav>

                <div className="mt-12 space-y-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-1">Accounts</p>
                  <div className="grid grid-cols-2 gap-3">
                     <Link
                      href="/login"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-3 bg-slate-50 text-slate-900 rounded-2xl text-center font-bold text-sm border border-slate-100"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-3 bg-primary text-white rounded-2xl text-center font-bold text-sm shadow-md"
                    >
                      Register
                    </Link>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <button
                    onClick={() => { onRequestCall(); setIsMobileMenuOpen(false); }}
                    className="w-full py-4 blue-gradient text-white rounded-2xl text-center font-bold shadow-lg shadow-blue-500/20"
                  >
                    Request a Call Back
                  </button>
                  <Link
                    href="/partner-login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full py-3 text-primary text-center font-bold text-sm hover:underline"
                  >
                    Partner Login Portal
                  </Link>
                </div>
              </div>

              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <div className="flex items-center space-x-4 text-slate-500">
                  <Mail size={16} />
                  <span className="text-sm font-medium">support@taxsafar.com</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
