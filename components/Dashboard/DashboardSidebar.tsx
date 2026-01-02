
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProjectState } from '../../types';
import { 
  LayoutDashboard, 
  Clock, 
  Cpu, 
  FileText, 
  BarChart3, 
  Activity 
} from 'lucide-react';

interface LeftSidebarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  projectData: ProjectState;
}

export const DashboardLeftSidebar: React.FC<LeftSidebarProps> = ({ projectData }) => {
  const location = useLocation();
  
  const navItems = [
    { id: 'center', path: '/dashboard', label: 'Command Center', icon: LayoutDashboard },
    { id: 'timeline', path: '/dashboard/timeline', label: 'Implementation', icon: Clock },
    { id: 'agents', path: '/dashboard/agents', label: 'AI Team', icon: Cpu },
    { id: 'docs', path: '/dashboard/docs', label: 'Knowledge Base', icon: FileText },
    { id: 'roi', path: '/dashboard/roi', label: 'ROI Progression', icon: BarChart3 },
  ];

  return (
    <div className="space-y-10">
      <nav className="space-y-2">
        {navItems.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <Link 
              key={tab.id}
              to={tab.path}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl font-semibold transition-all ${
                isActive 
                  ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' 
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-4 h-4" /> {tab.label}
            </Link>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-gray-100">
        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Strategic Focus</label>
        <div className="space-y-3">
          {projectData.goals.map(g => (
            <div key={g} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="text-xs font-bold text-gray-700 capitalize">{g.replace('-', ' ')} Efficiency</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface RightSidebarProps {
  aiInsights: string[];
}

export const DashboardRightSidebar: React.FC<RightSidebarProps> = ({ aiInsights }) => (
  <div className="space-y-6">
    <div className="p-8 bg-gray-950 text-white rounded-[40px] space-y-8 relative overflow-hidden group shadow-2xl">
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-[80px]" />
      <div className="flex items-center gap-2 text-yellow-400">
        <Activity className="w-5 h-5" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Strategy Feed</span>
      </div>
      <div className="space-y-8">
        {aiInsights.length > 0 ? aiInsights.map((insight, i) => (
          <div key={i} className="space-y-3 animate-in fade-in slide-in-from-right-4 duration-700" style={{ animationDelay: `${i * 200}ms` }}>
            <div className="w-6 h-[2px] bg-yellow-400" />
            <p className="text-sm text-gray-200 leading-relaxed font-medium">{insight}</p>
          </div>
        )) : (
          <div className="text-gray-500 text-xs italic">Syncing with system logs...</div>
        )}
      </div>
    </div>
  </div>
);
