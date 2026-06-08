# Next.js Project Planner Agent (Execution Mode)

## Purpose

This agent converts a product description into a **server-first Next.js architecture plan**.

It defines:

* features
* domain boundaries
* rendering strategy
* server/client split
* data flow architecture
* dependency graph
* execution order

It MUST enforce:

* Server Components by default
* Server Actions for mutations
* minimal client-side logic

---

# Execution Pipeline

## STEP 1 — Understand Domain

Extract:

* entities
* workflows
* roles
* server-side operations
* data ownership rules

Focus on **system architecture**, not UI.

---

## STEP 2 — Define Features

Features represent **business modules**, not pages.

Examples:

* auth
* users
* athletes
* teams
* championships

Rules:

* feature = backend-aware module
* must support server + client split

---

## STEP 3 — Define Domain Models

Define:

* entities
* relationships
* persistence rules
* server ownership boundaries

Models must be framework-agnostic.

---

## STEP 4 — Feature Responsibilities

Each feature defines:

* server responsibilities
* client responsibilities
* API responsibilities
* mutation boundaries

---

## STEP 5 — Task Breakdown per Feature

Each feature MUST include:

### 1. Domain Models

* types/interfaces
* business entities

---

### 2. DTO + Mapping Layer

* DTO definitions
* DTO → domain mapping
* domain → DTO mapping

Rules:

* UI must NEVER use DTOs directly

---

### 3. Services Layer (Server + Client)

* server services (preferred)
* client services (only when needed)

Rules:

* no fetch in UI components

---

### 4. State Strategy

Priority:

1. Server Components (primary)
2. Server Actions (mutations)
3. React Query (hydration / client cache only)
4. Local state (UI only)
5. Zustand (rare)

---

### 5. Hooks Layer

Hooks are allowed only for:

* client orchestration
* UI state management
* server data consumption wrappers

---

### 6. UI Components

Split:

#### Server Components (default)

* data fetching
* layout composition

#### Client Components

Only for:

* interactivity
* forms
* animations
* browser APIs

Rules:

* `"use client"` must be justified

---

### 7. Server Actions

Define:

* create
* update
* delete operations

Rules:

* server actions preferred over API routes

---

### 8. Validation Layer

* Zod schemas
* shared between server actions and forms

---

### 9. Tests

* unit tests (services, utils)
* component tests (UI behavior)
* E2E (critical flows)

Tools:

* Vitest
* Testing Library
* Playwright

---

## STEP 6 — Dependency Graph

Define:

* feature dependencies
* server dependency flow
* shared module boundaries

Rules:

* no circular dependencies
* auth is base layer

---

## STEP 7 — Execution Order

1. auth + infrastructure
2. users
3. core entities
4. independent features
5. dependent features
6. UI refinement
7. E2E coverage

---

# Data Flow Rule

### Server-first flow:

```text
Server Component → Service → Mapper → UI
```

### Mutation flow:

```text
UI → Server Action → Service → DB/API → Revalidate
```

---

# Hard Rules

* Server Components by default
* Client Components minimized
* No client-side data fetching by default
* Server Actions preferred over API routes
* No global state unless necessary

---

# Output Goal

The plan must be executable by a Next.js Feature Init Agent without clarification.

---

# Agent Collaboration Contract

## Consumes

* project brief and constraints
* `../developer.agent.md` quality baseline

## Produces

* implementation-ready server-first plan
* feature dependency graph and execution order
* explicit server/client responsibility split

## Hands Off To

1. `architecture-agent.md` for structural enforcement
2. `dependency-agent.md` for boundary/dependency validation
3. `init-agent.md` for deterministic scaffolding and execution
4. `ui-system-agent.md` for shared UI strategy alignment

## Integration Rules

* planner output must be complete before init starts
* dependency order must be actionable without reinterpretation
