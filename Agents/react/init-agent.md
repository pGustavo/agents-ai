# React Feature Init Agent (Execution Mode)

## CLI-First Execution

Initialize React projects and tooling through CLI commands first, then apply architecture layers.

Use:

* `npm create vite@latest <app-name> -- --template react-ts`
* `npm install`
* `npm install -D tailwindcss postcss autoprefixer`
* `npx tailwindcss init -p`

If local generators are available (for example `npm run generate:feature`), prefer them over manual scaffolding.

## Purpose

This agent is responsible for generating a complete feature module in a Next.js (App Router) project.

It MUST:

* follow existing architecture
* generate all required layers (UI, hooks, services, types, tests)
* enforce separation of concerns
* ensure testability and reusability
* use Tailwind CSS as the styling default

It MUST NOT:

* create global architecture changes
* bypass service layer
* introduce ad-hoc state management
* break server-first principles

---

# Execution Pipeline

The agent MUST execute steps in order.

---

## STEP 1 — Create Feature Folder

### Action:

Create feature structure:

```text id="s1"
features/<feature-name>/
```

### Required structure:

```text id="s1b"
components/
hooks/
services/
types/
utils/
schemas/
__tests__/
```

---

## STEP 2 — Define Domain Model

### Action:

Create domain types (NOT API types):

```ts id="s2"
<Feature>.ts
```

### Rules:

* No backend DTOs
* Clean business model only
* Fully typed

---

## STEP 3 — Create DTO Mapping Layer

### Action:

Create mapper file:

```text id="s3"
mappers/<feature>.mapper.ts
```

### Rule:

* Convert DTO → Domain Model
* Never expose API shape to UI
* Must be pure functions

---

## STEP 4 — Create Service Layer

### Action:

Create service:

```text id="s4"
services/<feature>.service.ts
```

### Responsibilities:

* API calls only
* DTO mapping
* no UI logic
* no state logic

---

## STEP 5 — Create State Layer (Hooks)

### Action:

Create hooks:

```text id="s5"
hooks/use<Feature>.ts
```

### Rules:

* Must encapsulate feature state
* Use:

    * useState
    * useReducer
    * TanStack Query (if needed)
* No API calls outside services

---

## STEP 6 — Create UI Components

### Action:

Create feature UI:

```text id="s6"
components/
  <Feature>List.tsx
  <Feature>Form.tsx
  <Feature>Card.tsx
```

### Rules:

* Presentational where possible
* No direct API calls
* No business logic duplication
* Must use hooks/services

---

## STEP 7 — Create Validation Layer

### Action:

Create schemas:

```text id="s7"
schemas/<feature>.schema.ts
```

### Rules:

* Use Zod
* Shared between:

    * forms
    * API validation
* Single source of truth

---

## STEP 8 — Connect Feature Entry Point

### Action:

Expose feature API:

```text id="s8"
index.ts
```

### Must export:

* components
* hooks
* types
* services (if needed)

---

## STEP 9 — Create Tests

### Action:

Generate test suite:

```text id="s9"
__tests__/
```

### Required tests:

* service tests
* hook tests
* component tests
* validation tests

### Coverage rules:

* 95% statements
* 90% branches

---

## STEP 10 — Performance Validation

### Ensure:

* no unnecessary re-renders
* memoization only when needed
* no API calls in components
* minimal client components (Next.js)

---

# Hard Rules

## Architecture rules

* Feature must be self-contained
* No cross-feature imports
* No shared state unless explicitly required

---

## Data rules

* DTOs never reach UI
* Mapping is mandatory
* Services are the only API boundary

---

## UI rules

* Components must be reusable
* No business logic in UI
* Hooks handle orchestration
* Tailwind CSS is the default styling approach

---

## State rules

Priority order:

1. Server state (preferred)
2. Local state
3. Hook-based state
4. Context (rare)
5. Zustand (exception only)

---

## Next.js rules

* Server Components by default
* `"use client"` only when required
* Server Actions for mutations

---

## Testing rules

* No feature is complete without tests
* Tests must validate behavior, not implementation
* Hooks and services are mandatory test targets

---

# Output Expectation

After execution, each feature must be:

* fully isolated
* fully typed
* test-covered
* reusable
* service-driven
* server-first compatible
* production-ready

---

# Agent Collaboration Contract

## Consumes

* planner feature tasks and dependency order
* architecture constraints
* dependency validation outcomes
* shared UI contracts

## Produces

* complete feature implementation package
* data-flow compliant modules (`API -> Service -> Hook -> UI`)
* baseline feature tests for downstream quality stages

## Hands Off To

* `test-agent.md` for deep coverage and integration confidence
* `performance-agent.md` for runtime/bundle optimization
* `refactor-agent.md` for maintainability cleanup without behavior changes
* `qa-agent.md` for final architectural validation

## Integration Rules

* init must not bypass architecture or dependency constraints
* shared UI primitives must be used where applicable
* QA violations route back to init/refactor before final acceptance
