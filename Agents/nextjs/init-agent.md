# Next.js Init Agent (Execution Mode)

## Purpose

This agent MUST execute a deterministic initialization pipeline to create a production-ready Next.js architecture.

It is not allowed to skip steps, reorder steps, or assume defaults.

---

# Execution Pipeline

The agent MUST execute the following commands in order:

---

## STEP 1 — Create base project structure

### Action:

Create folder structure:

```text id="s1"
src/
├── app/
├── features/
├── shared/
├── services/
├── lib/
├── styles/
└── tests/
```

### Rule:

No files outside this structure unless explicitly required by Next.js.

---

## STEP 2 — Create Core Architecture Layer

### Action:

Generate:

```text id="s2"
src/shared/
src/services/
src/lib/
```

### Include:

* shared/ui (base components)
* shared/hooks
* shared/utils
* shared/types
* services (API layer abstraction)
* lib (framework utilities)

---

## STEP 3 — Create Feature Scaffolding

### Action:

Create default feature modules:

```text id="s3"
features/
  auth/
  users/
  championships/
  teams/
  athletes/
```

Each feature MUST include:

```text id="s3b"
components/
hooks/
services/
types/
utils/
schemas/
```

---

## STEP 4 — Create UI System Foundation

### Action:

Inside `shared/ui`, generate base components:

* Button
* Input
* Modal
* Card
* Table

### Rule:

All UI components must be:

* reusable
* stateless
* no business logic

---

## STEP 5 — Create API Layer Standard

### Action:

Generate service pattern:

```text id="s5"
services/
  athlete.service.ts
  team.service.ts
  championship.service.ts
```

### Rule:

* No fetch in components
* All API calls go through services
* DTO → domain mapping required

---

## STEP 6 — Create State Strategy

### Action:

Define and enforce:

* Server Components first
* Local state second
* Context rare
* Zustand only if required

### Rule:

Do NOT introduce global state by default.

---

## STEP 7 — Create Testing Foundation

### Action:

Install and configure:

* Vitest
* Testing Library
* Playwright

Generate folders:

```text id="s7"
tests/
  unit/
  integration/
  e2e/
```

---

## STEP 8 — Create Configuration Layer

### Action:

Generate:

* ESLint (strict)
* Prettier
* TypeScript strict config
* Next.js config optimized for performance

### Rules:

* no `any`
* no unused imports
* strict mode enforced

---

## STEP 9 — Create Performance Baseline

### Action:

Enforce:

* Server Components by default
* dynamic imports for heavy modules
* next/image usage only
* next/font usage only

---

## STEP 10 — Final Validation Check

Before finishing, verify:

✔ Feature-based architecture exists
✔ Shared UI system exists
✔ Services layer exists
✔ Testing setup exists
✔ Strict typing enabled
✔ No flat structure
✔ No demo/tutorial patterns

---

# Hard Rules

* Do NOT generate features logic
* Do NOT create UI outside shared/ui unless feature-specific
* Do NOT use global state without justification
* Do NOT use `"use client"` unless required
* Do NOT bypass service layer for API calls

---

# Output Expectation

After execution, the project must be:

* production-ready
* scalable
* testable
* consistent
* performance-optimized

---

# Agent Collaboration Contract

## Consumes

* planner feature/dependency output
* architecture constraints
* dependency validation outcomes
* shared UI rules

## Produces

* deterministic project scaffolding and conventions
* initialization artifacts for feature implementation
* baseline quality/performance/test setup

## Hands Off To

* `ui-system-agent.md` for shared primitive finalization
* `test-agent.md` for depth/coverage enforcement
* `performance-agent.md` for runtime and bundle optimization
* `refactor-agent.md` for structural cleanup
* `qa-agent.md` for final quality gating

## Integration Rules

* init must preserve server-first architecture and layering contracts
* downstream validation failures route fixes back to init/refactor as applicable
