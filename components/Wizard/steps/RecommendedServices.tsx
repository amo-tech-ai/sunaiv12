import React from 'react';
import { WizardStepProps } from '../../../types';
import { Sparkles, Activity, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export const StepRecommendedServices: React.FC<WizardStepProps> = ({ data, onNext, onBack, loading }) => (
  <div className="space-y-10 animate-fade-in animate-slide-up">
    <div className="space-y-3 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 text-yellow-700 rounded-full font-bold text-[10px] uppercase tracking-[0.2em] mb-4 border border-yellow-200">
        <Sparkles className="w-3 h-3" /> Architecture Finalized
      </div>
      <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Your Digital Workforce.</h2>
      <p className="text-gray-500 text-lg max-w-md mx-auto">Strategic AI systems designed to operate within your unique business parameters.</p>
    </div>

    <div className="space-y-6">
      {loading ? (
        Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-48 bg-white border border-gray-50 animate-pulse rounded-[40px] p-10 flex flex-col gap-4">
             <div className="w-1/4 h-5 bg-gray-100 rounded" />
             <div className="w-full h-12 bg-gray-50 rounded" />
             <div className="w-1/2 h-4 bg-gray-50 rounded mt-4" />
          </div>
        ))
      ) : (
        data.recommendations.map((rec, i) => (
          <div key={i} className="p-10 border border-gray-100 rounded-[40px] bg-white shadow-sm hover:shadow-2xl transition-all duration-700 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-gray-900 text-2xl tracking-tight group-hover:text-yellow-600 transition-colors">{rec.title}</h3>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                rec.tier === 'Core' ? 'bg-gray-100 text-gray-500' : 'bg-gray-900 text-yellow-400 shadow-lg'
              }`}>
                {rec.tier}
              </span>
            </div>
            <p className="text-base text-gray-500 leading-relaxed font-medium mb-8 pr-10">{rec.description}</p>
            <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block mb-2">Primary Impact</span>
                <span className="text-gray-900 font-bold text-lg flex items-center gap-2">
                  <Activity className="w-4 h-4 text-yellow-500" /> {rec.impact}
                </span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-yellow-400 group-hover:text-white transition-all">
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))
      )}
    </div>

    <div className="flex gap-4 pt-8">
      <button onClick={onBack} className="flex-1 p-5 border border-gray-100 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back
      </button>
      <button 
        onClick={onNext}
        className="flex-[2] p-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 shadow-2xl shadow-gray-200"
      >
        Autonomy Settings <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);