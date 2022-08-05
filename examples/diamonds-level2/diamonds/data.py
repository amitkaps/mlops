"""Utilities for loading data.
"""
import pandas as pd
from . import config
import pandera as pa

# carat,cut,color,clarity,depth,table,price,x,y,z

schema = pa.DataFrameSchema({
    "carat": pa.Column(float),
    "cut": pa.Column(str),
    "color": pa.Column(str, pa.Check.isin(["D", "E", "F", "G", "H", "I", "J"])),
    "clarity": pa.Column(str),
    "depth": pa.Column(float),
    "table": pa.Column(float),
    "price": pa.Column(int),
    "x": pa.Column(float),
    "y": pa.Column(float),
    "z": pa.Column(float),
})

def load_data(csv_path) -> pd.DataFrame:
    """Loads the raw data for training and returns it as a dataframe.
    """
    df = pd.read_csv(csv_path)
    # validate
    schema(df)
    return df