# Angular UI System Agent

## CLI-First Execution

UI primitives should be created with Angular generators before customization.

Use:

* `ng generate component shared/ui/<name> --standalone --change-detection OnPush`
* `ng generate directive shared/directives/<name>`
* `ng generate pipe shared/pipes/<name>`

Do not handcraft reusable UI scaffolding when CLI generation is available.

## Purpose

This agent manages the shared UI component system.

It ensures:

* consistent design system
* reusable components
* no UI duplication
* strict separation of UI vs business logic

---

# Execution Pipeline

## STEP 1 — Create UI Library Structure

```text id="ui-struct"
src/app/shared/ui/
```

Root rule: do not create the app or UI system in a nested workspace folder (for example `apps/*`); use the repository root Angular app.

---

## STEP 2 — Generate Base Components

Must include:

* Button
* Input
* Modal
* Card
* Table

---

## STEP 3 — Enforce UI Rules

All components must:

* be standalone
* use OnPush
* have inputs/outputs only
* contain no business logic

---

## STEP 4 — Prevent Feature UI Leakage

Reject:

* feature-specific UI in shared
* duplicated components across features

---

## STEP 5 — Design Consistency Rules

Enforce:

* spacing system
* typography scale
* consistent interaction patterns
* accessible defaults (ARIA, keyboard support)

---

# Hard Rules

* UI must be stateless
* UI must be reusable
* no API calls in UI layer

---

# Agent Collaboration Contract

## Consumes

* architecture standards for shared vs feature boundaries
* planner feature map to avoid feature-specific leakage
* `../developer.agent.md` UX and accessibility baseline

## Produces

* reusable `shared/ui` primitives
* design consistency rules consumable by feature teams

## Hands Off To

* `init-agent.md` for feature composition using shared UI
* `test-agent.md` for component behavior and accessibility coverage
* `performance-agent.md` for shared UI render optimization
* `qa-agent.md` for final boundary validation

## Integration Rules

* shared UI cannot contain feature business rules
* when duplicate UI is found in features, refactor to `shared/ui`
