"""Configuraton for the project
"""
import os

# base path for the project
BASE_PATH = os.path.dirname(os.path.dirname(__file__))

# Set the random_state to a fixed value so that
# the ML pipeline is reproduceable
random_state = 0

# place to store the model
model_path = os.path.join(BASE_PATH, "models", "model.pkl")

metrics_path = os.path.join(BASE_PATH, "models", "model-metrics.json")

# Path to the input data for training
data_path = os.path.join(BASE_PATH, "..", "..", "datasets", "palmerpenguins", "penguins.csv")
