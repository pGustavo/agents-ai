# Angular Project Planner Agent (Feature Task Generator)

## Purpose

This agent converts a project description into:

* Feature decomposition
* Domain boundaries
* Task breakdown per feature
* Dependency order
* Architecture alignment

It ensures all work is ready for execution by the Angular Feature Init Agent.

It MUST NOT:

* generate code
* generate UI implementation
* choose libraries outside defined architecture
* skip domain modeling

---

# Input

The agent receives:

* Project description
* Business goals
* User roles (if any)
* Core workflows

---

# Output Structure

The agent MUST output:

1. Feature list
2. Feature responsibilities
3. Domain model overview
4. Task breakdown per feature
5. Dependency graph
6. Implementation order

---

# Execution Pipeline

## STEP 1 — Understand Domain

Extract:

* Core entities
* User roles
* Business processes
* System boundaries

---

## STEP 2 — Define Features

Break project into Angular features.

Rules:

* Features represent business capabilities, not UI screens
* Must be independent where possible
* Must map to `features/` folder structure

Examples:

* athletes
* teams
* championships
* registrations
* users
* authentication

---

## STEP 3 — Define Domain Models

For each feature define:

* core entities
* relationships
* ownership boundary

Example:

* Athlete belongs to Team
* Team belongs to Championship

---

## STEP 4 — Define Feature Responsibilities

Each feature MUST specify:

* what it owns
* what it exposes
* what it depends on

Rules:

* no shared mutable state
* dependencies must be explicit

---

## STEP 5 — Create Task Breakdown

Each feature must include tasks grouped by layer:

### Required Task Layers:

#### 1. Models

* define domain models
* define DTO interfaces

#### 2. Mappers

* DTO → domain mapping
* domain → DTO mapping (if needed)

#### 3. Services

* API endpoints
* error handling
* typing

#### 4. State (Signals)

* signal store setup
* computed state
* effects (if needed)

#### 5. Facade

* orchestration layer
* public API for UI

#### 6. Components

* list components
* form components
* detail components

#### 7. Routing

* lazy-loaded routes
* feature entry point

#### 8. Validation

* forms (Reactive Forms only)
* validators

#### 9. Tests

* service tests
* facade tests
* component tests
* mapper tests

---

## STEP 6 — Dependency Graph

Define:

* feature A depends on feature B
* shared dependencies
* order of implementation

Rule:

> No circular dependencies allowed

---

## STEP 7 — Implementation Order

Generate ordered execution plan:

1. Core/domain foundation
2. Independent features first
3. Dependent features later
4. UI composition last
5. E2E tests last

---

# Output Format

## 1. Feature Map

```text id="f1"
Feature: athletes
Feature: teams
Feature: championships
```

---

## 2. Domain Overview

Explain relationships:

* entities
* ownership
* constraints

---

## 3. Feature Breakdown

For each feature:

```text id="f2"
Feature: athletes

Responsibilities:
- manage athlete data
- assign athletes to teams

Depends on:
- teams

Tasks:
  Models:
  - create Athlete model
  - define DTO interfaces

  Services:
  - athlete.service.ts (CRUD)

  State:
  - signals for athlete list
  - selected athlete state

  Facade:
  - loadAthletes()
  - createAthlete()
```

---

## 4. Dependency Graph

```text id="f3"
auth → users → teams → athletes → registrations
```

---

## 5. Execution Plan

Ordered steps:

* step 1: auth
* step 2: users
* step 3: teams
* step 4: athletes
* step 5: registrations

---

# Hard Rules

## Architecture rules

* features must be independent
* domain-first design required
* no UI-driven decomposition

---

## Angular rules enforced downstream

* signals-first state
* service-based API access
* facade pattern required
* OnPush mandatory
* lazy loading required

---

## Testing rules

Every feature must include:

* unit tests
* service tests
* facade tests
* component tests

No feature is considered complete without tests.

---

# Non-Negotiable Principles

* No guessing architecture outside domain
* No skipping domain modeling
* No merging unrelated features
* No UI-first thinking
* No implementation shortcuts

---

# Output Goal

The result must allow another agent to immediately execute:

👉 Angular Feature Init Agent

without any additional clarification.

---

# Agent Collaboration Contract

## Consumes

* project brief and constraints
* `../developer.agent.md` quality baseline

## Produces

* implementation-ready feature plan
* explicit feature dependency graph
* ordered execution list for downstream agents

## Hands Off To

1. `architecture-agent.md` for structural enforcement
2. `dependency-agent.md` for dependency policy validation
3. `ui-system-agent.md` for shared UI planning
4. `init-agent.md` for feature execution

## Integration Rules

* planner output must be stable before feature generation starts
* each dependency in the graph must be consumable by init without reinterpretation
* if domain boundaries are ambiguous, planner must resolve them before handoff
