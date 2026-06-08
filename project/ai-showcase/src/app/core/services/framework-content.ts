import { Injectable } from '@angular/core';
import { FrameworkProfile } from '../models/framework-profile.model';

@Injectable({
  providedIn: 'root',
})
export class FrameworkContent {
  getFrameworkProfiles(): FrameworkProfile[] {
    return [
      {
        slug: 'angular',
        name: 'Angular',
        summary:
          'Signals-first, feature-isolated architecture with facade-driven orchestration and strict layering.',
        architectureModel:
          'API -> Service -> Mapper -> State -> Facade -> Component',
        idealUseCases: [
          'Complex enterprise frontends with strict boundaries',
          'Large team delivery with predictable architecture contracts',
          'Apps needing long-term maintainability with explicit structure',
        ],
        capabilities: [
          {
            title: 'Feature Isolation',
            description:
              'Each feature is generated with clear ownership and strict boundaries.',
          },
          {
            title: 'Signals-First State',
            description:
              'State defaults to signals/computed/effect, with RxJS reserved for stream cases.',
          },
          {
            title: 'Facade-Driven Components',
            description:
              'UI remains thin by consuming facade APIs instead of embedding business logic.',
          },
        ],
        agentRoles: [
          { id: 'planner', name: 'Planner', responsibility: 'Defines feature map and dependency order.' },
          { id: 'init', name: 'Init', responsibility: 'Scaffolds architecture and feature layers with CLI generators.' },
          { id: 'dependency', name: 'Dependency', responsibility: 'Validates package and import boundaries.' },
          { id: 'test', name: 'Test', responsibility: 'Generates behavior-focused coverage.' },
          { id: 'qa', name: 'QA', responsibility: 'Blocks completion on architecture violations.' },
        ],
        workflow: [
          { order: 1, title: 'Plan', outcome: 'Features and dependencies are locked.' },
          { order: 2, title: 'Architect', outcome: 'Layering and framework standards are enforced.' },
          { order: 3, title: 'Implement', outcome: 'Feature modules and shared UI are scaffolded.' },
          { order: 4, title: 'Validate', outcome: 'Tests, performance, and QA gates approve delivery.' },
        ],
      },
      {
        slug: 'react',
        name: 'React',
        summary:
          'Hook-centered feature architecture with strict API/service/hook/UI separation and reusable UI system.',
        architectureModel: 'API -> Service -> Hook -> UI',
        idealUseCases: [
          'Modular product teams with rapid iteration needs',
          'UI-heavy apps requiring reusable patterns',
          'Apps that need flexible client-driven composition',
        ],
        capabilities: [
          {
            title: 'Hook-Orchestrated Logic',
            description:
              'Business behavior is centralized in hooks while components remain presentational.',
          },
          {
            title: 'Service Boundary Discipline',
            description:
              'Network and DTO concerns are isolated in services and mapping layers.',
          },
          {
            title: 'Quality Lifecycle',
            description:
              'Refactor, test, performance, and QA roles continuously harden architecture.',
          },
        ],
        agentRoles: [
          { id: 'planner', name: 'Planner', responsibility: 'Breaks product requirements into feature tasks.' },
          { id: 'init', name: 'Init', responsibility: 'Creates feature modules with hooks/services/types/tests.' },
          { id: 'ui-system', name: 'UI System', responsibility: 'Maintains reusable shared UI primitives.' },
          { id: 'performance', name: 'Performance', responsibility: 'Optimizes runtime and bundle cost.' },
          { id: 'qa', name: 'QA', responsibility: 'Applies final architecture and dependency guard checks.' },
        ],
        workflow: [
          { order: 1, title: 'Plan', outcome: 'Feature responsibilities are implementation-ready.' },
          { order: 2, title: 'Build', outcome: 'Hooks/services/UI and validation layers are delivered.' },
          { order: 3, title: 'Harden', outcome: 'Testing and optimization close quality gaps.' },
          { order: 4, title: 'Gate', outcome: 'QA verifies compliance before release.' },
        ],
      },
      {
        slug: 'nextjs',
        name: 'Next.js',
        summary:
          'Server-first architecture with App Router, Server Components by default, and strict client boundaries.',
        architectureModel:
          'Read: Server Component -> Service -> Mapper -> UI | Mutation: UI -> Server Action -> Service -> DB/API',
        idealUseCases: [
          'SEO-sensitive and performance-critical products',
          'Apps needing explicit server/client responsibility split',
          'Teams standardizing around App Router and Server Actions',
        ],
        capabilities: [
          {
            title: 'Server-First Decisions',
            description:
              'Client components are used only when interactivity or browser APIs are required.',
          },
          {
            title: 'Deterministic Initialization',
            description:
              'CLI-driven setup scaffolds app/features/shared/services/testing in stable order.',
          },
          {
            title: 'Operational Governance',
            description:
              'Dependency, performance, refactor, test, and QA agents keep architecture in control.',
          },
        ],
        agentRoles: [
          { id: 'planner', name: 'Planner', responsibility: 'Defines server/client split and feature order.' },
          { id: 'init', name: 'Init', responsibility: 'Bootstraps project structure and standards with CLI.' },
          { id: 'dependency', name: 'Dependency', responsibility: 'Guards module/package dependency integrity.' },
          { id: 'performance', name: 'Performance', responsibility: 'Optimizes rendering and delivery strategy.' },
          { id: 'qa', name: 'QA', responsibility: 'Final compliance gate for architecture and quality.' },
        ],
        workflow: [
          { order: 1, title: 'Plan', outcome: 'Server-first execution strategy is finalized.' },
          { order: 2, title: 'Initialize', outcome: 'App Router scaffolding and shared layers are in place.' },
          { order: 3, title: 'Implement', outcome: 'Features follow service and server-action boundaries.' },
          { order: 4, title: 'Validate', outcome: 'Tests, optimization, and QA approve release readiness.' },
        ],
      },
    ];
  }
}
