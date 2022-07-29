"""Utilities for train and predict.
"""
from pydantic import BaseModel
import pickle
import config

class Penguin(BaseModel):
    """Data model to specify the input penguin data for prediction.
    """
    bill_length_mm: float
    bill_depth_mm: float
    flipper_length_mm: float
    body_mass_g: float

def read_model():
    """Reads the model from model file.
    """
    with open(config.model_path, "rb") as f:
        return pickle.load(f)

