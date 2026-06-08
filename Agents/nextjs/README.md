# Next.js Multi-Agent Project Creation Guide

This README defines how to create a Next.js project using all agents in `Agents/nextjs` plus `Agents/developer.agent.md`.

## Agent Roles

| Agent | Role in the process | Main output |
|---|---|---|
| `developer.agent.md` | Global engineering, UX/UI, accessibility, and performance baseline | Cross-phase quality standards |
| `planner-agent.md` | Server-first product decomposition and sequencing | Feature map, server/client split, dependency graph, execution order |
| `architecture-agent.md` | Next.js architecture standards and constraints | Structural rules (App Router, server-first, typing, layering) |
| `dependency-agent.md` | Dependency and boundary governance | Coupling/dependency validation rules |
| `init-agent.md` | Deterministic project and feature initialization | Production-ready baseline structure and scaffolding |
| `ui-system-agent.md` | Shared UI foundation governance | Reusable `shared/ui` primitives and rules |
| `test-agent.md` | Testing strategy and coverage enforcement | Unit/component/integration/E2E coverage |
| `performance-agent.md` | Runtime and bundle optimization | Rendering/bundle/delivery optimizations |
| `refactor-agent.md` | Structural cleanup without feature changes | Maintainability and architecture consistency improvements |
| `qa-agent.md` | Final architecture and quality gate | Pass/fail validation with remediation routing |

## End-to-End Project Creation Process

1. **Create app at repository root**  
   Use a root-level Next.js app layout (for example `src/app`, `src/features`, `src/shared`) instead of nested app containers unless explicitly required.

2. **Set baseline (`developer.agent.md`)**  
   Apply quality, UX/UI, accessibility, testing, and performance standards to all following phases.

3. **Plan the system (`planner-agent.md`)**  
   Convert product requirements into:
   - business features
   - domain boundaries
   - server/client responsibility split
   - dependency graph
   - implementation order

4. **Lock architecture (`architecture-agent.md`)**  
   Enforce:
   - App Router
   - Server Components by default
   - Tailwind CSS as default styling system
   - strict typing
   - feature-based structure
   - service/mapping boundaries

5. **Validate dependencies (`dependency-agent.md`)**  
   Ensure clean boundaries:
   - no circular dependencies
   - no illegal feature coupling
   - shared layer usage is controlled

6. **Initialize project scaffolding (`init-agent.md`)**  
   Build deterministic baseline:
   - `src/app`, `src/features`, `src/shared`, `src/services`, `src/lib`, `src/tests`
   - feature skeletons
   - API/service conventions
   - testing and config foundations

7. **Create shared UI foundation (`ui-system-agent.md`)**  
   Build reusable `shared/ui` components with:
   - no business logic
   - stateless props-driven APIs
   - accessibility defaults
   - consistent interaction patterns

8. **Implement and validate tests (`test-agent.md`)**  
   Cover services, utilities, hooks/components, and critical user journeys with required thresholds.

9. **Optimize performance (`performance-agent.md`)**  
   Improve rendering strategy, dynamic imports, client bundle size, and media/font delivery.

10. **Refactor for maintainability (`refactor-agent.md`)**  
   Improve structure and consistency without changing product behavior.

11. **Run final quality gate (`qa-agent.md`)**  
   Block completion until architecture, flow, and dependency rules pass.

## Recommended Execution Order

1. `developer.agent.md`
2. `planner-agent.md`
3. `architecture-agent.md`
4. `dependency-agent.md`
5. `init-agent.md`
6. `ui-system-agent.md`
7. `test-agent.md`
8. `performance-agent.md`
9. `refactor-agent.md`
10. `qa-agent.md`

## Core Data Flow Rules

### Read flow

```text
Server Component -> Service -> Mapper -> UI
```

### Mutation flow

```text
UI -> Server Action -> Service -> DB/API -> Revalidate
```

## Handoff Contract Between Agents

- **Planner -> Init**: output must be implementation-ready (no ambiguity on boundaries or order).
- **Architecture -> All implementation agents**: server-first and layering rules are mandatory.
- **Dependency -> Init/QA**: dependency violations must be remediated before final acceptance.
- **Init -> Test/Performance/Refactor**: initialized structure must expose clear seams for validation and improvement.
- **QA (final gate)**: reports and blocks violations; fixes route back to owner agents.

## Notes

Some Next.js agent files in this repository are currently minimal/empty (`dependency-agent.md`, `ui-system-agent.md`, `test-agent.md`, `performance-agent.md`, `refactor-agent.md`, `qa-agent.md`).  
Keep them as explicit stages in the workflow so dependency governance, quality control, and optimization remain first-class when those specs are expanded.
