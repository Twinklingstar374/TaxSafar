import React from "react";
import { Folder, File, Upload, Search, Download, MoreVertical, FileText } from "lucide-react";

export default function DocumentsPage() {
  const folders = [
    { name: "ITR Returns", count: "12 files", color: "text-blue-500", bg: "bg-blue-50" },
    { name: "GST Invoices", count: "48 files", color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Company Registration", count: "5 files", color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Bank Statements", count: "24 files", color: "text-green-500", bg: "bg-green-50" },
  ];

  const recentFiles = [
    { name: "ITR_Acknowledgment_2022_23.pdf", size: "245 KB", date: "Oct 15, 2023" },
    { name: "GST_Certificate_Signed.pdf", size: "1.2 MB", date: "Sep 28, 2023" },
    { name: "Audit_Report_Final.docx", size: "3.4 MB", date: "Sep 20, 2023" },
    { name: "Q2_Expense_Sheet.xlsx", size: "45 KB", date: "Sep 15, 2023" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Document Vault</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Securely store and share all your compliance documents.</p>
        </div>
        <button className="flex items-center space-x-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl font-bold shadow-md hover:scale-105 transition-all text-sm whitespace-nowrap">
          <Upload size={16} />
          <span>Upload File</span>
        </button>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4 px-1">Folders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {folders.map((folder, idx) => (
            <div key={idx} className="bg-white p-5 rounded-[1.5rem] border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${folder.bg} ${folder.color}`}>
                <Folder size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{folder.name}</h3>
              <p className="text-xs font-semibold text-slate-400">{folder.count}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Recent Files</h2>
          <button className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>
        
        <div className="divide-y divide-slate-100">
          {recentFiles.map((file, idx) => (
            <div key={idx} className="p-4 px-6 flex items-center justify-between hover:bg-slate-50 transition-colors group cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{file.name}</p>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">{file.size}</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-xs font-medium text-slate-500 hidden sm:block">{file.date}</span>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 text-slate-400 hover:text-primary bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                    <Download size={14} />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm transition-colors">
                    <MoreVertical size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
