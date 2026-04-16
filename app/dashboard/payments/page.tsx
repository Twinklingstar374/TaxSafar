import React from "react";
import { CreditCard, DollarSign, Download, ArrowUpRight, ArrowDownRight, FileText } from "lucide-react";

export default function PaymentsPage() {
  const transactions = [
    { id: "TX-9923", desc: "GST Annual Filing Fee", date: "Oct 15, 2023", amount: "₹ 4,500", status: "Completed", type: "out" },
    { id: "TX-9922", desc: "Refund: TDS Excess", date: "Oct 01, 2023", amount: "₹ 12,000", status: "Completed", type: "in" },
    { id: "TX-9921", desc: "Company Reg. Retainer", date: "Sep 28, 2023", amount: "₹ 15,000", status: "Completed", type: "out" },
    { id: "TX-9920", desc: "Consultation Call", date: "Sep 20, 2023", amount: "₹ 1,500", status: "Pending", type: "out" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Payments & Billing</h1>
        <p className="text-sm font-medium text-slate-500 mt-1">Manage invoices, subscriptions, and payment history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary rounded-[1.5rem] p-8 text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
          <p className="text-blue-100 font-medium mb-1 text-sm">Outstanding Balance</p>
          <h2 className="text-4xl font-black mb-6">₹ 1,500.00</h2>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 bg-white text-primary rounded-xl font-bold text-sm hover:scale-105 transition-transform">
              Pay Now
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[1.5rem] border border-slate-200 p-8 shadow-sm flex flex-col justify-center">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">Payment Methods</h3>
            <button className="text-xs font-bold text-primary uppercase tracking-widest">+ Add New</button>
          </div>
          <div className="flex items-center space-x-4 p-4 border border-slate-100 bg-slate-50 rounded-xl">
            <div className="w-12 h-8 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-black italic">VISA</div>
            <div className="flex-1">
              <p className="text-sm font-bold text-slate-900">•••• •••• •••• 4242</p>
              <p className="text-xs font-medium text-slate-500">Expires 12/25</p>
            </div>
            <span className="text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded">Default</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Transaction History</h2>
        </div>
        
        <div className="divide-y divide-slate-100">
          {transactions.map((tx, idx) => (
            <div key={idx} className="p-4 px-6 flex items-center justify-between hover:bg-slate-50 transition-colors group">
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'in' ? 'bg-green-50 text-green-500' : 'bg-slate-100 text-slate-600'}`}>
                  {tx.type === 'in' ? <ArrowDownRight size={18} /> : <ArrowUpRight size={18} />}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{tx.desc}</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">{tx.date} • {tx.id}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-right">
                  <p className={`text-sm font-bold ${tx.type === 'in' ? 'text-green-600' : 'text-slate-900'}`}>{tx.type === 'in' ? '+' : '-'}{tx.amount}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{tx.status}</p>
                </div>
                <button className="p-2 text-slate-400 hover:text-primary bg-white border border-slate-200 rounded-lg shadow-sm transition-colors opacity-0 group-hover:opacity-100">
                  <FileText size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
