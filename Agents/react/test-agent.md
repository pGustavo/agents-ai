# React Test Agent

## CLI-First Execution

Testing must run through CLI scripts and command-line tooling.

Use:

* `npm run test`
* `npm run test -- --coverage`
* `npx playwright test` (when configured)

Avoid undocumented/manual test execution paths when CLI commands exist.

## Purpose

Ensure full test coverage for React / Next.js applications.

---

# Execution Pipeline

## STEP 1 — Identify Test Targets

* hooks
* services
* components
* utilities
* server actions (Next.js)

---

## STEP 2 — Unit Tests

Test:

* pure functions
* services (API mocking)
* hooks (state + logic)

Tools:

* Vitest

---

## STEP 3 — Component Tests

Test:

* rendering
* user interaction
* state changes
* accessibility

Tools:

* React Testing Library

---

## STEP 4 — Integration Tests

Test:

* hook + service interaction
* feature flows
* API + UI coordination

---

## STEP 5 — E2E Tests

Test:

* full user journeys
* auth flows
* critical business flows

Tools:

* Playwright

---

# Coverage Rules

* 95% statements
* 90% branches
* 95% functions

---

# React Rules

* test hooks as primary unit
* avoid testing implementation details
* prefer behavior testing

---

# Agent Collaboration Contract

## Consumes

* implementation artifacts from `init-agent.md`
* shared UI contracts from `ui-system-agent.md`
* architecture constraints for valid test boundaries

## Produces

* unit, component, integration, and E2E test suites
* coverage evidence aligned with required thresholds

## Hands Off To

* `performance-agent.md` for optimization targeting based on test behavior
* `refactor-agent.md` for safe structural cleanup under test protection
* `qa-agent.md` for final quality-gate evidence

## Integration Rules

* critical failing tests block downstream QA acceptance
* behavior contracts must remain stable across refactor/performance passes
