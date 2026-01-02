import React from 'react';
import { WizardStepProps } from '../../../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const StepControlLevel: React.FC<WizardStepProps> = ({ data, updateData, onNext, onBack }) => (
  <div className="space-y-8 animate-fade-in animate-slide-up">
    <div className="space-y-2 text-center mb-10">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tight">System Autonomy.</h2>
      <p className="text-gray-500 text-lg max-w-md mx-auto">Calibrate the proactivity and decision-making authority of your AI workforce.</p>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {[
        { id: 'Assisted', label: 'Assisted Strategy', desc: 'AI acts as a technical co-pilot. Every strategic decision requires a human-in-the-loop checkpoint.' },
        { id: 'Proactive', label: 'Proactive Agent', desc: 'AI identifies and executes routine operational tasks, flagging specific anomalies for human review.' },
        { id: 'Advanced', label: 'Autonomous Intelligence', desc: 'Full agentic capabilities. System self-optimizes via code execution and weekly performance audits.' }
      ].map((opt) => (
        <button
          key={opt.id}
          onClick={() => updateData({ controlLevel: opt.id as any })}
          className={`p-8 border rounded-[32px] transition-all text-left space-y-3 group relative ${
            data.controlLevel === opt.id 
              ? 'border-yellow-400 bg-yellow-50/50 ring-1 ring-yellow-400 shadow-2xl' 
              : 'border-gray-100 hover:border-gray-300 bg-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="font-bold text-gray-900 text-2xl tracking-tight">{opt.label}</div>
            <div className={`w-4 h-4 rounded-full transition-all ${
              data.controlLevel === opt.id ? 'bg-yellow-400 animate-pulse shadow-lg shadow-yellow-300' : 'bg-gray-200'
            }`} />
          </div>
          <div className="text-gray-500 text-base leading-relaxed font-medium pr-10">{opt.desc}</div>
        </button>
      ))}
    </div>

    <div className="flex gap-4 mt-12">
      <button onClick={onBack} className="flex-1 p-5 border border-gray-100 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
        <ChevronLeft className="w-4 h-4" /> Back
      </button>
      <button 
        onClick={onNext}
        className="flex-[2] p-5 bg-yellow-400 text-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-100"
      >
        Technical Review <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);