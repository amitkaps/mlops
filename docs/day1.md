# Day 1

## Expectations

* No fancy ML
* How to build and deploy 1000s of models per day

### Expectations from the participants

- Latest ML Ops Process (Level 1, 2, 3 & 4)
- Algorithm - vertical vs. horizontal scaling
- ML ops system design vs. devops system design
- 200 DS -> 100 experiments (dev, prod, canary)
- data labelling
- on prem / cloud - latency issues
- production -> ML engineering requirements -> large scale / QPS
- create your own platform deep learning (scale to DL)
- data management -> schema / sheets
- on call -> monitoring and failures -> data purge issues
- deployment modes -> shadow mode?
- concept / data drift
- deploy -> CLI / NFR Testing -> dev / prod -> transparency of the deployed infrastructure
- testing -> unit testing (for data)
- validation

## Dev Ops vs. ML Ops

...

## ML Systems

| Level |  |
| ----- | - |
| **Level 1**<br>Snowflake | Business Requirements<br>-> POC / Feasibility<br>-> Data (ingest / refine or transform / preprocess)<br>-> Model (Architecture / weights / hyper parameters / input-output)<br>-> Deploy |
| **Level 2**<br>Repeatable /Reproduceable | same flow, different person/env |
| **Level 3**<br>Repeatable over time | Experiment: data=constant model=different serve->None<br>Retraining: data=change model=same(weights change) serve -> new endpoint<br>Multiple (t1, t2): data=constant model=constant serve->canary/dev/prod |
| **Level 4**<br>Automatic | |

---

| Components      | Code  | Data | Model |
| --------------- | ----- | ---- | ----- |
| Reproduce       | dependencies<br>os version| data snapshot<br>data pipeline?| random seed<br>model hyperparams<br>weights/checkpoints<br>metrics? |
| Versioning      | git commit hash| | |
| Testing         | | | unit model (input,output) |
| Automation      | | | |
| Deploying       | | | |
| Monitoring      | | | |
| Docs            | | | |
| Structure       | | | |

## Approaches in Building ML Platforms

The more traditional approach is to have the data scientists build a POC and hand it over to Data Engineers and ML Engineers to productionize their work.

```
----------------------
    DS - Prototype
----------------------
    DE   |   ME
----------------------
      Platform
----------------------
```

Alternatively, the platform team can enable the data science team to build end to end applications, while taking take of compute and data abstractions. The data scientists can pick the right tool that works for them and platform team tries hard to enable that.

```
-------------------------
User        Model
DS          Version
-------------------------
Platform    Orchestrator
            Compute
            Data
-------------------------
```

Not convinced? Check out the post [Aggressively Helpful Platform Teams][1] from Stitchfix.

[1]: https://multithreaded.stitchfix.com/blog/2021/02/09/aggressively-helpful-platform-teams/

