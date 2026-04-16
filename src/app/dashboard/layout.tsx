"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  CreditCard, 
  Settings, 
  Search, 
  Bell, 
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinks = [
    { name: "Overview", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "My Filings", href: "/dashboard/filings", icon: <FileText size={20} /> },
    { name: "Documents", href: "/dashboard/documents", icon: <FolderOpen size={20} /> },
    { name: "Payments", href: "/dashboard/payments", icon: <CreditCard size={20} /> },
    { name: "Settings", href: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      {/* Sidebar - Clean Fintech White */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="bg-white text-slate-600 flex-shrink-0 relative z-30 hidden lg:flex flex-col border-r border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-8">
           <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:rotate-12">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">Tax<span className="text-primary">Safar</span></span>
           </Link>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-2">
          {sidebarLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={idx}
                href={link.href}
                className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-semibold ${
                  isActive 
                    ? "bg-primary/5 text-primary" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className={`${isActive ? "text-primary" : "text-slate-400"}`}>
                  {link.icon}
                </div>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
           <button className="w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all font-semibold">
              <LogOut size={20} />
              <span>Sign Out</span>
           </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 max-h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
           <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500"
              >
                <Menu size={24} />
              </button>
              <div className="hidden md:flex items-center bg-slate-100 px-4 py-2.5 rounded-2xl border border-transparent focus-within:border-primary/30 focus-within:bg-white focus-within:ring-4 focus-within:ring-primary/5 transition-all w-80 group">
                 <Search size={18} className="text-slate-400 group-focus-within:text-primary" />
                 <input 
                   type="text" 
                   placeholder="Search filings or docs..."
                   className="bg-transparent border-none outline-none px-3 w-full text-sm font-semibold text-slate-900"
                 />
              </div>
           </div>

           <div className="flex items-center space-x-4">
              <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 relative">
                 <Bell size={20} />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
              </button>
              <div className="h-10 w-px bg-slate-200 mx-2"></div>
              <button className="flex items-center space-x-3 p-1.5 pr-4 hover:bg-slate-100 rounded-2xl transition-all group border border-slate-100">
                 <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-sm overflow-hidden">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-full h-full object-cover" />
                 </div>
                 <div className="text-left hidden sm:block">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">John Doe</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">Standard Plan</p>
                 </div>
              </button>
           </div>
        </header>

        {/* Dynamic Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 scroll-smooth">
           {children}
        </div>
      </main>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white text-slate-600 z-50 lg:hidden flex flex-col border-r border-slate-200 shadow-xl"
            >
              <div className="p-8 flex justify-between items-center">
                 <Link href="/" className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-900">TaxSafar</span>
                 </Link>
                 <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
                    <X size={24} />
                 </button>
              </div>
              <nav className="flex-1 px-4 mt-4 space-y-2">
                {sidebarLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={idx}
                      href={link.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-semibold ${
                        isActive 
                          ? "bg-primary/5 text-primary" 
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <div className={`${isActive ? "text-primary" : "text-slate-400"}`}>
                        {link.icon}
                      </div>
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
              <div className="p-4 border-t border-slate-100">
                 <button className="w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all font-semibold">
                    <LogOut size={20} />
                    <span>Sign Out</span>
                 </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
