# Angular Multi-Agent Project Creation Guide

This README defines how to create an Angular project using all agents in `Agents/angular` plus `Agents/developer.agent.md`.

## Agent Roles

| Agent | Role in the process | Main output |
|---|---|---|
| `developer.agent.md` | Global engineering and UX/UI guardrails across all phases | Quality baseline (DX, UX, a11y, performance, docs) |
| `planner-agent.md` | Domain and feature decomposition | Feature map, boundaries, dependencies, execution order |
| `architecture-agent.md` | Architecture standards and structural constraints | Enforced project structure and Angular standards |
| `dependency-agent.md` | Dependency policy/validation layer | Dependency decisions and guardrails |
| `init-agent.md` | Feature implementation pipeline | Full feature scaffolding (models, mappers, services, state, facade, UI, tests) |
| `ui-system-agent.md` | Shared design system and reusable UI primitives | `shared/ui` component system |
| `test-agent.md` | Full testing strategy and test generation | Unit, component, integration, and E2E coverage |
| `performance-agent.md` | Runtime and bundle optimization layer | Performance improvements and validation |
| `refactor-agent.md` | Structural cleanup without changing behavior | Cleaner architecture, signal-first migrations, deduplication |
| `qa-agent.md` | Final architecture and rule compliance gate | Pass/fail validation report and blockers |

## End-to-End Project Creation Process

1. **Create app at repository root**  
   Scaffold/use a single Angular app at root (with `src/app` as the code base).  
   Do not create nested app containers like `apps/*` unless explicitly required.

2. **Set baseline (`developer.agent.md`)**  
   Establish non-negotiables for code quality, UX/UI, accessibility, documentation, and performance targets.  
   This context applies to every step below.

3. **Plan the product (`planner-agent.md`)**  
   Convert the project brief into:
   - feature list
   - domain model overview
   - per-feature tasks by layer
   - dependency graph
   - implementation order

4. **Lock architecture (`architecture-agent.md`)**  
   Enforce Angular standards:
   - standalone-only components
   - feature-based structure
   - Tailwind CSS as default styling system
   - signals-first state
   - OnPush strategy
   - lazy loading and strict typing

5. **Define dependency constraints (`dependency-agent.md`)**  
   Apply dependency rules before implementation:
   - avoid unnecessary libraries
   - prevent circular and cross-feature coupling
   - keep shared/core boundaries clean

6. **Create shared UI foundation (`ui-system-agent.md`)**  
   Build `src/app/shared/ui` primitives (button/input/modal/card/table) with:
   - no business logic
   - reusable API (inputs/outputs)
   - accessibility defaults
   - consistent interaction patterns

7. **Implement each feature (`init-agent.md`)**  
   Execute feature generation in dependency order using strict flow:
   `API -> Service -> Mapper -> State -> Facade -> Component`  
   Required layers per feature:
   - models
   - mappers
   - services
   - state
   - facade
   - components/pages
   - validators/forms
   - tests

8. **Build and expand tests (`test-agent.md`)**  
   Ensure coverage for services, facades, state, components, validators, and integration paths.  
   Add E2E coverage for critical user journeys.

9. **Optimize performance (`performance-agent.md`)**  
   Validate and improve:
   - change detection efficiency
   - signal-first rendering patterns
   - lazy loading/code splitting
   - bundle/runtime performance targets

10. **Refactor for maintainability (`refactor-agent.md`)**  
   Improve structure without feature changes:
   - remove duplication
   - split oversized components/services
   - migrate RxJS-overuse patterns to signals when appropriate
   - reinforce boundaries and DI quality

11. **Run final quality gate (`qa-agent.md`)**  
   Block release until architecture and layering rules pass:
   `UI -> Facade -> State -> Service -> API`  
   Detect anti-patterns and dependency violations before completion.

## Recommended Execution Order (Per Project)

1. `developer.agent.md` (global context)
2. `planner-agent.md`
3. `architecture-agent.md`
4. `dependency-agent.md`
5. `ui-system-agent.md`
6. `init-agent.md` (repeat per feature in dependency order)
7. `test-agent.md`
8. `performance-agent.md`
9. `refactor-agent.md`
10. `qa-agent.md`

## Practical Handoff Contract Between Agents

- **Planner -> Init**: feature boundaries, dependencies, and task breakdown must be explicit enough to implement directly.
- **Architecture -> All implementation agents**: structural rules are mandatory, not suggestions.
- **UI System -> Init**: features must consume shared UI primitives where applicable.
- **Init -> Test/Performance/Refactor**: implementation must expose clear seams for validation and optimization.
- **QA (final gate)**: only reports/blocks violations; fixes are routed back to init/refactor/test/performance as needed.

## Notes

Each agent file now includes an **Agent Collaboration Contract** section so handoffs, inputs, outputs, and remediation routing are explicit across the full lifecycle.
