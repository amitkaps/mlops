"""Utilities for readind and saving model.
"""
import pickle
from . import config

def save_model(model):
    with open(config.model_path, "wb") as f:
        pickle.dump(model, f)
    print("saved the model to", config.model_path)

def read_model():
    print("reading the model from", config.model_path)
    with open(config.model_path, "rb") as f:
        return pickle.load(f)

