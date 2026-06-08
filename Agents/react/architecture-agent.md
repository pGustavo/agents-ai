# Architecture

## Core Principles

The codebase must prioritize:

1. Simplicity over cleverness
2. Readability over brevity
3. Composition over inheritance
4. Reusability over duplication
5. Performance by default
6. Accessibility by default
7. Testability by design

Every implementation must answer:

* Is this the simplest solution?
* Can this be reused?
* Is it easy to test?
* Will it scale?
* Does it improve user experience?

---

# Framework Standards

## React

Use:

* Functional Components only
* TypeScript strict mode
* React Hooks
* React Server Components when applicable
* Suspense when beneficial

Never generate:

* Class Components
* Deprecated lifecycle methods
* Legacy React patterns

---

# Next.js Standards

Default to:

* App Router
* Server Components
* Server Actions
* Route Groups
* Dynamic Imports
* Metadata API

Prefer server rendering whenever possible.

Use Client Components only when required.

Examples:

* User interaction
* Browser APIs
* Local state
* Animations

Everything else should remain a Server Component.

---

# Project Structure

Use Feature-Based Architecture.

```text
src/
├── app/
│
├── features/
│   ├── championships/
│   ├── teams/
│   ├── athletes/
│   ├── registrations/
│   └── users/
│
├── shared/
│   ├── components/
│   ├── ui/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── constants/
│
├── services/
│
└── lib/
```

Never organize by technical type only.

Bad:

```text
components/
pages/
hooks/
services/
```

Good:

```text
features/championships/
features/teams/
features/athletes/
```

---

# State Management

## Default Strategy

State should live as close as possible to where it is used.

Order of preference:

1. Local State
2. URL State
3. Context
4. Zustand
5. Global Store

Never introduce global state unnecessarily.

---

## Local State

Use:

```tsx
useState()
```

for simple state.

Use:

```tsx
useReducer()
```

for complex state transitions.

---

## Server State

Use:

```tsx
TanStack Query
```

for:

* fetching
* caching
* mutations
* optimistic updates

Do not store server state inside Zustand or Context.

---

## Global State

Use Zustand only when state is genuinely shared across many features.

Examples:

* authentication
* user preferences
* theme

Avoid Redux unless project complexity clearly justifies it.

---

# Components

## Component Types

Separate components into:

### UI Components

Reusable.

No business logic.

Examples:

```text
Button
Input
Modal
Table
Card
```

### Feature Components

Feature-specific behavior.

Examples:

```text
AthleteList
ChampionshipForm
TeamRegistration
```

---

## Component Size

Target:

* < 200 lines

Maximum:

* 400 lines

Refactor beyond that.

---

## Reusability

Before creating a component ask:

Can another feature use this?

If yes:

Move to:

```text
shared/ui
```

Avoid creating feature-specific versions of generic components.

Bad:

```text
ChampionshipButton
```

Good:

```text
Button
```

---

# Hooks

Business logic belongs in hooks.

Bad:

```tsx
large components containing
fetching
mapping
sorting
validation
```

Good:

```tsx
useAthletes()
useChampionships()
useRegistration()
```

Components should focus on rendering.

---

# API Layer

All API communication goes through services.

Example:

```text
services/
├── athlete.service.ts
├── championship.service.ts
└── registration.service.ts
```

Components never call fetch directly.

---

# DTO Mapping

Never expose API contracts directly to UI.

Always map:

```ts
AthleteDto
```

into:

```ts
Athlete
```

before reaching components.

---

# Performance

Performance is a requirement.

---

## Rendering

Avoid unnecessary re-renders.

Use:

```tsx
memo
useMemo
useCallback
```

only when measurement indicates value.

Do not prematurely optimize.

---

## Server Components

Prefer Server Components.

Client Components should be the exception.

---

## Dynamic Imports

Use:

```tsx
dynamic()
```

for:

* charts
* editors
* large libraries
* heavy feature modules

---

## Images

Use:

```tsx
next/image
```

always.

Requirements:

* responsive sizing
* lazy loading
* optimized formats

---

## Bundle Size

Avoid:

* unnecessary dependencies
* duplicate libraries
* oversized component libraries

Prefer lightweight solutions.

---

# Forms

Use:

```tsx
React Hook Form
```

with:

```tsx
Zod
```

validation.

Requirements:

* typed schemas
* reusable inputs
* shared validation logic

---

# Accessibility

Accessibility is mandatory.

Requirements:

* keyboard navigation
* focus management
* screen reader compatibility
* WCAG AA compliance

Every interactive element must be usable without a mouse.

---

# Error Handling

Every async operation requires:

* loading state
* success state
* error state

Never leave users without feedback.

---

# Testing

Testing is mandatory.

## Coverage Targets

Statements: 95%+

Functions: 95%+

Branches: 90%+

Lines: 95%+

---

## Unit Testing

Required for:

* hooks
* utilities
* services
* validators

Tools:

```text
Vitest
Testing Library
```

---

## Component Testing

Test:

* rendering
* interactions
* accessibility
* edge cases

Focus on behavior rather than implementation details.

---

## E2E

Use:

```text
Playwright
```

Critical user journeys must always be covered.

Examples:

* login
* championship creation
* team registration
* athlete registration
* competition enrollment

---

# Styling

Tailwind CSS is required as the default styling system.

CSS Modules are allowed only for targeted edge cases where utility classes are not sufficient.

Avoid:

* inline styles
* global CSS sprawl

Design system tokens should control:

* colors
* spacing
* typography
* radius
* shadows

---

# Code Quality

Never generate:

* any
* TODO comments
* dead code
* duplicated logic
* magic numbers

Prefer:

* explicit types
* pure functions
* composition
* reusable abstractions

---

# Definition of Good Code

Good code is:

* understandable by a new developer
* easy to test
* easy to modify
* performant
* accessible
* reusable

If a solution is clever but harder to understand, choose the simpler solution.

---

# Agent Collaboration Contract

## Consumes

* planner outputs (features, responsibilities, dependency order)
* `../developer.agent.md` standards baseline

## Produces

* mandatory React/Next.js architecture constraints
* approved structure rules for all downstream agents

## Hands Off To

* `dependency-agent.md` for dependency graph/boundary checks
* `ui-system-agent.md` for shared UI boundary enforcement
* `init-agent.md` for implementation under architecture rules
* `refactor-agent.md` and `qa-agent.md` for continuous compliance

## Integration Rules

* architecture rules are mandatory and cannot be bypassed downstream
* architecture/planner conflicts must be resolved before init starts
