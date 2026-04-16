"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  LayoutDashboard, 
  FileText, 
  FolderOpen, 
  CreditCard, 
  ShieldCheck,
  Zap,
  Settings, 
  Search, 
  Bell, 
  User, 
  ChevronRight, 
  ArrowUpRight,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  Menu,
  X
} from "lucide-react";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    
    // Set initial state
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarLinks = [
    { name: "Overview", icon: <LayoutDashboard size={20} />, active: true },
    { name: "My Filings", icon: <FileText size={20} /> },
    { name: "Documents", icon: <FolderOpen size={20} /> },
    { name: "Payments", icon: <CreditCard size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  const stats = [
    { label: "Active Filings", value: "3", icon: <Clock className="text-blue-500" />, trend: "+1 this month" },
    { label: "Completed", value: "12", icon: <CheckCircle2 className="text-green-500" />, trend: "98% accuracy" },
    { label: "Pending Actions", value: "2", icon: <AlertCircle className="text-amber-500" />, trend: "Urgent" },
  ];

  const recentActivity = [
    { title: "GST Return Q1 Filed", time: "2 hours ago", status: "Success", type: "Filing" },
    { title: "Income Tax Proofs Uploaded", time: "5 hours ago", status: "Review", type: "Document" },
    { title: "Invoice #TS-2938 Paid", time: "Yesterday", status: "Success", type: "Payment" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 0, opacity: isSidebarOpen ? 1 : 0 }}
        className="bg-slate-900 text-white flex-shrink-0 relative z-30 hidden lg:flex flex-col border-r border-white/5 shadow-2xl overflow-hidden"
      >
        <div className="p-8">
           <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
                <span className="text-primary font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">Tax<span className="text-blue-200">Safar</span></span>
           </Link>
        </div>

        <nav className="flex-1 px-4 mt-4 space-y-1">
          {sidebarLinks.map((link, idx) => (
            <button 
              key={idx}
              className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 font-semibold ${
                link.active 
                  ? "bg-primary text-white shadow-lg shadow-blue-500/20" 
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
           <button className="w-full flex items-center space-x-3 px-4 py-4 rounded-2xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all font-semibold">
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
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
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
           {/* Welcome Banner */}
           <motion.div 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="mb-10 relative"
           >
              <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative group shadow-2xl shadow-slate-900/10">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
                 
                 <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight tracking-tight">Welcome to your Tax Cockpit, John!</h1>
                    <p className="text-slate-400 text-lg font-medium max-w-xl leading-relaxed">Everything is on track. You have <span className="text-blue-200 font-bold underline decoration-blue-500/50 underline-offset-4">2 actions</span> that require your attention today.</p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                       <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black shadow-lg hover:-translate-y-0.5 transition-all text-sm w-full sm:w-auto">
                          File Now
                       </button>
                       <button className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/20 transition-all text-sm w-full sm:w-auto">
                          View Timeline
                       </button>
                    </div>
                 </div>
              </div>
           </motion.div>

           {/* Stats Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
                >
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-primary/5 transition-colors border border-slate-100">
                         {React.cloneElement(stat.icon as React.ReactElement, { size: 24, strokeWidth: 2.5 })}
                      </div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.trend}</span>
                   </div>
                   <p className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-widest">{stat.label}</p>
                   <h3 className="text-4xl font-black text-slate-900">{stat.value}</h3>
                </motion.div>
              ))}
           </div>

           {/* Content Sections split */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="space-y-6">
                 <div className="flex justify-between items-center px-2">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">Recent Activity</h2>
                    <button className="text-sm font-bold text-primary hover:underline">View All</button>
                 </div>
                 <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
                    {recentActivity.map((activity, idx) => (
                      <div key={idx} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                         <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${
                               activity.status === "Success" ? "bg-green-50 text-green-600 border-green-100" : "bg-amber-50 text-amber-600 border-amber-100"
                            }`}>
                               {activity.type === "Filing" ? <FileText size={20} /> : activity.type === "Document" ? <FolderOpen size={20} /> : <CreditCard size={20} />}
                            </div>
                            <div>
                               <p className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors">{activity.title}</p>
                               <p className="text-xs font-bold text-slate-500 flex items-center">
                                  <Clock size={12} className="mr-1" />
                                  {activity.time}
                               </p>
                            </div>
                         </div>
                         <div className="flex items-center space-x-2">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                               activity.status === "Success" ? "bg-green-100 text-green-700 border-green-200" : "bg-amber-100 text-amber-700 border-amber-200"
                            }`}>
                               {activity.status}
                            </span>
                            <ChevronRight size={18} className="text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Service Cards / CTA */}
              <div className="space-y-6">
                 <h2 className="text-2xl font-black text-slate-900 tracking-tight px-2">Quick Services</h2>
                 <div className="grid grid-cols-2 gap-4">
                    <button className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group">
                       <div className="w-10 h-10 blue-gradient rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/20">
                          <Zap size={20} />
                       </div>
                       <p className="font-bold text-slate-900 mb-1">Instant GST</p>
                       <p className="text-xs text-slate-500 leading-relaxed font-medium">Fast registration in 24h</p>
                    </button>
                    <button className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group">
                       <div className="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/20">
                          <ShieldCheck size={20} />
                       </div>
                       <p className="font-bold text-slate-900 mb-1">Legal Advice</p>
                       <p className="text-xs text-slate-500 leading-relaxed font-medium">Expert legal consultation</p>
                    </button>
                    <div className="col-span-2 bg-primary/5 border border-primary/20 rounded-[2rem] p-8 mt-2 relative overflow-hidden group">
                       <div className="relative z-10 flex items-center justify-between">
                          <div>
                             <h4 className="text-xl font-bold text-primary mb-1 leading-tight">Expert Audit <br />Protection</h4>
                             <p className="text-xs text-slate-600 font-medium">Available in Premium Plan</p>
                             <button className="mt-4 px-6 py-2 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Upgrade</button>
                          </div>
                          <div className="w-24 h-24 text-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                             <LayoutDashboard size={96} />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
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
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-slate-900 text-white z-50 lg:hidden flex flex-col border-r border-white/5"
            >
              <div className="p-8 flex justify-between items-center">
                 <Link href="/" className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                      <span className="text-primary font-bold text-xl">T</span>
                    </div>
                    <span className="text-2xl font-bold tracking-tight">TaxSafar</span>
                 </Link>
                 <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                    <X size={24} />
                 </button>
              </div>
              <nav className="flex-1 px-4 mt-4 space-y-1">
                {sidebarLinks.map((link, idx) => (
                  <button 
                    key={idx}
                    className={`w-full flex items-center space-x-3 px-4 py-4 rounded-2xl transition-all duration-300 font-semibold ${
                      link.active 
                        ? "bg-primary text-white shadow-lg shadow-blue-500/20" 
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </button>
                ))}
              </nav>
              <div className="p-4 border-t border-white/5">
                 <button className="w-full flex items-center space-x-3 px-4 py-4 rounded-2xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all font-semibold">
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
