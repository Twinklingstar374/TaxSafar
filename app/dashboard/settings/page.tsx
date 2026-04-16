import React from "react";
import { User, Building, Bell, Shield, Key } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">Account Settings</h1>
        <p className="text-sm font-medium text-slate-500 mt-1">Manage your profile, preferences, and security settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 shrink-0">
        <div className="md:col-span-1 space-y-2">
          <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white text-primary rounded-xl font-bold shadow-sm border border-slate-200 text-left transition-colors">
            <User size={18} />
            <span>Profile</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-bold text-left transition-colors">
            <Building size={18} />
            <span>Business Info</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-bold text-left transition-colors">
            <Bell size={18} />
            <span>Notifications</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-3 text-slate-500 hover:bg-slate-100 rounded-xl font-bold text-left transition-colors">
            <Shield size={18} />
            <span>Security</span>
          </button>
        </div>

        <div className="md:col-span-3 space-y-6">
          <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm p-6 sm:p-8">
            <h2 className="text-lg font-black text-slate-900 mb-6">Personal Information</h2>
            
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 overflow-hidden relative group cursor-pointer">
                <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Change</span>
                </div>
              </div>
              <div>
                <button className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-100 transition-colors">
                  Upload New Picture
                </button>
                <p className="text-xs text-slate-500 mt-2 font-medium">JPEG or PNG under 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">First Name</label>
                <input type="text" defaultValue="John" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Last Name</label>
                <input type="text" defaultValue="Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input type="email" defaultValue="john.doe@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Phone Number</label>
                <input type="tel" defaultValue="+91 98765 43210" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary font-semibold text-slate-900" />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold shadow-md shadow-blue-500/20 hover:scale-105 transition-all text-sm">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white rounded-[1.5rem] border border-slate-200 shadow-sm p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-50 text-amber-500 rounded-xl border border-amber-100">
                <Key size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">Two-Factor Authentication</h3>
                <p className="text-sm font-medium text-slate-500 mb-6">Add an extra layer of security to your account requiring a verification code upon login.</p>
                <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-slate-800 transition-colors">
                  Setup 2FA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
