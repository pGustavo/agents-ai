# Next.js UI System Agent

## CLI-First Execution

UI system setup should use CLI-managed initialization and approved generators.

Use:

* `npx create-next-app@latest <app-name> --ts --eslint --app --src-dir --tailwind --import-alias "@/*"`
* `npm install`
* approved UI generator commands when available

Do not manually bootstrap shared UI foundations when CLI setup exists.

## Purpose

Owns reusable shared UI primitives and prevents feature-level UI duplication.

---

# Agent Collaboration Contract

## Consumes

* architecture rules for shared vs feature boundaries
* planner feature map to avoid leakage
* `../developer.agent.md` UX/accessibility baseline

## Produces

* reusable `shared/ui` primitives
* UI usage constraints for feature implementation

## Hands Off To

* `init-agent.md` for feature composition with shared UI
* `test-agent.md` for UI behavior/accessibility verification
* `performance-agent.md` for render optimization of shared primitives
* `qa-agent.md` for boundary validation

## Integration Rules

* shared UI contains no business logic
* duplicate feature UI should be consolidated into `shared/ui`
