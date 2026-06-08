# Next.js Performance Agent

## CLI-First Execution

Performance work must be reproducible through CLI commands.

Use:

* `npm run build`
* `npm run lint`
* `npm run test` (when configured)
* `npx next build --debug` (when needed)

Prefer command-generated performance evidence over manual observation.

## Purpose

Optimizes rendering strategy, bundle footprint, and runtime responsiveness without changing feature behavior.

---

# Agent Collaboration Contract

## Consumes

* implementation from `init-agent.md`
* test evidence from `test-agent.md`
* architecture constraints for optimization safety

## Produces

* prioritized performance improvements
* optimization report with remaining bottlenecks

## Hands Off To

* `refactor-agent.md` when structural cleanup is needed
* `qa-agent.md` for final performance compliance evidence

## Integration Rules

* no feature behavior changes during optimization
* unresolved bottlenecks must be routed to the owning agent
