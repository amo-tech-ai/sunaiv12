import React, { useEffect } from 'react';
import { WizardStepProps } from '../../../types';
import { INDUSTRIES } from '../../../constants';
import { User, Search, ChevronRight } from 'lucide-react';
import { analyzeBusinessSignals } from '../../../services/gemini';

export const StepBusinessContext: React.FC<WizardStepProps> = ({ data, updateData, onNext }) => {
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (data.description.length > 25) {
        const signals = await analyzeBusinessSignals(data.description, data.website);
        updateData({ marketSignals: signals });
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [data.description, data.website, updateData]);

  return (
    <div className="space-y-8 animate-fade-in animate-slide-up">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Business Context.</h2>
        <p className="text-gray-500 text-lg">Define the foundational identity of your AI ecosystem.</p>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              className="w-full p-5 pl-12 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-lg font-semibold bg-white shadow-sm"
              placeholder="e.g. Jane Doe"
              value={data.fullName}
              onChange={(e) => updateData({ fullName: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Organization Name</label>
          <input 
            type="text" 
            className="w-full p-5 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all text-lg font-semibold bg-white shadow-sm"
            placeholder="e.g. Acme Global"
            value={data.companyName}
            onChange={(e) => updateData({ companyName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Digital Presence (URL)</label>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              className="w-full p-5 pl-12 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all bg-white shadow-sm"
              placeholder="https://acme.ai"
              value={data.website}
              onChange={(e) => updateData({ website: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Industry Sector</label>
          <div className="relative">
            <select 
              className="w-full p-5 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-yellow-400 focus:outline-none bg-white font-bold text-gray-700 appearance-none cursor-pointer shadow-sm"
              value={data.industry}
              onChange={(e) => updateData({ industry: e.target.value })}
            >
              <option value="">Choose your sector</option>
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Operational Vision</label>
          <textarea 
            className="w-full p-5 border border-gray-100 rounded-2xl h-40 focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all resize-none bg-white font-medium shadow-sm"
            placeholder="Describe your current model, core value prop, and what you aim to automate."
            value={data.description}
            onChange={(e) => updateData({ description: e.target.value })}
          />
        </div>
      </div>

      <button 
        disabled={!data.fullName || !data.companyName || !data.industry || data.description.length < 20}
        onClick={onNext}
        className="w-full p-6 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xl shadow-gray-200 group mt-10"
      >
        Initialize Architecture <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};