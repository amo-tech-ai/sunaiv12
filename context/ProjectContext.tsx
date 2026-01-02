
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ProjectState, StrategicBlueprint, TimelineEvent } from '../types';
import { generateStrategicBlueprint, generateRecommendations, getAIInsights, generateDetailedTimeline } from '../services/gemini';

interface ProjectContextType {
  projectData: ProjectState;
  updateData: (updates: Partial<ProjectState>) => void;
  resetProject: () => void;
  isInitializing: boolean;
  completeOnboarding: () => Promise<void>;
  aiInsights: string[];
}

const STORAGE_KEY = 'sun_ai_project_session';

const INITIAL_STATE: ProjectState = {
  fullName: '',
  companyName: '',
  website: '',
  description: '',
  systemType: '',
  industry: '',
  goals: [],
  recommendations: [],
  timeline: [],
  controlLevel: 'Assisted',
  isComplete: false,
  marketSignals: [],
  blueprint: [],
  impactStats: [],
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [projectData, setProjectData] = useState<ProjectState>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });
  const [isInitializing, setIsInitializing] = useState(false);
  const [aiInsights, setAiInsights] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projectData));
  }, [projectData]);

  // Handle auto-generation of strategic blueprint as user fills wizard
  useEffect(() => {
    const shouldReason = 
      projectData.industry && 
      projectData.systemType && 
      projectData.goals.length > 0 && 
      !projectData.isComplete;

    if (shouldReason) {
      const timer = setTimeout(async () => {
        try {
          const blueprint = await generateStrategicBlueprint(projectData);
          updateData({ strategicBlueprint: blueprint });
        } catch (e) {
          console.error("Blueprint generation failed", e);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [projectData.industry, projectData.systemType, projectData.goals, projectData.isComplete]);

  const updateData = (updates: Partial<ProjectState>) => {
    setProjectData(prev => ({ ...prev, ...updates }));
  };

  const resetProject = () => {
    setProjectData(INITIAL_STATE);
    localStorage.removeItem(STORAGE_KEY);
  };

  const completeOnboarding = async () => {
    setIsInitializing(true);
    try {
      // Provisioning sequence
      const [insights, timeline] = await Promise.all([
        getAIInsights(projectData),
        generateDetailedTimeline(projectData)
      ]);
      
      setAiInsights(insights);
      updateData({ 
        isComplete: true,
        timeline: timeline
      });
    } catch (e) {
      console.error("Finalization failed", e);
      updateData({ isComplete: true });
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <ProjectContext.Provider value={{ projectData, updateData, resetProject, isInitializing, completeOnboarding, aiInsights }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProject must be used within a ProjectProvider');
  return context;
};
