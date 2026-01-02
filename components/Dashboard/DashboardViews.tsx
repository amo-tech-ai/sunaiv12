
import React from 'react';
import { ProjectState } from '../../types';
import { 
  Zap, 
  ArrowRight, 
  Cpu, 
  Settings, 
  FileText, 
  CheckCircle2,
  Clock,
  TrendingUp,
  ShieldCheck,
  Target,
  Terminal
} from 'lucide-react';

interface ViewProps {
  projectData: ProjectState;
}

export const CommandCenterMain: React.FC<ViewProps> = ({ projectData }) => (
  <div className="space-y-12 animate-fade-in animate-slide-up">
    <div className="flex justify-between items-end border-b border-gray-100 pb-8">
      <div>
        <div className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" /> Live Deployment Sequence
        </div>
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Executive Dashboard</h2>
        <p className="text-gray-500 mt-2 font-medium">Overview for {projectData.companyName}</p>
      </div>
      <div className="hidden md:flex gap-4">
        <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200">Export Report</button>
      </div>
    </div>

    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="p-10 bg-white border border-gray-100 rounded-[40px] panel-shadow space-y-8 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-gray-900 uppercase tracking-widest text-[11px] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-yellow-500" /> Active System Workforce
          </h3>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{projectData.recommendations.length} Active Modules</span>
        </div>
        <div className="space-y-4">
          {projectData.recommendations.map((rec, i) => (
            <div key={i} className="flex items-center gap-6 p-6 hover:bg-gray-50 rounded-[28px] transition-all cursor-pointer group border border-transparent hover:border-gray-100">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-white transition-all shadow-sm">
                <Zap className="w-7 h-7 text-gray-400 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold text-gray-900 tracking-tight">{rec.title}</h4>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-md uppercase tracking-tighter">Healthy</span>
                  <p className="text-xs text-gray-400 font-medium">{rec.impact}</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-200 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="p-10 bg-gray-900 text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700" />
          <h3 className="font-bold uppercase tracking-widest text-[11px] text-gray-500 mb-8">Growth Metrics (Day 1)</h3>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-yellow-400 tracking-tighter">+82h</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Executive Hours <br/>Unlocked / Mo</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-white tracking-tighter">99.4%</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">Decision Engine <br/>Precision Rate</div>
            </div>
          </div>
        </div>

        <div className="p-10 bg-white border border-gray-100 rounded-[40px] space-y-6 shadow-sm">
          <h3 className="font-bold uppercase tracking-widest text-[11px] text-gray-400">Current Focus</h3>
          <div className="space-y-4">
             {projectData.goals.slice(0, 2).map((goal, i) => (
               <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                 <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                 <span className="text-sm font-bold text-gray-700 capitalize">{goal.replace('-', ' ')} Optimization</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const TimelineView: React.FC<ViewProps> = ({ projectData }) => {
  const timeline = projectData.timeline.length > 0 ? projectData.timeline : [
    { date: 'Initial', status: 'Done', title: 'Blueprint Sealed', desc: 'Architecture, security protocols, and human-in-the-loop checkpoints established.' },
    { date: 'Day 1-3', status: 'Active', title: 'Intelligence Provisioning', desc: 'Analyzing existing SOPs and website signals to prime the reasoning engines.' },
    { date: 'Day 4-10', status: 'Pending', title: 'Sandbox Integration', desc: 'Connecting the logic layer to your existing tech stack.' },
    { date: 'Day 30', status: 'Pending', title: 'Maturity Milestone', desc: 'First full performance audit and ROI validation report.' },
  ];

  return (
    <div className="space-y-12 animate-fade-in animate-slide-up">
      <div className="border-b border-gray-100 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Delivery Roadmap</h2>
        <p className="text-gray-500 mt-1 font-medium">Real-time implementation status of your AI ecosystem.</p>
      </div>
      
      <div className="max-w-2xl">
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-10 group">
            <div className="w-16 pt-1 text-[10px] font-bold text-gray-300 uppercase tracking-widest flex-shrink-0">{item.date}</div>
            <div className="relative flex-shrink-0">
              <div className={`w-4 h-4 rounded-full mt-2 ring-8 ring-white z-10 relative ${
                item.status === 'Done' ? 'bg-green-500 shadow-lg shadow-green-100' : 
                item.status === 'Active' ? 'bg-yellow-400 animate-pulse shadow-lg shadow-yellow-100' : 'bg-gray-100 border border-gray-200'
              }`} />
              {i < timeline.length - 1 && <div className="absolute top-6 left-[7.5px] bottom-[-24px] w-[1px] bg-gray-100" />}
            </div>
            <div className="flex-1 pb-12">
              <h4 className="text-lg font-bold text-gray-900 tracking-tight">{item.title}</h4>
              <p className="text-sm text-gray-500 mt-2 font-medium leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AgentsView: React.FC<ViewProps> = ({ projectData }) => (
  <div className="space-y-12 animate-fade-in animate-slide-up">
    <div className="border-b border-gray-100 pb-8">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Digital Workforce</h2>
      <p className="text-gray-500 mt-1 font-medium">Managing individual agent personas and permissions.</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectData.recommendations.map((agent, i) => (
        <div key={i} className="p-10 border border-gray-100 rounded-[40px] bg-white shadow-sm hover:shadow-xl transition-all flex flex-col gap-6 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 group-hover:bg-yellow-400 group-hover:text-white transition-all shadow-sm">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold uppercase tracking-widest">Active</div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900 tracking-tight">{agent.title}</h4>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">System Intelligence Module</p>
          </div>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">{agent.description}</p>
          
          {agent.technicalRequirements && agent.technicalRequirements.length > 0 && (
            <div className="space-y-3 pt-4 border-t border-gray-50 flex-1">
              <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <Terminal className="w-3 h-3" /> Technical Sub-modules
              </div>
              <div className="flex flex-wrap gap-2">
                {agent.technicalRequirements.map((req, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-600 text-[10px] font-bold rounded-md border border-gray-100">
                    {req}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="pt-6 border-t border-gray-50 flex items-center justify-between mt-auto">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Confidence: 98%</span>
            <button className="text-gray-400 hover:text-gray-900 transition-colors p-2"><Settings className="w-5 h-5" /></button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ROIView: React.FC = () => (
  <div className="space-y-12 animate-fade-in animate-slide-up">
    <div className="flex justify-between items-center border-b border-gray-100 pb-8">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">System Maturity</h2>
      <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest">
        <TrendingUp className="w-4 h-4" /> Performance Gain +12%
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-10 bg-gray-900 text-white rounded-[40px] space-y-3 shadow-2xl relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full -mb-12 -mr-12" />
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Efficiency Gain</div>
        <div className="text-5xl font-bold text-yellow-400 tracking-tighter">82h<span className="text-sm font-normal text-white">/mo</span></div>
        <p className="text-[10px] text-gray-400 font-medium leading-relaxed pt-4 italic">Executive capacity unlocked since deployment.</p>
      </div>
      <div className="p-10 bg-white border border-gray-100 rounded-[40px] space-y-3 shadow-sm">
        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Maturity Score</div>
        <div className="text-5xl font-bold text-gray-900 tracking-tighter">4.8<span className="text-sm font-normal text-gray-300">/5.0</span></div>
        <p className="text-[10px] text-gray-400 font-medium leading-relaxed pt-4">Reliability based on logic validation cycles.</p>
      </div>
      <div className="p-10 bg-yellow-400 text-gray-900 rounded-[40px] space-y-3 shadow-xl shadow-yellow-100">
        <div className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Knowledge Density</div>
        <div className="text-5xl font-bold tracking-tighter">1.2M<span className="text-sm font-normal">pts</span></div>
        <p className="text-[10px] text-gray-900/60 font-bold leading-relaxed pt-4">Proprietary tokens indexed via RAG.</p>
      </div>
    </div>

    <div className="p-12 bg-white border border-gray-100 rounded-[48px] space-y-10 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8">
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-1.5">
             <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
             <span className="text-[10px] font-bold text-gray-400 uppercase">Actual ROI</span>
           </div>
           <div className="flex items-center gap-1.5 ml-4">
             <div className="w-2.5 h-2.5 bg-gray-100 rounded-full" />
             <span className="text-[10px] font-bold text-gray-400 uppercase">Projection</span>
           </div>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="font-bold text-gray-900 tracking-tight">Growth Projection</h3>
        <p className="text-xs text-gray-400 font-medium">Estimated scaling delta over the next 90 days.</p>
      </div>
      <div className="h-48 flex items-end gap-3 px-2">
        {[40, 55, 45, 75, 65, 95, 85, 100].map((h, i) => (
          <div key={i} className="flex-1 bg-gray-50 rounded-2xl transition-all hover:bg-yellow-400 cursor-pointer relative group" style={{ height: `${h}%` }}>
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">W-{i+1}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] font-bold text-gray-300 tracking-[0.2em] pt-4">
        <span>ESTABLISHMENT PHASE</span>
        <span>PEAK OPTIMIZATION</span>
      </div>
    </div>
  </div>
);

export const KnowledgeBaseView: React.FC = () => (
  <div className="space-y-12 animate-fade-in animate-slide-up">
    <div className="border-b border-gray-100 pb-8">
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Knowledge Base</h2>
      <p className="text-gray-500 mt-1 font-medium">Manage the proprietary data used to ground your AI agents.</p>
    </div>
    
    <div className="p-16 border-2 border-dashed border-gray-100 rounded-[48px] text-center space-y-6 group hover:border-yellow-400 transition-all cursor-pointer bg-white">
      <div className="w-24 h-24 bg-gray-50 rounded-[32px] flex items-center justify-center mx-auto group-hover:bg-yellow-50 transition-all shadow-sm">
        <FileText className="w-10 h-10 text-gray-300 group-hover:text-yellow-600" />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-gray-900 tracking-tight">Secure Document Upload</h4>
        <p className="text-sm text-gray-400 font-medium max-w-xs mx-auto">Upload proprietary PDFs, CSVs, or provide Website URLs for specialized RAG training.</p>
      </div>
      <button className="px-8 py-3 bg-gray-900 text-white rounded-2xl text-sm font-bold shadow-xl shadow-gray-200 hover:scale-105 transition-transform">Initialize Uploader</button>
    </div>

    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[11px] text-gray-400 uppercase tracking-[0.2em]">Live Training Corpus</h3>
        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">1 File Indexed</span>
      </div>
      <div className="p-6 bg-white rounded-3xl flex items-center justify-between border border-gray-100 shadow-sm group hover:border-yellow-200 transition-all">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-yellow-500" />
          </div>
          <div>
            <span className="text-base font-bold text-gray-900 block">Initial_Strategic_Blueprint.pdf</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5 block">Automated Generation • 2.4MB</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[10px] font-bold">READY</div>
          <button className="p-2 text-gray-300 hover:text-gray-900"><Settings className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  </div>
);
