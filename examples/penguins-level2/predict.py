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
    print(response) # {"species":"Adelie"}

"""
from fastapi import FastAPI
from models import read_model, Penguin

app = FastAPI()
model = read_model()

@app.post("/predict/")
def predict(penguin: Penguin):
    row = [penguin.bill_length_mm, penguin.bill_depth_mm, penguin.flipper_length_mm, penguin.body_mass_g]
    data = [row]
    result = model.predict(data)
    return {"species": result[0]}

