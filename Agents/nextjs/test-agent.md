# Next.js Test Agent

## Purpose

Enforces behavior-focused test coverage for server-first Next.js applications.

---

# Agent Collaboration Contract

## Consumes

* implementation artifacts from `init-agent.md`
* shared UI contracts from `ui-system-agent.md`
* architecture constraints for valid test boundaries

## Produces

* unit, component, integration, and E2E suites
* coverage evidence aligned with thresholds

## Hands Off To

* `performance-agent.md` for optimization targets
* `refactor-agent.md` for safe structural cleanup
* `qa-agent.md` for final quality evidence

## Integration Rules

* critical failing tests block QA acceptance
* behavior contracts must remain stable through refactor/performance cycles
