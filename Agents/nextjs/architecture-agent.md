# Next.js Architecture

## CLI-First Execution

Architecture bootstrap and configuration must use Next.js CLI commands first.

Use:

* `npx create-next-app@latest <app-name> --ts --eslint --app --src-dir --tailwind --import-alias "@/*"`
* `npm run dev`
* `npm run build`
* `npm run lint`

Prefer CLI-managed project setup over manual initialization.

## Core Principles

The codebase must prioritize:

1. Simplicity over cleverness
2. Server-first architecture
3. Reusability over duplication
4. Performance by default
5. Accessibility by default
6. Testability by design
7. Type safety everywhere

Every implementation must answer:

* Can this run on the server?
* Is this component reusable?
* Is this easy to test?
* Is this the simplest solution?
* Does this improve the user experience?

---

# Framework Standards

## Next.js

Required:

* Latest stable Next.js
* App Router
* TypeScript Strict Mode
* Server Components by default
* Server Actions when appropriate

Never generate:

* Pages Router
* Class Components
* Redux by default
* Client Components without justification

---

# Server First Philosophy

Default:

```tsx
Server Component
```

Only use:

```tsx
"use client"
```

when absolutely required.

Valid reasons:

* useState
* useEffect
* browser APIs
* event handlers
* animations
* third-party client libraries

Everything else remains server-rendered.

---

# Project Structure

```text
src/
│
├── app/
│   ├── (public)/
│   ├── (authenticated)/
│   ├── api/
│   ├── layout.tsx
│   └── page.tsx
│
├── features/
│   ├── championships/
│   ├── teams/
│   ├── athletes/
│   ├── registrations/
│   └── users/
│
├── shared/
│   ├── ui/
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   ├── constants/
│   └── utils/
│
├── services/
│
└── tests/
```

---

# Feature Structure

Every feature should follow:

```text
features/
└── athletes/
    ├── components/
    ├── hooks/
    ├── services/
    ├── actions/
    ├── schemas/
    ├── types/
    └── utils/
```

Features must be isolated.

Cross-feature imports should be minimized.

---

# Components

## Component Categories

### UI Components

Reusable.

No business logic.

Examples:

```text
Button
Input
Modal
Card
Table
```

Location:

```text
shared/ui
```

---

### Feature Components

Feature-specific.

Examples:

```text
AthleteForm
ChampionshipList
TeamRegistrationForm
```

Location:

```text
features/*
```

---

# Component Rules

Target:

* < 200 lines

Maximum:

* 400 lines

Beyond that:

* Extract hooks
* Extract utilities
* Extract child components

---

# Data Fetching

## Preferred Order

### Server Component Fetching

Use whenever possible.

```tsx
const athletes = await athleteService.getAll();
```

Preferred solution.

---

### Server Actions

Use for:

* create
* update
* delete

Example:

```tsx
"use server";

export async function createAthlete() {
}
```

---

### TanStack Query

Allowed only when:

* real-time updates
* polling
* optimistic updates
* complex client-side caching

Do not use React Query for data that can be fetched on the server.

---

# State Management

## Preferred Order

1. URL State
2. Server State
3. Local State
4. Context
5. Zustand

Avoid global state whenever possible.

---

## Local State

Use:

```tsx
useState
```

for simple UI state.

Use:

```tsx
useReducer
```

for complex transitions.

---

## Context

Allowed only for:

* theme
* authentication
* localization

Avoid Context for frequently changing state.

---

## Zustand

Only when state is shared across multiple unrelated features.

Must be justified.

---

# API Layer

Never fetch directly from components.

Use services.

```text
services/
├── athlete.service.ts
├── championship.service.ts
└── registration.service.ts
```

---

# DTO Mapping

Never expose backend DTOs directly.

Always transform:

```ts
AthleteDto
```

into:

```ts
Athlete
```

before reaching the UI.

---

# Validation

Use:

```text
Zod
```

for all schemas.

Requirements:

* request validation
* form validation
* API validation

Single source of truth.

---

# Forms

Required stack:

```text
React Hook Form
Zod
```

Every form must:

* be typed
* have validation
* support loading state
* support error state

---

# Performance

Performance is mandatory.

---

## Rendering Strategy

Prefer:

1. Static Rendering
2. ISR
3. Dynamic Rendering

Use the least expensive strategy possible.

---

## Dynamic Imports

Required for:

* editors
* charts
* maps
* large feature modules

Example:

```tsx
dynamic(() => import("./Chart"))
```

---

## Images

Always use:

```tsx
next/image
```

Requirements:

* responsive
* optimized
* lazy loaded

---

## Fonts

Use:

```tsx
next/font
```

Never load fonts manually.

---

## Bundle Size

Avoid:

* unnecessary dependencies
* duplicate libraries
* oversized UI frameworks

Prefer lightweight solutions.

---

# Accessibility

Required:

* WCAG AA
* keyboard navigation
* screen reader compatibility
* focus management

Every interactive element must be accessible.

---

# Error Handling

Every operation must provide:

* loading state
* success state
* error state

Never leave the user without feedback.

Use:

```tsx
loading.tsx
error.tsx
not-found.tsx
```

where appropriate.

---

# Testing

Testing is mandatory.

## Coverage Targets

Statements: 95%+

Functions: 95%+

Branches: 90%+

Lines: 95%+

---

## Unit Tests

Required for:

* services
* utilities
* hooks
* validators
* business logic

Use:

```text
Vitest
```

---

## Component Tests

Use:

```text
Testing Library
```

Test:

* rendering
* interactions
* accessibility

Focus on behavior.

---

## E2E

Use:

```text
Playwright
```

Critical user flows must be covered.

Examples:

* authentication
* championship creation
* team registration
* athlete registration
* competition enrollment

---

# Styling

Tailwind CSS is required as the default styling system.

CSS Modules are allowed only for targeted exceptions.

Avoid:

* inline styles
* large global stylesheets

Design tokens must control:

* colors
* spacing
* typography
* radius
* shadows

---

# Security

Required:

* input validation
* output sanitization
* server-side authorization
* secure cookies
* CSRF protection where applicable

Never trust client-side validation.

---

# Code Quality

Never generate:

* any
* TODO comments
* dead code
* duplicated logic
* magic numbers

Prefer:

* explicit typing
* composition
* pure functions
* reusable abstractions

---

# Definition of Good Code

Good code is:

* easy to understand
* easy to test
* easy to modify
* performant
* accessible
* reusable

If a solution is clever but harder to understand, choose the simpler solution.

When deciding between Client and Server Components, always choose Server Components unless a Client Component is strictly required.

---

# Agent Collaboration Contract

## Consumes

* planner outputs (features, boundaries, dependency order)
* `../developer.agent.md` standards baseline

## Produces

* mandatory Next.js architecture constraints
* server/client boundary rules for all downstream agents

## Hands Off To

* `dependency-agent.md` for dependency-boundary checks
* `init-agent.md` for structure-compliant initialization
* `ui-system-agent.md` for shared UI boundary enforcement
* `refactor-agent.md` and `qa-agent.md` for compliance loops

## Integration Rules

* architecture constraints are non-optional downstream
* planner/architecture conflicts must be resolved before init execution
