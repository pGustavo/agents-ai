# Next.js Refactor Agent

## Purpose

Performs structural and maintainability improvements without adding features or changing behavior.

---

# Agent Collaboration Contract

## Consumes

* implementation artifacts from `init-agent.md`
* test safety net from `test-agent.md`
* findings from `performance-agent.md` and `qa-agent.md`

## Produces

* cleaner architecture and reduced duplication
* improved maintainability while preserving behavior

## Hands Off To

* `test-agent.md` for regression confidence
* `performance-agent.md` for post-refactor optimization pass
* `qa-agent.md` for final compliance validation

## Integration Rules

* public behavior/contracts must remain unchanged
* architecture/dependency violations are prioritized over cosmetic cleanup
