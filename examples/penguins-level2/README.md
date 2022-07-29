# Classification of Palmer Penguins - Level 2

Classification of Palmer Penguins with clear code organaization as seperate train and predict scripts.

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

**Step 3: Install the dependencies***

```
$ pip install -r requirements.txt
...
```

## How to Use

To train the model, run:

```
$ python train.py
...
saved the model to model.pkl
```

To run the prediction service:

```
$ uvicorn predict:app
...
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```
