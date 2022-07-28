# Introduction & Concepts

- Challenges for ML driven Operations in Production
- Requirements: Reliable, Scalable, Maintainable, Adaptable
- Considerations: Framing, Objectives, Constraints & Phases
- Thinking in Systems: Application, Business and Infrastructure

## Intro

- Instructor Introduction
- Participant Introduction
  - Experience ML Experience
  - Personal ML Workflow
- Org ML Workflow / Infra / Setup for ML Right now
  - Sample Project in Production (2 - 3 Examples)
  - Type: ML / DL / Forecasting
  - Process
  - Data Storage / ELT
  - Compute Abstraction (Laptop / Cloud)
  - Productionion WorkFlow
  - Monitoring & ReTraining
- Grouping People with Diverse Background

## Course Expecation

- Expectation
- Not focussed on ML/DL model building
- Framework, System Agnostics

## What is the Focus?

- Difference between PoC and Production ML System
- Building the Model (Algorithm) is easy?
- Solving real world problems
- Success of ML Projects in Production is low?
- Software Engineering vs. Programming -> Change over Time

## Objectives

### Compare: Project vs. Product/System Approach

### Comparing: Exploration vs. Production in ML

- Objective | Model Performance | Business Performance
- Computation Priority | Fast Training | Fast Inference, low latency
- Data | Clean / Static / Historical | Messy / Dynamic / + Streaming / Changing / Privacy
- Fairness / Interepretability | Maybe | Important

### Comparing: Software Systems vs. ML Systems

- Diagram for Software Systems
  - Code - Modular Design
  - Data - Separate
  - Tests (Unit Test, Integration Test)
  - Build (Package)
  - Deployment (Package)

Deploying Reliably is hard (Case Example)
Deploy Multiple times at a times (DevOps Evolution)
Speed of delivery

#### Evolution of Building Software

- Evolution over years:
  - Shift from separate Dev QA, SysAdmin -> DevOps Role -> CI/CD
- 1 deploy a month to 100s of deploy per day
- UI Developments
  Model Update - DevOps vs Normal

What is different

- Team Skills: Roles
- Development
- Testing
- Deployment
- Production

# Requirements of an ML Systems

- Reliable: Correct function at desired level of performance and failure resistance
  - Fail Silently
- Scalability: Scale Up and Down: Data Volume, Traffic Volume and Complexity
- Maintainbility: People / Skills - Hetrogenous Tools & Background
- Adaptibility: Data Distribution and Business Requirement - React Quickly

## Exercise

- Real Life Example (Take Three - Select One)

  - Structured Data
  - Simple Problem (not multi-objective)
  - Inference at Real-Time with

## Considerations: Framing, Objectives, Constraints & Phases

- Framing: Right Problem for the ML Objection
  - Example: MultiClass Decision Boundary (Which App to open)
- Objective:
  - ML Objective: Performance, Latency
  - Business Objective: Cost, ROI, Regulation
  - Baseline, Threshold, False Negative, Interpretability, Confidence
- Constrain: Time & Budget (More Powerful Machine, More Experiment), Privacy
- Phased: Heuristic, Simple, ML, Complex

# Thinking in Systems: Application, Business and Infrastructure

- Link to the Exercise
