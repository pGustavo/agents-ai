# React Multi-Agent Project Creation Guide

This README defines how to create a React/Next.js project using all agents in `Agents/react` plus `Agents/developer.agent.md`.

## Agent Roles

| Agent | Role in the process | Main output |
|---|---|---|
| `developer.agent.md` | Global engineering, UX/UI, accessibility, and performance baseline | Cross-phase quality standards |
| `planner-agent.md` | Product-to-feature decomposition and execution planning | Feature map, responsibilities, dependency graph, implementation order |
| `architecture-agent.md` | React/Next.js architecture constraints | Structural standards and framework rules |
| `dependency-agent.md` | Dependency and boundary validation gate | Dependency risk report and coupling findings |
| `ui-system-agent.md` | Shared UI system ownership | Reusable `shared/ui` foundation |
| `init-agent.md` | Feature implementation engine | Complete feature modules (types, services, hooks, UI, tests) |
| `test-agent.md` | Testing and coverage enforcement | Unit, component, integration, and E2E test suites |
| `performance-agent.md` | Runtime and bundle optimization | Performance improvements and scalability fixes |
| `refactor-agent.md` | Structural cleanup without feature changes | Architecture consistency and maintainability improvements |
| `qa-agent.md` | Final architecture and quality gate | Pass/fail validation and remediation report |

## End-to-End Project Creation Process

1. **Create app at repository root**  
   Use a root-level app structure (for example `src/app`, `src/features`, `src/shared`) and avoid nested app containers unless explicitly required.

2. **Set baseline (`developer.agent.md`)**  
   Apply code quality, UX/UI, accessibility, testing, and performance expectations to all downstream agents.

3. **Plan the product (`planner-agent.md`)**  
   Convert the project brief into:
   - feature decomposition
   - domain boundaries
   - task breakdown per feature
   - dependency graph
   - execution order

4. **Lock architecture (`architecture-agent.md`)**  
   Enforce React/Next standards:
   - feature-based structure
   - Tailwind CSS as default styling system
   - strict typing and modern React patterns
   - proper client/server component boundaries (when using Next.js)
   - service + hook + UI separation

5. **Validate dependencies (`dependency-agent.md`)**  
   Confirm:
   - no circular dependencies
   - no illegal feature coupling
   - shared layer is the only approved bridge
   - justified global state usage

6. **Create shared UI foundation (`ui-system-agent.md`)**  
   Build reusable `shared/ui` primitives with:
   - stateless props-driven APIs
   - accessibility defaults
   - consistent design patterns
   - no business logic

7. **Implement features (`init-agent.md`)**  
   Build each feature in dependency order with strict flow:
   `API -> Service -> Hook -> UI`  
   Required feature layers:
   - types/models
   - services
   - hooks (state/orchestration)
   - components
   - schemas/validation
   - tests

8. **Build and enforce tests (`test-agent.md`)**  
   Ensure coverage for hooks, services, components, utilities, and critical user journeys.

9. **Optimize performance (`performance-agent.md`)**  
   Improve rendering, hook efficiency, bundle size, dynamic loading, and Next.js delivery behavior.

10. **Refactor for maintainability (`refactor-agent.md`)**  
   Remove structural issues and duplication without behavior changes.

11. **Run final quality gate (`qa-agent.md`)**  
   Block completion until architecture, data flow, and dependency rules pass.

## Recommended Execution Order

1. `developer.agent.md`
2. `planner-agent.md`
3. `architecture-agent.md`
4. `dependency-agent.md`
5. `ui-system-agent.md`
6. `init-agent.md` (repeat per feature by dependency order)
7. `test-agent.md`
8. `performance-agent.md`
9. `refactor-agent.md`
10. `qa-agent.md`

## Handoff Contract Between Agents

- **Planner -> Init**: feature responsibilities and dependencies must be explicit enough to implement directly.
- **Architecture -> All implementation agents**: framework and structure rules are mandatory.
- **Dependency -> Init/QA**: illegal coupling or circular imports must be resolved before release.
- **UI System -> Init**: feature teams should consume shared primitives instead of duplicating UI.
- **Init -> Test/Performance/Refactor**: implementation must provide clear seams for validation and optimization.
- **QA (final gate)**: reports and blocks violations; fixes route back to owner agents.

## Core Data Flow Rule

```text
API -> Service -> Hook -> UI
```

UI must never call APIs directly or bypass the service/hook layers.
