"""Configuraton for the project
"""
import os

# base path for the project
BASE_PATH = os.path.dirname(os.path.dirname(__file__))

# Set the random_state to a fixed value so that
# the ML pipeline is reproduceable
random_state = 0

# place to store the model
model_path = os.path.join(BASE_PATH, "models/model.pkl")

# Path to the input data for training
data_path = os.path.join(BASE_PATH, "../../datasets/diamonds/diamonds-month-1.csv")

test_data_path = os.path.join(BASE_PATH, "data/diamonds-sample.csv")

NUMERIC_FEATURES = ["carat", "depth", "table", "x", "y", "z"]
# List all column names for categorical features
CATEGORICAL_FEATURES = ["cut", "color", "clarity"]
# List Target
TARGET = "price"

# names of the columns to use for training
FEATURES = NUMERIC_FEATURES + CATEGORICAL_FEATURES