import React from 'react';
import { WizardStepProps } from '../../../types';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const StepSummary: React.FC<WizardStepProps> = ({ data, onNext, onBack }) => (
  <div className="space-y-8 animate-fade-in animate-slide-up">
    <div className="space-y-2 text-center mb-10">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tight">System Summary.</h2>
      <p className="text-gray-500 text-lg max-w-md mx-auto">Your technical architecture is locked and ready for deployment.</p>
    </div>

    <div className="bg-white rounded-[48px] p-12 space-y-12 border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full -mr-32 -mt-32" />
      
      <div className="grid grid-cols-2 gap-y-12 gap-x-12">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] block mb-2">Executive</label>
          <p className="font-bold text-gray-900 text-2xl tracking-tight">{data.fullName}</p>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] block mb-2">Organization</label>
          <p className="font-bold text-gray-900 text-2xl tracking-tight">{data.companyName}</p>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] block mb-2">Market Sector</label>
          <p className="font-bold text-gray-900 text-2xl tracking-tight">{data.industry}</p>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] block mb-2">Authority Level</label>
          <p className="font-bold text-gray-900 text-2xl tracking-tight">{data.controlLevel}</p>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-50">
        <label className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] block mb-6">Provisioning Queue</label>
        <div className="grid grid-cols-1 gap-4">
          {data.recommendations.map((rec, i) => (
            <div key={i} className="flex items-center gap-5 text-base font-bold text-gray-600 bg-gray-50/50 p-5 rounded-3xl border border-gray-100/50 group hover:bg-white hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <span className="flex-1">{rec.title}</span>
              <span className="text-[10px] font-bold text-gray-300 uppercase">{rec.tier}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex gap-4 mt-12">
      <button onClick={onBack} className="flex-1 p-5 border border-gray-100 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 transition-colors">
        Modify Architecture
      </button>
      <button 
        onClick={onNext}
        className="flex-[2] p-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-2xl shadow-gray-200 group"
      >
        Initialize Command Center <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);