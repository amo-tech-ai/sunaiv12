import React, { useEffect, useState } from 'react';
import { WizardStepProps } from '../../../types';
import { SYSTEM_TYPES, GOALS, GOAL_ICONS } from '../../../constants';
import { CheckCircle2, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

export const StepStrategicPurpose: React.FC<WizardStepProps> = ({ data, updateData, onNext, onBack }) => {
  const [followup, setFollowup] = useState('');

  const toggleGoal = (id: string) => {
    const goals = data.goals.includes(id) 
      ? data.goals.filter(g => g !== id)
      : data.goals.length < 3 ? [...data.goals, id] : data.goals;
    updateData({ goals });
  };

  useEffect(() => {
    if (data.goals.includes('revenue')) {
      setFollowup("For growth-focused companies: Is response speed critical to winning new deals?");
    } else if (data.goals.includes('time')) {
      setFollowup("For efficiency-focused teams: Which manual process causes the most friction today?");
    } else {
      setFollowup('');
    }
  }, [data.goals]);

  return (
    <div className="space-y-10 animate-fade-in animate-slide-up pb-20">
      <div className="space-y-2">
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Define your system’s purpose</h2>
        <p className="text-gray-500 text-lg">Choose the type of system you’re building and the business results it should deliver.</p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-yellow-400 rounded-full" />
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Section A: Select System archetype</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {SYSTEM_TYPES.map((type) => (
            <button
              key={type.id}
              onClick={() => updateData({ systemType: type.id })}
              className={`flex items-start gap-5 p-6 border rounded-[28px] transition-all text-left relative overflow-hidden group ${
                data.systemType === type.id 
                  ? 'border-yellow-400 bg-yellow-50/30 ring-1 ring-yellow-400 shadow-xl' 
                  : 'border-gray-100 hover:border-gray-200 bg-white'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                data.systemType === type.id ? 'bg-yellow-400 text-white shadow-lg' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
              }`}>
                {type.icon}
              </div>
              <div className="flex-1 pr-6">
                <div className="font-bold text-gray-900 text-lg tracking-tight">{type.label}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{type.description}</div>
              </div>
              {data.systemType === type.id && (
                <CheckCircle2 className="absolute top-6 right-6 w-6 h-6 text-yellow-500 animate-in zoom-in" />
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-6 bg-yellow-400 rounded-full" />
          <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Section B: Target Outcomes (Choose 1–3)</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {GOALS.map((goal) => (
            <button
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`p-6 border rounded-[28px] transition-all text-left space-y-4 relative group ${
                data.goals.includes(goal.id) 
                  ? 'border-yellow-400 bg-yellow-50/30 ring-1 ring-yellow-400 shadow-lg' 
                  : 'border-gray-100 hover:border-gray-200 bg-white'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                data.goals.includes(goal.id) ? 'bg-yellow-400 text-white' : 'bg-gray-50 text-gray-400'
              }`}>
                {GOAL_ICONS[goal.id]}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 tracking-tight">{goal.label}</h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed mt-1">{goal.description}</p>
              </div>
              {data.goals.includes(goal.id) && (
                <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-200" />
              )}
            </button>
          ))}
        </div>

        {followup && (
          <div className="p-6 bg-gray-50 rounded-[28px] border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-500">
            <div className="flex items-center gap-2 text-yellow-600 mb-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">AI Strategic Inquiry</span>
            </div>
            <p className="text-sm font-bold text-gray-700 leading-relaxed mb-4">{followup}</p>
            <input 
              type="text" 
              className="w-full p-4 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none text-sm"
              placeholder="Your insight..."
            />
          </div>
        )}
      </section>

      <div className="flex gap-4 pt-10">
        <button onClick={onBack} className="flex-1 p-5 border border-gray-100 rounded-2xl font-bold text-gray-400 hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back
        </button>
        <button 
          disabled={!data.systemType || data.goals.length === 0}
          onClick={onNext}
          className="flex-[2] p-5 bg-gray-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-gray-800 disabled:opacity-30 transition-all shadow-xl shadow-gray-200"
        >
          Generate System Roadmap <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};