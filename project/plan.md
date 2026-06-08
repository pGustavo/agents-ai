# Angular Planner Plan — Agent Showcase SPA

## Problem

Build a single-page application in the `project` folder to showcase your AI agent offering, with:

1. a **Home** page summarizing the full offering
2. one dedicated detail page per framework:
   - Angular
   - React
   - Next.js

All project files must be created and maintained under `project/`.

## Proposed Approach

Use an Angular SPA with feature-based architecture and route-based page composition:

- root app shell + shared navigation
- isolated feature modules for Home and each framework detail page
- reusable shared UI components and content data models
- static content-first implementation for clarity and maintainability

## Feature Map

- **home-summary**: high-level value proposition and quick feature matrix
- **framework-angular**: deep details for Angular agent pipeline
- **framework-react**: deep details for React agent pipeline
- **framework-nextjs**: deep details for Next.js agent pipeline
- **app-shell-navigation**: top navigation, layout container, route transitions

## Domain Overview

Core entities:

- **FrameworkProfile**: framework name, strengths, architecture model, ideal use cases
- **AgentRole**: planner/init/dependency/ui/test/perf/refactor/qa responsibilities
- **WorkflowStep**: ordered lifecycle steps from planning to quality gate
- **CapabilityItem**: concrete outcomes (scaffolding, testing, optimization, governance)

Relationships:

- one `FrameworkProfile` has many `AgentRole`
- one `FrameworkProfile` has many `WorkflowStep`
- Home page aggregates all `FrameworkProfile` summaries

## Feature Responsibilities & Dependencies

### Feature: app-shell-navigation

Responsibilities:
- global page layout
- framework nav links
- active route highlighting

Depends on:
- none (foundation)

### Feature: home-summary

Responsibilities:
- explain what the agent system offers
- summarize each framework at a glance
- direct users to framework detail pages

Depends on:
- app-shell-navigation

### Feature: framework-angular

Responsibilities:
- explain Angular architecture and agent contracts
- list Angular-specific workflow and standards

Depends on:
- app-shell-navigation

### Feature: framework-react

Responsibilities:
- explain React architecture and agent contracts
- list React-specific workflow and standards

Depends on:
- app-shell-navigation

### Feature: framework-nextjs

Responsibilities:
- explain Next.js server-first architecture and agent contracts
- list Next.js-specific workflow and standards

Depends on:
- app-shell-navigation

## Task Breakdown (by Layer)

### 1) Models
- define `FrameworkProfile`, `AgentRole`, `WorkflowStep`, `CapabilityItem`
- create typed content contracts

### 2) Services
- create static content provider service(s) for framework metadata
- expose typed retrieval methods for home + detail pages

### 3) State (Signals)
- page-level signals for selected framework and derived view models
- computed summaries for Home cards

### 4) Facade
- facade to orchestrate content access and page view data
- expose clean read APIs to components

### 5) Components
- shared: header/nav, section, badge, feature-card, timeline block
- feature: home summary cards, framework detail sections

### 6) Routing
- `/` → Home
- `/angular` → Angular detail
- `/react` → React detail
- `/nextjs` → Next.js detail

### 7) Validation
- validate content structure for required fields before render
- fallback-safe typed guards for page data integrity

### 8) Tests
- service + facade tests for content integrity
- component tests for rendering and navigation behavior
- routing tests for page resolution and active links

## Dependency Graph

```text
app-shell-navigation -> home-summary
app-shell-navigation -> framework-angular
app-shell-navigation -> framework-react
app-shell-navigation -> framework-nextjs
```

## Implementation Order

1. app-shell-navigation foundation
2. domain models + content service
3. home-summary page
4. framework-angular page
5. framework-react page
6. framework-nextjs page
7. tests and quality pass

## Notes / Constraints

- Keep all implementation files inside `project/`.
- Prefer Tailwind CSS for styling consistency.
- Maintain strict feature isolation and clean layer flow:
  `Service -> State -> Facade -> Component`.
