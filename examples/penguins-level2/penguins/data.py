"""Utilities for loading data.
"""
import pandas as pd
from . import config

def load_data(path=None) -> pd.DataFrame:
    """Loads the raw data for training and returns it as a dataframe.
    """
    path = path or config.data_path
    return pd.read_csv(config.data_path)