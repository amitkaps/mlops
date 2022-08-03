"""Utilities for loading data.
"""
import pandas as pd
from . import config

def load_data() -> pd.DataFrame:
    """Loads the raw data for training and returns it as a dataframe.
    """
    return pd.read_csv(config.data_path)