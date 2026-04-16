import React from "react";
import { FileText, Download, Filter, Search, MoreVertical } from "lucide-react";

export default function FilingsPage() {
  const filings = [
    { id: "FL-2023-01", name: "GST Return Q1", status: "Filed", date: "Oct 15, 2023", amount: "₹ 45,000" },
    { id: "FL-2023-02", name: "Income Tax Proofs", status: "Pending", date: "Nov 01, 2023", amount: "-" },
    { id: "FL-2023-03", name: "PF Registration", status: "Draft", date: "Nov 10, 2023", amount: "₹ 5,000" },
    { id: "FL-2023-04", name: "Annual Audit Report", status: "Filed", date: "Sep 28, 2023", amount: "₹ 1,20,000" },
    { id: "FL-2023-05", name: "TDS Return Q2", status: "Review", date: "Oct 20, 2023", amount: "₹ 12,500" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">My Filings</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Manage and track all your tax returns and compliance filings.</p>
        </div>
        <button className="px-5 py-2.5 bg-primary text-white rounded-xl font-bold shadow-md shadow-blue-500/20 hover:scale-105 transition-all text-sm whitespace-nowrap">
          + New Filing
        </button>
      </div>

      <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center bg-slate-100 px-4 py-2 rounded-xl border border-transparent focus-within:border-primary/30 w-full sm:w-80 group transition-all">
            <Search size={16} className="text-slate-400 group-focus-within:text-primary" />
            <input 
              type="text" 
              placeholder="Search filings..."
              className="bg-transparent border-none outline-none px-3 w-full text-sm font-semibold text-slate-900"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-100 transition-colors w-full sm:w-auto justify-center">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Filing ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Type / Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filings.map((filing, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm font-bold text-slate-600">{filing.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                        <FileText size={16} />
                      </div>
                      <span className="text-sm font-bold text-slate-900">{filing.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-500">{filing.date}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900">{filing.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${
                      filing.status === "Filed" ? "bg-green-50 text-green-700 border-green-200" :
                      filing.status === "Pending" ? "bg-amber-50 text-amber-700 border-amber-200" :
                      filing.status === "Review" ? "bg-purple-50 text-purple-700 border-purple-200" :
                      "bg-slate-100 text-slate-600 border-slate-200"
                    }`}>
                      {filing.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
                        <Download size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-lg hover:bg-slate-200 transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
