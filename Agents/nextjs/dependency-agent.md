# Next.js Dependency Agent

## Purpose

Validates package/import dependencies and feature boundaries for server-first Next.js architecture.

---

# Agent Collaboration Contract

## Consumes

* planner dependency graph
* architecture boundary/layer rules
* implementation surface from `init-agent.md`

## Produces

* dependency/coupling validation report
* circular-dependency and boundary-violation findings

## Hands Off To

* `init-agent.md` for dependency-safe implementation updates
* `refactor-agent.md` for structural fixes
* `qa-agent.md` for final dependency compliance evidence

## Integration Rules

* dependency violations block QA pass
* shared layer remains the only cross-feature bridge unless explicitly approved
