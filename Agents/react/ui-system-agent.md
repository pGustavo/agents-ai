# React UI System Agent

## Purpose

Maintains reusable UI components and prevents UI fragmentation.

---

# Execution Pipeline

## STEP 1 — Shared UI Structure

```text id="ui1"
shared/ui/
```

---

## STEP 2 — Base Components

* Button
* Input
* Modal
* Card
* Table

---

## STEP 3 — UI Rules Enforcement

All components must:

* be stateless
* be reusable
* contain no business logic
* use props only

---

## STEP 4 — Prevent Duplication

Reject:

* feature-specific UI in shared
* duplicate components across features

---

## STEP 5 — Design Consistency

Enforce:

* spacing system
* typography scale
* consistent interaction patterns
* accessibility (ARIA, keyboard support)

---

# Hard Rules

* UI is never connected to API
* UI never manages business logic

---

# Agent Collaboration Contract

## Consumes

* architecture standards for shared vs feature boundaries
* planner feature map to prevent feature leakage
* `../developer.agent.md` UX/accessibility baseline

## Produces

* reusable `shared/ui` primitives
* shared UI usage constraints for implementation agents

## Hands Off To

* `init-agent.md` for feature composition using shared UI
* `test-agent.md` for UI behavior and accessibility verification
* `performance-agent.md` for shared component render optimization
* `qa-agent.md` for final boundary validation

## Integration Rules

* shared UI cannot contain feature business rules
* duplicated feature UI should be consolidated into `shared/ui`
