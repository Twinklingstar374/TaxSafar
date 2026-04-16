import React from "react";
import { 
  FileText, 
  FolderOpen, 
  CreditCard, 
  ShieldCheck,
  Zap,
  ChevronRight, 
  Clock,
  CheckCircle2,
  AlertCircle,
  LayoutDashboard,
  LucideIcon
} from "lucide-react";

type StatItem = {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  trend: string;
};

export default function DashboardOverview() {
  const stats: StatItem[] = [
    { label: "Active Filings", value: "3", icon: Clock, color: "text-blue-500", trend: "+1 this month" },
    { label: "Completed", value: "12", icon: CheckCircle2, color: "text-green-500", trend: "98% accuracy" },
    { label: "Pending Actions", value: "2", icon: AlertCircle, color: "text-amber-500", trend: "Urgent" },
  ];

  const recentActivity = [
    { title: "GST Return Q1 Filed", time: "2 hours ago", status: "Success", type: "Filing" },
    { title: "Income Tax Proofs Uploaded", time: "5 hours ago", status: "Review", type: "Document" },
    { title: "Invoice #TS-2938 Paid", time: "Yesterday", status: "Success", type: "Payment" },
  ];

  return (
    <>
      <div className="mb-10 bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
         <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-black mb-3 text-slate-900 tracking-tight">Welcome back, John</h1>
            <p className="text-slate-500 text-lg font-medium max-w-xl">
              Your compliance status is looking good. You have <span className="text-primary font-bold">2 actions</span> pending today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
               <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-blue-500/20 hover:scale-105 transition-all text-sm w-full sm:w-auto">
                  File Return Now
               </button>
               <button className="px-6 py-3 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold hover:bg-slate-100 transition-all text-sm w-full sm:w-auto">
                  View Timeline
               </button>
            </div>
         </div>
         <div className="hidden md:flex items-center justify-center p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
            <ShieldCheck size={100} className="text-primary" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
         {stats.map((stat, idx) => {
           const Icon = stat.icon;
           return (
             <div 
               key={idx}
               className="bg-white p-6 md:p-8 rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-md transition-all group"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 group-hover:border-primary/20 transition-colors">
                      <Icon size={24} strokeWidth={2.5} className={stat.color} />
                   </div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.trend}</span>
                </div>
                <p className="text-xs font-bold text-slate-400 mb-1 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-black text-slate-900">{stat.value}</h3>
             </div>
           );
         })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
               <h2 className="text-xl font-black text-slate-900 tracking-tight">Recent Activity</h2>
               <button className="text-sm font-bold text-primary hover:underline">View All</button>
            </div>
            <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
               {recentActivity.map((activity, idx) => (
                 <div key={idx} className="p-5 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                    <div className="flex items-center space-x-4">
                       <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
                          activity.status === "Success" ? "bg-green-50 text-green-600 border-green-100" : "bg-amber-50 text-amber-600 border-amber-100"
                       }`}>
                          {activity.type === "Filing" ? <FileText size={20} /> : activity.type === "Document" ? <FolderOpen size={20} /> : <CreditCard size={20} />}
                       </div>
                       <div>
                          <p className="text-sm font-bold text-slate-900">{activity.title}</p>
                          <p className="text-xs font-medium text-slate-500 mt-0.5 flex items-center">
                             <Clock size={12} className="mr-1" />
                             {activity.time}
                          </p>
                       </div>
                    </div>
                    <div className="flex items-center space-x-3">
                       <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${
                          activity.status === "Success" ? "bg-green-50 text-green-700 border-green-200" : "bg-amber-50 text-amber-700 border-amber-200"
                       }`}>
                          {activity.status}
                       </span>
                    </div>
                 </div>
               ))}
            </div>
         </div>

         <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight px-2">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
               <button className="bg-white p-5 rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all text-left">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 border border-primary/20">
                     <Zap size={20} />
                  </div>
                  <p className="font-bold text-slate-900 text-sm mb-1">Instant GST</p>
                  <p className="text-xs text-slate-500 font-medium">Fast registration in 24h</p>
               </button>
               <button className="bg-white p-5 rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all text-left">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 mb-4 border border-indigo-100">
                     <ShieldCheck size={20} />
                  </div>
                  <p className="font-bold text-slate-900 text-sm mb-1">Legal Advice</p>
                  <p className="text-xs text-slate-500 font-medium">Expert consultation</p>
               </button>
               <div className="col-span-2 bg-slate-900 rounded-[1.5rem] p-6 mt-2 relative overflow-hidden flex items-center justify-between">
                  <div className="relative z-10">
                     <h4 className="text-lg font-bold text-white mb-1">Tax Audit Protection</h4>
                     <p className="text-xs text-slate-400 font-medium mb-4">Included in Premium Plan only.</p>
                     <button className="px-5 py-2 bg-white text-slate-900 rounded-lg text-xs font-bold shadow-sm hover:bg-slate-100 transition-colors">
                       Upgrade Plan
                     </button>
                  </div>
                  <div className="opacity-20 text-white mr-4">
                     <LayoutDashboard size={80} />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
