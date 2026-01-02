import React from 'react';
import { ProjectState } from '../../../types';
import { 
  CheckCircle2, 
  Layers, 
  Target, 
  BrainCircuit 
} from 'lucide-react';

interface RightSidebarProps {
  step: number;
  projectData: ProjectState;
}

export const WizardRightSidebar: React.FC<RightSidebarProps> = ({ step, projectData }) => {
  const isDesigning = step > 1 && !projectData.strategicBlueprint;
  const blueprint = projectData.strategicBlueprint;

  return (
    <div className="space-y-10 animate-fade-in relative z-10">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Live Architecture Blueprint</h3>
        <p className="text-gray-400 text-sm font-medium">Updates in real time as AI analyzes your inputs</p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-100 rounded-full w-fit shadow-sm">
        <div className={`w-2 h-2 rounded-full ${isDesigning ? 'bg-yellow-400 animate-pulse' : 'bg-green-500'} shadow-lg`} />
        <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          {step === 1 ? 'Analyzing business signals' : 
           isDesigning ? 'Designing system structure' : 
           'Architecture Validated'}
        </span>
      </div>

      <div className="space-y-8">
        {step === 1 && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">Signal Extraction</p>
            {projectData.marketSignals.length > 0 ? projectData.marketSignals.map((s, i) => (
              <div key={i} className="p-6 bg-white rounded-[28px] border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-all">
                <div>
                  <div className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">{s.label}</div>
                  <div className="text-sm font-bold text-gray-900">{s.value}</div>
                </div>
                <div className="text-[10px] text-yellow-600 font-bold bg-yellow-50 px-3 py-1 rounded-lg border border-yellow-100">
                  {Math.round(s.confidence * 100)}% Match
                </div>
              </div>
            )) : (
              <div className="p-10 text-center border-2 border-dashed border-gray-100 rounded-[32px] text-gray-300">
                <BrainCircuit className="w-8 h-8 mx-auto mb-3 opacity-20" />
                <p className="text-xs font-bold uppercase tracking-widest">Awaiting Identity Input</p>
              </div>
            )}
          </div>
        )}

        {step >= 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {blueprint ? (
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">1. System Purpose</div>
                  <div className="p-6 bg-white border border-gray-100 rounded-[28px] shadow-sm">
                    <p className="font-bold text-gray-900 text-lg leading-tight">{blueprint.purpose}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">2. Primary Business Focus</div>
                  <div className="p-6 bg-gray-900 rounded-[28px] text-white flex items-center justify-between shadow-xl">
                    <span className="font-bold tracking-tight">{blueprint.primary_focus}</span>
                    <Target className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">3. Suggested AI Roles</div>
                  <div className="grid grid-cols-1 gap-2">
                    {blueprint.recommended_ai_roles.map((role, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl group hover:border-yellow-200 transition-colors">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-xs font-bold text-gray-700">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">4. Estimated Complexity</div>
                  <div className="p-6 bg-white border border-gray-100 rounded-[28px] space-y-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-gray-900">{blueprint.complexity_level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ease-out ${
                          blueprint.complexity_level === 'Low' ? 'w-1/4 bg-green-400' :
                          blueprint.complexity_level === 'Medium' ? 'w-1/2 bg-yellow-400' :
                          blueprint.complexity_level === 'High' ? 'w-3/4 bg-orange-400' : 'w-full bg-red-400'
                        }`} 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">5. What this system will do</div>
                  <div className="space-y-2">
                    {blueprint.summary_bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-yellow-50/50 border border-yellow-100 rounded-2xl">
                        <div className="mt-1 flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-600" />
                        </div>
                        <p className="text-[11px] font-bold text-yellow-900 leading-relaxed">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-gray-50 rounded-[28px] border border-gray-100 italic">
                  <p className="text-[11px] font-medium text-gray-500 leading-relaxed">
                    "{blueprint.short_explanation}"
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
                <div className="w-14 h-14 bg-white rounded-[24px] flex items-center justify-center shadow-2xl border border-gray-50 animate-bounce">
                  <BrainCircuit className="w-7 h-7 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Synthesizing Intent...</p>
                  <p className="text-xs text-gray-400 font-medium">Calibrating blueprint nodes for {projectData.companyName || 'your business'}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="pt-10 mt-auto">
        <div className="flex items-center gap-3 px-6 py-4 bg-gray-900 rounded-2xl text-white shadow-xl">
          <Layers className="w-4 h-4 text-yellow-400" />
          <span className="text-[11px] font-bold uppercase tracking-widest">Outcome-Driven Architecture</span>
        </div>
        <p className="mt-4 text-[10px] text-gray-400 leading-relaxed font-medium pl-2">
          This system is being designed for business outcomes — not just features. Every node is verified against your specified goals.
        </p>
      </div>
    </div>
  );
};