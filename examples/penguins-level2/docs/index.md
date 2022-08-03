# Classification of Palmer Penguins

This project is a demonstration of how to organize code for a simple machine learning prediction project.

The dataset used in this project is [palmerpenguins][1].

[1]: https://github.com/allisonhorst/palmerpenguins

## Code Organization

```
penguins/
├── README.md
├── docs
│   └── index.md
├── notebooks
│   └── penguins.ipynb
├── data
│   └── penguins.csv
├── models
│   └── model.pkl
├── penguins
│   ├── models.py
│   ├── predict.py
│   ├── config.py
│   └── train.py
├── tests
│   ├── test_models.py
│   ├── test_predict.py
│   └── test_train.py
├── mkdocs.yml
└── requirements.txt
```

The repo is organized into:

```
docs/       -- docs about this project
notebooks/  -- notebooks for experimentation
data/       -- data files
models/     -- model files
penguins/   -- the main python code
```

The code is organized into Python files instead of just notebooks.

Some important files:

- `penguins/train.py` contains the code for training the model
- `penguins/predict.py` has code for serving the model as an API
- `penguins/config.py` contains the configuration like dataset path and model path
- `penguins/models.py` contains data model for penguin input data accepted by the API
- `requirements.txt` contains the python packages required to run this project

## The Setup

**Step 1: Set up a virtualenv**

```
$ python3 -m venv venv
```

**Step 2: Activate the virtualenv**

If you are using Linux/Mac:

```
$ source venv/bin/activate
```

If you are using Windows:

```
$ venv\Scripts\activate.bat
```

**Step 3: Install the dependencies**

```
$ pip install -r requirements.txt
...
```

## How to Use

To train the model, run:

```
$ python run.py train
...
saved the model to models/model.pkl
```

To run the prediction service:

```
$ python run.py serve
...
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

You can also run it using:

```
$ uvicorn penguins.predict:app
...
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

## Using the API

To use the API, send a POST request to the API endpoint.

```python
import requests

service_url = "http://localhost:8000/predict"
penguin = {
    "bill_length_mm": 39.1,
    "bill_depth_mm": 18.7,
    "flipper_length_mm": 181,
    "body_mass_g": 3750
}
response = requests.post(service_url, json=penguin).json()
print(response) # {"species":"Adelie"}
```

## Build Docs

To build this docs, run:

```
$ mkdocs build
INFO     -  Cleaning site directory
INFO     -  Building documentation to directory: .../penguins-level2/site
INFO     -  Documentation built in 0.34 seconds
```

The generated html will be in the `site/` directory.

If you want to mkdocs to serve the docs