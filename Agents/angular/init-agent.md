# Angular Feature Init Agent (Execution Mode)

## Purpose

This agent generates a complete Angular feature module using a strict, layered architecture.

It MUST:

* follow existing project structure
* enforce feature isolation
* use signals-first state management
* ensure service-based API access
* generate full test coverage
* keep components reusable and clean

It MUST NOT:

* introduce NgRx unless explicitly required
* bypass services for HTTP
* mix UI and business logic
* create shared/global state without justification

## Root Directory Rule

All generated code must be placed in the Angular app located at repository root.

Base paths:

```text
src/app/features/
src/app/shared/
src/app/core/
```

---

# Execution Pipeline

Steps MUST be executed in order.

---

## STEP 1 — Create Feature Structure

### Action:

Create:

```text id="a1"
src/app/features/<feature-name>/
```

### Required structure:

```text id="a1b"
components/
pages/
services/
state/
models/
mappers/
utils/
validators/
__tests__/
```

### Rule:

Feature must be fully isolated.

No cross-feature dependencies.

---

## STEP 2 — Define Domain Model

### Action:

Create domain model:

```text id="a2"
models/<feature>.model.ts
```

### Rules:

* Domain model ≠ API DTO
* Must be UI/business friendly
* Fully typed (strict mode)

---

## STEP 3 — Create DTO Mapping Layer

### Action:

Create mapper:

```text id="a3"
mappers/<feature>.mapper.ts
```

### Responsibilities:

* DTO → Domain model conversion
* Domain → DTO conversion (if needed)

### Rules:

* Pure functions only
* No Angular dependencies
* No side effects

---

## STEP 4 — Create Service Layer

### Action:

Create service:

```text id="a4"
services/<feature>.service.ts
```

### Responsibilities:

* HTTP communication
* API calls only
* DTO handling
* error propagation

### Rules:

* Never store state in services
* Never handle UI logic
* Must return typed observables or promises

---

## STEP 5 — Create State Layer (Signals First)

### Action:

Create state file:

```text id="a5"
state/<feature>.state.ts
```

### Rules:

* Use signals exclusively when possible
* computed() for derived state
* effect() for side effects

### Allowed fallback:

* RxJS only for external async streams

### Forbidden:

* NgRx by default
* BehaviorSubject for UI state

---

## STEP 6 — Create Hook-like Facade (Angular Service Wrapper)

### Action:

Create facade:

```text id="a6"
state/<feature>.facade.ts
```

### Responsibilities:

* orchestrate service + state
* expose clean API to components
* hide implementation details

### Example responsibilities:

* load data
* trigger updates
* expose computed signals

---

## STEP 7 — Create Components

### Action:

Create UI components:

```text id="a7"
components/
  <feature>-list.component.ts
  <feature>-form.component.ts
  <feature>-card.component.ts
```

### Rules:

* Standalone components only
* OnPush change detection mandatory
* No direct API calls
* No business logic
* Use facade/state only

---

## STEP 8 — Create Pages (Route Layer)

### Action:

Create route entry components:

```text id="a8"
pages/<feature>.page.ts
```

### Responsibilities:

* layout composition
* route-level orchestration
* connect components + facade

### Rule:

Pages must be thin.

---

## STEP 9 — Create Validators & Forms

### Action:

Create validation layer:

```text id="a9"
validators/<feature>.validator.ts
```

and/or reactive forms:

```text id="a9b"
forms/<feature>.form.ts
```

### Rules:

* Reactive Forms only
* Strong typing required
* Validators reusable

---

## STEP 10 — Create Tests

### Action:

Generate full test suite:

```text id="a10"
__tests__/
```

### Required coverage:

* services
* facades
* state logic
* components
* mappers
* validators

### Tools:

* Jasmine/Karma OR Jest
* Angular Testing Library (preferred)

---

## STEP 11 — Performance Validation

Ensure:

* OnPush everywhere
* signals used instead of unnecessary RxJS
* no redundant subscriptions
* minimal change detection triggers
* lazy loading enabled for feature

---

# Hard Rules

## Architecture

* Feature must be fully isolated
* No direct cross-feature imports
* No shared state unless explicitly defined

---

## State

Priority order:

1. Signals (default)
2. Facade services
3. RxJS (streams only)
4. NgRx (exception only)

---

## Services

* HTTP only
* no UI logic
* no state storage

---

## Components

* no business logic
* no direct HTTP
* must use facade/state layer

---

## Change Detection

Mandatory:

```ts id="cd1"
ChangeDetectionStrategy.OnPush
```

---

## Data Flow Rule

Strict flow:

```text id="df1"
API → Service → Mapper → State → Facade → Component
```

UI must never bypass this chain.

---

## Angular Rules

* Standalone components only
* No NgModules
* Lazy-load all features
* Strict typing required

---

## Testing Rules

* No feature is complete without tests
* Must test behavior, not implementation
* Facade is a primary test target

---

# Output Expectation

After execution, each feature must be:

* fully isolated
* signal-driven
* service-based
* test-covered
* reusable
* performance-optimized
* production-ready

---

# Agent Collaboration Contract

## Consumes

* planner feature breakdown and dependency order
* architecture rules
* dependency constraints
* shared UI primitives contract

## Produces

* runnable feature implementation
* layer-compliant data flow
* baseline test suite per feature

## Hands Off To

* `test-agent.md` for full test depth and critical journeys
* `performance-agent.md` for runtime and bundle optimization
* `refactor-agent.md` for non-functional structural cleanup
* `qa-agent.md` for final architecture gate

## Integration Rules

* init must not invent architecture outside planner + architecture contracts
* when UI primitives exist in `shared/ui`, feature code must consume them
* any violations found by QA must be fixed in init/refactor, then revalidated
