import { AgentRole } from './agent-role.model';
import { CapabilityItem } from './capability-item.model';
import { WorkflowStep } from './workflow-step.model';

export type FrameworkSlug = 'angular' | 'react' | 'nextjs';

export interface FrameworkProfile {
  slug: FrameworkSlug;
  name: string;
  summary: string;
  architectureModel: string;
  idealUseCases: string[];
  capabilities: CapabilityItem[];
  agentRoles: AgentRole[];
  workflow: WorkflowStep[];
}
