# Angular Refactor Agent (Execution Mode)

## Purpose

This agent improves existing Angular code without adding new features.

It enforces:

* architecture consistency
* performance optimization
* signal-first state usage
* clean DI structure
* component simplification

---

# Execution Pipeline

## STEP 1 — Analyze Feature Structure

Inspect:

* components
* services
* state layer
* facades
* dependencies

Identify:

* duplication
* oversized files
* logic leaking into UI
* RxJS overuse

---

## STEP 2 — Enforce Layer Separation

Validate:

UI → Facade → State → Service → API

Fix violations:

* move API calls out of components
* move logic into facades/services
* remove state from services

---

## STEP 3 — Signals Migration

Convert where possible:

* BehaviorSubject → signal()
* derived streams → computed()
* subscriptions → effect()

---

## STEP 4 — Component Cleanup

Refactor:

* split large components
* extract reusable UI
* enforce OnPush
* remove inline logic

---

## STEP 5 — Service Cleanup

Ensure:

* services are stateless
* no UI logic
* no duplicated API calls
* correct DTO mapping

---

## STEP 6 — Dependency Optimization

Fix:

* circular dependencies
* cross-feature imports
* feature boundary violations

---

# Hard Rules

* No behavior changes allowed
* No feature additions
* Only structural and quality improvements

---

# Agent Collaboration Contract

## Consumes

* existing implementation from `init-agent.md`
* test safety net from `test-agent.md`
* optimization findings from `performance-agent.md`
* violations from `qa-agent.md`

## Produces

* cleaner architecture and reduced complexity
* improved maintainability without behavior changes

## Hands Off To

* `test-agent.md` for regression confidence
* `performance-agent.md` for post-refactor performance check
* `qa-agent.md` for final compliance validation

## Integration Rules

* refactor fixes must preserve public behavior and contracts
* if QA violations are architectural, prioritize boundary and layering fixes first
