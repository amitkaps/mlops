# Introduction & Concepts

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

### Level 1: Snowflake

Business Requirements<br>
-> POC / Feasibility<br>
-> Data (ingest / refine or transform / preprocess)<br>
-> Model (Architecture / weights / hyper parameters / input-output)<br>
-> Deploy

### Level 2: Repeatable / Reproduceable

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
