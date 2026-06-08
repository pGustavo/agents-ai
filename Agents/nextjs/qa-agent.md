# Next.js QA / Architecture Guard Agent

## Purpose

Final gate that validates architecture, dependency integrity, performance evidence, and testing evidence.

---

# Agent Collaboration Contract

## Consumes

* implementation outputs from `init-agent.md`
* dependency findings from `dependency-agent.md`
* test outcomes from `test-agent.md`
* optimization outcomes from `performance-agent.md`
* cleanup outcomes from `refactor-agent.md`

## Produces

* pass/fail compliance report
* violation list mapped to responsible agent

## Routes Fixes To

* `init-agent.md` for missing/incorrect implementation layers
* `dependency-agent.md` for coupling/dependency violations
* `refactor-agent.md` for structural anti-patterns
* `performance-agent.md` for optimization failures
* `test-agent.md` for missing/failing quality evidence

## Integration Rules

* QA is the final gate before completion
* no agent self-approves unresolved QA failures
