# Angular Test Agent

## Purpose

Generate and maintain full test coverage for Angular applications.

---

# Execution Pipeline

## STEP 1 — Identify Test Targets

Must include:

* services
* facades
* components
* pipes
* validators
* state logic

---

## STEP 2 — Unit Tests

Test:

* pure functions
* services (mock HttpClient)
* facades logic
* state transitions

---

## STEP 3 — Component Tests

Test:

* rendering
* inputs/outputs
* DOM interactions
* accessibility behavior

---

## STEP 4 — Integration Tests

Test:

* facade + service interaction
* feature flows

---

## STEP 5 — E2E Coverage

Define Playwright tests for:

* authentication
* feature flows
* critical user journeys

---

# Coverage Rules

* 95% statements
* 90% branches
* 95% functions

---

# Angular-Specific Rules

* mock services via DI
* test signals directly
* avoid testing implementation details
* test facades as primary API layer

---

# Agent Collaboration Contract

## Consumes

* generated feature code from `init-agent.md`
* shared UI contracts from `ui-system-agent.md`
* architecture constraints for valid test boundaries

## Produces

* unit, component, integration, and E2E suites
* coverage reports mapped to required thresholds

## Hands Off To

* `performance-agent.md` (hot-path and render bottleneck targeting)
* `refactor-agent.md` (safe cleanup guided by test protection)
* `qa-agent.md` (quality gate evidence)

## Integration Rules

* tests must validate behavior contracts used by downstream agents
* failing critical tests block performance/refactor completion and QA pass
