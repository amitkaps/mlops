"""Python script to serve model as an API using FastAPI framework.

To run:

    $ uvicorn predict:app

To make a prediction:

    import requests

    service_url = "http://localhost:8000/predict"
    penguin = {
        "bill_length_mm": 39.1,
        "bill_depth_mm": 18.7,
        "flipper_length_mm": 181,
        "body_mass_g": 3750
    }
    response = requests.post(service_url, json=penguin).json()
    print(response)

"""
import pickle
from fastapi import FastAPI
from pydantic import BaseModel
import config

def read_model():
    with open(config.model_path, "rb") as f:
        return pickle.load(f)

class Penguin(BaseModel):
    bill_length_mm: float
    bill_depth_mm: float
    flipper_length_mm: float
    body_mass_g: float

app = FastAPI()
model = read_model()

@app.post("/predict/")
def predict(penguin: Penguin):
    row = [penguin.bill_length_mm, penguin.bill_depth_mm, penguin.flipper_length_mm, penguin.body_mass_g]
    data = [row]
    result = model.predict(data)
    return {"species": result[0]}

