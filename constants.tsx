
import React from 'react';
import { 
  Building2, 
  Target, 
  Cpu, 
  Settings, 
  CheckCircle2, 
  LineChart, 
  Zap, 
  Bot, 
  Database, 
  Users,
  TrendingUp,
  Clock,
  HeartHandshake,
  Scaling
} from 'lucide-react';
import { SystemType, BusinessGoal } from './types';

export const SYSTEM_TYPES: { id: SystemType; label: string; description: string; icon: React.ReactNode }[] = [
  { 
    id: 'dashboard', 
    label: 'Intelligence Dashboard', 
    description: 'See real-time performance, insights, and recommendations.',
    icon: <LineChart className="w-5 h-5" /> 
  },
  { 
    id: 'chatbot', 
    label: 'Customer / Staff Concierge', 
    description: 'Answer questions, support customers, and assist teams instantly.',
    icon: <Bot className="w-5 h-5" /> 
  },
  { 
    id: 'automation', 
    label: 'Process Automation', 
    description: 'Remove manual work and run operations automatically.',
    icon: <Zap className="w-5 h-5" /> 
  },
  { 
    id: 'crm', 
    label: 'AI-Enhanced CRM', 
    description: 'Manage leads, customers, and sales with AI assistance.',
    icon: <Users className="w-5 h-5" /> 
  },
  { 
    id: 'internal-tool', 
    label: 'Knowledge Base & Internal Tools', 
    description: 'Centralize information and make it instantly searchable.',
    icon: <Database className="w-5 h-5" /> 
  },
];

export const GOALS: BusinessGoal[] = [
  { id: 'revenue', label: 'Increase Revenue', description: 'Drive more sales and improve conversions.' },
  { id: 'time', label: 'Save Time', description: 'Eliminate repetitive tasks and manual work.' },
  { id: 'cx', label: 'Improve Experience', description: 'Respond faster and deliver better service.' },
  { id: 'scale', label: 'Scale Operations', description: 'Grow without hiring more people.' },
];

export const GOAL_ICONS: Record<string, React.ReactNode> = {
  revenue: <TrendingUp className="w-5 h-5" />,
  time: <Clock className="w-5 h-5" />,
  cx: <HeartHandshake className="w-5 h-5" />,
  scale: <Scaling className="w-5 h-5" />,
};

export const INDUSTRIES = [
  'Startups', 'Agencies & Consulting', 'Real Estate', 'E-commerce & Retail', 
  'Travel & Hospitality', 'Fashion & Luxury', 'Education & Coaching', 'Healthcare'
];
