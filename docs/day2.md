# Day 2

## Model Envelope

Install [model-envelope](https://github.com/anandology/model-envelope) library using the following command:

```
$ pip install -U git+https://github.com/anandology/model-envelope
```

## Evaluation & Metrics

ML Models in production:

* Returns
* Returns: Class - option / Comment - text -> Allow/block next step in UI
* Invoice PDF: Item detail json (#, date, name)
* Delivery time prediction: Location, seller/source -> #days
* Customer Address -> Lat/long (gold dataset: address -> lat/long, NLP classification)
* Forecasting -> Demand next one month
* Cancellation before delivery: user pincode -> COD yes/no
* Question -> retrive similar answered questions


## Testing & Validation

> Fail Early, Fail Often

### Code Testing: Unit, Integration, System & Acceptance

* Test each of the training steps is working as expected
* Test if the entire training pipeline is working without any errors
* Test if the training and using the model inference is working as expected

How do you do each of these? Would keeping a sample dataset help? Do you also need to keep expected results?

### Data Testing: Schema, Expectations, Quality, Distribution Skew

- How to make sure the schema of input data is as expected?
- Can you add some expectations on the data like the min/max values, allowed patterns or possible options for a categorical data?
- Would a check on the quality of data be useful? Like the % of missing/invalid values?
- Can you make sure the distibution of data has not drifted too much from your first trianing?

The Python library [Pandera][] has support for all these kinds of checks.

[Pandera]: https://pandera.readthedocs.io/

### Model Testing: Training, Evaluation, Inference & Deployment

- Can you make sure the training accuracy is more than a minimum expected value?
- Can you make sure thr training accuracy is always more than the previous run?
- Is there a test suite that you can run on a deployed model to ensure it is working correctly before taking it live?

### Behavioural Testing: Invariance, Functionality, Directionality

How can you test the behaviour of your model?

- invariance: what are the inputs that should produce the same inference
- directionality: what are the inputs that should not produce the same inference
- functionality: minimum functionality that you expect the model to always predict as expected

**Exercise: Classification of Diamonds**

Look at the diamonds example in the [mlops repository][mlops]. In this example, all the code is in a notebook.

- make the training process repeatable and reproduceable by moving the code from notebook to a git repo. You can use the [cookiecutter-mlops][] to get started.
- add tests to verify the code is working as expected
- add data valiadtion as part of the training pipeline to alert for schema changes, quality or change in the data distribution
- how can you test the model?

Also, the dataset has data for three seperate months. Run training for each of this data chunk and make sure that the data validation is happening as expected.

[mlops]: https://github.com/amitkaps/mlops/
[cookiecutter-mlops]: https://github.com/anandology/cookiecutter-mlops/