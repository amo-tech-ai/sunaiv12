import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

interface LeftSidebarProps {
  step: number;
}

export const WizardLeftSidebar: React.FC<LeftSidebarProps> = ({ step }) => (
  <div className="space-y-12 animate-fade-in">
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">Onboarding.</h3>
      <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Phase {step} of 5</p>
    </div>

    <div className="space-y-6">
      {[
        "Identity & Context", 
        "Strategic Purpose", 
        "Strategic Roadmap", 
        "System Autonomy", 
        "Review & Seal"
      ].map((s, i) => (
        <div key={i} className="flex items-center gap-4 group">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${
            step > i + 1 ? 'bg-green-100 text-green-600' : 
            step === i + 1 ? 'bg-gray-900 text-white shadow-lg shadow-gray-200' : 
            'bg-gray-50 text-gray-300'
          }`}>
            {step > i + 1 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
          </div>
          <span className={`text-[13px] font-bold transition-all duration-500 ${step === i + 1 ? 'text-gray-900' : 'text-gray-400'}`}>{s}</span>
        </div>
      ))}
    </div>

    <div className="pt-12">
      <div className="p-6 bg-white rounded-[24px] border border-gray-100 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-gray-900 font-bold text-[10px] uppercase tracking-widest">
          <ShieldCheck className="w-3 h-3 text-yellow-500" /> Protocol
        </div>
        <p className="text-[10px] text-gray-400 leading-relaxed font-medium">
          Blueprint data is siloed and encrypted. No public model training.
        </p>
      </div>
    </div>
  </div>
);