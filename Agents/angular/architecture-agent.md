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

# Angular Standards

## Framework Version

* Latest stable Angular version
* Standalone Components only
* Strict TypeScript mode
* ES2022+ target

Never generate:

* NgModules
* Legacy Angular patterns
* Deprecated APIs

---

# Project Structure

Use Feature-Based Architecture.

The Angular application must be created at repository root (not in nested workspace directories).

```text
src/
└── app/
    ├── core/
    │   ├── services/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── models/
    │   └── config/
    │
    ├── shared/
    │   ├── components/
    │   ├── directives/
    │   ├── pipes/
    │   ├── ui/
    │   ├── validators/
    │   └── utils/
    │
    ├── features/
    │   ├── championships/
    │   ├── teams/
    │   ├── athletes/
    │   ├── registrations/
    │   └── users/
    │
    └── layouts/
```

Never organize by technical type at root level.

Bad:

```text
components/
services/
models/
```

Good:

```text
features/championships/
features/athletes/
features/teams/
```

---

# State Management

## Default Choice

Use Signals.

Use:

* signal()
* computed()
* effect()

for local state.

Example:

```typescript
readonly athletes = signal<Athlete[]>([]);
readonly selectedAthlete = signal<Athlete | null>(null);

readonly athleteCount = computed(
  () => this.athletes().length
);
```

---

## RxJS Usage

Use RxJS only for:

* HTTP
* WebSockets
* Streams
* External async events

Avoid:

```typescript
BehaviorSubject
Subject
ReplaySubject
```

when a Signal solves the problem.

---

## Global Store

Do not introduce NgRx or Signal Store by default.

A store is allowed only if:

* state shared across many features
* complex caching needed
* state synchronization required
* application state becomes difficult to manage

Default order:

1. Local Signal
2. Shared Service + Signal
3. Signal Store
4. NgRx

---

# Components

## Smart vs Presentational

Prefer Presentational Components.

Presentational:

* Inputs
* Outputs
* No business logic
* Reusable

Smart Components:

* Feature orchestration
* Data loading
* API interaction

Example:

```text
AthleteListComponent
AthleteCardComponent
AthleteFormComponent
```

Reusable UI should live in shared.

---

## Component Size

Target:

* < 200 lines

Maximum:

* 400 lines

If exceeded:

* extract child components
* extract services
* extract utility functions

---

## Component Reusability

Always ask:

Can another feature use this component?

If yes:

Move to:

```text
shared/components
```

Avoid feature-specific naming in reusable components.

Bad:

```text
ChampionshipButtonComponent
```

Good:

```text
PrimaryButtonComponent
```

---

# Change Detection

Always use:

```typescript
changeDetection: ChangeDetectionStrategy.OnPush
```

Never use Default strategy unless justified.

---

# Templates

Prefer Angular Control Flow.

Use:

```html
@if ()
@for ()
@switch ()
```

Avoid legacy syntax when possible.

Track lists correctly.

```html
@for (athlete of athletes(); track athlete.id)
```

Never omit tracking.

---

# Services

Services handle:

* API communication
* Business logic
* Data transformation

Components should remain thin.

Bad:

```typescript
component performs data mapping
component performs filtering
component performs sorting
```

Good:

```typescript
service provides ready-to-use data
```

---

# Dependency Injection

Prefer:

```typescript
private readonly api = inject(ApiService);
```

Avoid constructor injection unless necessary.

---

# API Layer

Every feature should contain:

```text
services/
models/
mappers/
```

API contracts must never leak directly into UI.

Always map:

```typescript
AthleteDto
```

to

```typescript
Athlete
```

before reaching components.

---

# Forms

Use Reactive Forms.

Never use Template Driven Forms.

Requirements:

* typed forms
* validators
* reusable form controls

Example:

```typescript
FormGroup<{
  name: FormControl<string>;
}>
```

---

# Styling

Use Tailwind CSS as the required styling system.

Allowed exceptions:

* minimal component-scoped styles when utility classes cannot reasonably express the rule

Avoid:

* large global stylesheets
* inline styles

Design tokens (colors, spacing, typography, radius, shadows) must be centralized and consistent.

---

# Performance

Performance is mandatory.

## Lazy Loading

All features lazy loaded.

```typescript
loadComponent()
loadChildren()
```

---

## Rendering

Use:

* trackBy
* Signals
* OnPush

Avoid:

* unnecessary subscriptions
* repeated computations in templates

Bad:

```html
{{ calculateSomething() }}
```

Good:

```typescript
readonly total = computed(...)
```

---

## Images

Use:

* modern formats
* lazy loading
* responsive sizing

---

## Bundle Size

Avoid:

* large UI libraries
* unnecessary dependencies
* duplicate packages

Prefer native Angular solutions.

---

# Accessibility

All features must support:

* keyboard navigation
* screen readers
* focus management
* WCAG AA contrast

Every form control must have:

* label
* validation message
* aria attributes

---

# Error Handling

Never silently fail.

All API requests must provide:

* loading state
* success state
* error state

Users should always know what is happening.

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
* pipes
* guards
* validators
* utility functions
* complex components

---

## Component Tests

Test:

* rendering
* inputs
* outputs
* interactions
* accessibility

---

## E2E Tests

Cover:

* authentication
* championship creation
* team registration
* athlete registration
* competition enrollment
* result management

Critical user flows must always be tested.

---

# Code Quality

Never generate:

* any
* TODO comments
* dead code
* duplicated logic
* nested subscriptions

Prefer:

* strong typing
* pure functions
* composition
* dependency inversion

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

* planner outputs (feature map, boundaries, dependency order)
* `../developer.agent.md` standards baseline

## Produces

* authoritative architecture constraints for all implementation agents
* approved project and feature structure

## Hands Off To

* `dependency-agent.md` to validate package and import boundaries
* `ui-system-agent.md` to enforce shared UI architecture
* `init-agent.md` to generate features under strict constraints
* `refactor-agent.md` and `qa-agent.md` for ongoing compliance checks

## Integration Rules

* architecture rules are mandatory and cannot be bypassed downstream
* any conflict with planner output must be resolved before init starts
