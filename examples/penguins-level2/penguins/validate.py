"""Data validation.
"""

import pandas as pd
import pandera as pa

schema = pa.DataFrameSchema({
    "species": pa.Column(str),
    "bill_length_mm": pa.Column(float, nullable=True),
    "bill_depth_mm": pa.Column(float, nullable=True),
    "flipper_length_mm": pa.Column(float, nullable=True),
    "body_mass_g": pa.Column(float, nullable=True),
})

def validate_data(df: pd.DataFrame):
    """Validates data and raise exception of there is something wrong.
    """
    schema.validate(df)