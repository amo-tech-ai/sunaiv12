
import React from 'react';
import { createHashRouter, Navigate } from 'react-router-dom';
import App from './App';
import { ThreePanelLayout } from './components/Layout';
import { 
  StepBusinessContext, 
  StepStrategicPurpose, 
  StepRecommendedServices, 
  StepControlLevel, 
  StepSummary 
} from './components/Wizard/WizardSteps';
import { 
  WizardLeftSidebar, 
  WizardRightSidebar 
} from './components/Wizard/WizardSidebars';
import { 
  DashboardLeftSidebar, 
  DashboardRightSidebar 
} from './components/Dashboard/DashboardSidebar';
import { 
  CommandCenterMain, 
  TimelineView, 
  AgentsView, 
  ROIView, 
  KnowledgeBaseView 
} from './components/Dashboard/DashboardViews';
import { useProject } from './context/ProjectContext';

const WizardGuard: React.FC<{ children: React.ReactElement, step: number }> = ({ children, step }) => {
  const { projectData } = useProject();
  if (projectData.isComplete) return <Navigate to="/dashboard" replace />;
  
  // Wrap in layout
  return (
    <ThreePanelLayout 
      title="Architecture Blueprint Session"
      left={<WizardLeftSidebar step={step} />} 
      main={children} 
      right={<WizardRightSidebar step={step} projectData={projectData} />} 
    />
  );
};

const DashboardGuard: React.FC<{ children: React.ReactElement, tab: string }> = ({ children, tab }) => {
  const { projectData, aiInsights } = useProject();
  if (!projectData.isComplete) return <Navigate to="/wizard/1" replace />;
  
  return (
    <ThreePanelLayout 
      title={`${projectData.companyName} | System Command`}
      left={<DashboardLeftSidebar activeTab={tab} setActiveTab={() => {}} projectData={projectData} />} 
      main={children} 
      right={<DashboardRightSidebar aiInsights={aiInsights} />} 
    />
  );
};

export const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/wizard/1" replace />,
  },
  {
    path: '/wizard/1',
    element: <WizardGuard step={1}><StepBusinessContextWrapper /></WizardGuard>,
  },
  {
    path: '/wizard/2',
    element: <WizardGuard step={2}><StepStrategicPurposeWrapper /></WizardGuard>,
  },
  {
    path: '/wizard/3',
    element: <WizardGuard step={3}><StepRecommendedServicesWrapper /></WizardGuard>,
  },
  {
    path: '/wizard/4',
    element: <WizardGuard step={4}><StepControlLevelWrapper /></WizardGuard>,
  },
  {
    path: '/wizard/5',
    element: <WizardGuard step={5}><StepSummaryWrapper /></WizardGuard>,
  },
  {
    path: '/dashboard',
    element: <DashboardGuard tab="center"><CommandCenterMainWrapper /></DashboardGuard>,
  },
  {
    path: '/dashboard/timeline',
    element: <DashboardGuard tab="timeline"><TimelineViewWrapper /></DashboardGuard>,
  },
  {
    path: '/dashboard/agents',
    element: <DashboardGuard tab="agents"><AgentsViewWrapper /></DashboardGuard>,
  },
  {
    path: '/dashboard/docs',
    element: <DashboardGuard tab="docs"><KnowledgeBaseView /></DashboardGuard>,
  },
  {
    path: '/dashboard/roi',
    element: <DashboardGuard tab="roi"><ROIView /></DashboardGuard>,
  }
]);

// Wrappers to inject context props into existing components if they expect them
function StepBusinessContextWrapper() {
  const { projectData, updateData } = useProject();
  const navigate = () => window.location.hash = '#/wizard/2';
  return <StepBusinessContext data={projectData} updateData={updateData} onNext={navigate} />;
}

function StepStrategicPurposeWrapper() {
  const { projectData, updateData } = useProject();
  const next = () => window.location.hash = '#/wizard/3';
  const back = () => window.location.hash = '#/wizard/1';
  return <StepStrategicPurpose data={projectData} updateData={updateData} onNext={next} onBack={back} />;
}

function StepRecommendedServicesWrapper() {
  const { projectData, updateData } = useProject();
  const next = () => window.location.hash = '#/wizard/4';
  const back = () => window.location.hash = '#/wizard/2';
  return <StepRecommendedServices data={projectData} updateData={updateData} onNext={next} onBack={back} loading={false} />;
}

function StepControlLevelWrapper() {
  const { projectData, updateData } = useProject();
  const next = () => window.location.hash = '#/wizard/5';
  const back = () => window.location.hash = '#/wizard/3';
  return <StepControlLevel data={projectData} updateData={updateData} onNext={next} onBack={back} />;
}

function StepSummaryWrapper() {
  const { projectData, updateData, completeOnboarding } = useProject();
  const back = () => window.location.hash = '#/wizard/4';
  return <StepSummary data={projectData} updateData={updateData} onNext={completeOnboarding} onBack={back} />;
}

function CommandCenterMainWrapper() {
  const { projectData } = useProject();
  return <CommandCenterMain projectData={projectData} />;
}

function TimelineViewWrapper() {
  const { projectData } = useProject();
  return <TimelineView projectData={projectData} />;
}

function AgentsViewWrapper() {
  const { projectData } = useProject();
  return <AgentsView projectData={projectData} />;
}
