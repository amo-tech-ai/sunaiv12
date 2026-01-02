
export type SystemType = 'dashboard' | 'chatbot' | 'automation' | 'crm' | 'internal-tool';

export interface BusinessGoal {
  id: string;
  label: string;
  description: string;
}

export interface ServiceRecommendation {
  title: string;
  description: string;
  impact: string;
  tier: 'Core' | 'Advanced';
  technicalRequirements?: string[];
}

export interface MarketSignal {
  label: string;
  value: string;
  confidence: number;
}

export interface StrategicBlueprint {
  purpose: string;
  primary_focus: string;
  recommended_systems: string[];
  recommended_ai_roles: string[];
  complexity_level: 'Low' | 'Medium' | 'High' | 'Enterprise';
  short_explanation: string;
  summary_bullets: string[];
}

export interface TimelineEvent {
  date: string;
  title: string;
  status: 'Done' | 'Active' | 'Pending';
  desc: string;
}

export interface ProjectState {
  fullName: string;
  companyName: string;
  website: string;
  description: string;
  systemType: SystemType | '';
  industry: string;
  goals: string[];
  recommendations: ServiceRecommendation[];
  timeline: TimelineEvent[];
  controlLevel: 'Assisted' | 'Proactive' | 'Advanced';
  isComplete: boolean;
  // Live Intelligence Data
  marketSignals: MarketSignal[];
  blueprint: string[];
  impactStats: { label: string; value: string }[];
  strategicBlueprint?: StrategicBlueprint;
}

export interface WizardStepProps {
  data: ProjectState;
  updateData: (updates: Partial<ProjectState>) => void;
  onNext: () => void;
  onBack?: () => void;
  loading?: boolean;
}
