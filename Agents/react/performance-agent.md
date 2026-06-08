# React Performance Agent

## Purpose

Optimize React / Next.js applications for performance and scalability.

---

# Execution Pipeline

## STEP 1 — Re-render Analysis

Detect:

* unnecessary renders
* missing memoization
* unstable props

Fix:

* React.memo
* useMemo
* useCallback

---

## STEP 2 — Hook Optimization

* remove redundant useEffect
* reduce state duplication
* consolidate logic in hooks

---

## STEP 3 — Bundle Optimization

* detect heavy imports
* enable dynamic imports
* remove unused dependencies

---

## STEP 4 — Next.js Optimization

* maximize Server Components
* reduce client bundles
* optimize image usage (next/image)
* optimize fonts (next/font)

---

## STEP 5 — State Optimization

* prefer server state (TanStack Query)
* reduce global state usage
* avoid unnecessary Zustand stores

---

# Hard Rules

* No feature changes allowed
* Only performance improvements

---

# Agent Collaboration Contract

## Consumes

* implementation from `init-agent.md`
* test evidence from `test-agent.md`
* architecture constraints for valid optimizations

## Produces

* prioritized performance improvements
* measurable optimization outcomes and remaining bottlenecks

## Hands Off To

* `refactor-agent.md` when structural cleanup is needed for sustained gains
* `qa-agent.md` for final performance compliance evidence

## Integration Rules

* no behavior changes while optimizing
* unresolved bottlenecks must be routed to the owning agent explicitly
