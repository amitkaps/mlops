"""Python script to serve model as an API using FastAPI framework.

To run:

    $ uvicorn predict:app

To make a prediction:

    import requests

    # single prediction
    service_url = "http://localhost:8000/predict"
    doc = {
        "column_one": 1.0,
        "column_two": 2.0,
        "column_three": 3.0,
    }
    response = requests.post(service_url, json=doc).json()
    print(response)

    # batch prediction
    service_url = "http://localhost:8000/predict-batch"
    docs = [{
            "column_one": 1.0,
            "column_two": 2.0,
            "column_three": 3.0,
        },
        {
            "column_one": 1.0,
            "column_two": 2.0,
            "column_three": 3.0,
        }
    ]
    response = requests.post(service_url, json=doc).json()
    print(response)
"""
from fastapi import FastAPI
from .schema import PredictSchema
from .models import read_model
from typing import List

app = FastAPI()
model = read_model()

@app.post("/predict")
def predict(doc: PredictSchema):
    df = PredictSchema.as_dataframe([doc])
    result = model.predict(df)
    return {"result": result[0]}

@app.post("/predict-batch")
def predict_batch(docs: List[PredictSchema]):
    df = PredictSchema.as_dataframe(docs)
    result = model.predict(df)
    return {"result": result}

def main():
    import subprocess
    app = "diamonds.predict:app"
    p = subprocess.call(["uvicorn", app], stdout=subprocess.PIPE)
    p.wait()

