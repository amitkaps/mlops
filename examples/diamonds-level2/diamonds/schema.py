"""
Schema of input/output data for prediction.
"""

from pydantic import BaseModel

class PredictSchema(BaseModel):
    """Schema of the input data for prediction.
    """
    column_one: float
    column_two: float
    column_three: float

"""
Schema of input/output data for prediction.
"""
import pandas as pd
from pydantic import BaseModel

class PredictSchema(BaseModel):
    """Schema of the input data for prediction.
    """
    column_one: float
    column_two: float
    column_three: float

    @staticmethod
    def as_dataframe(rows):
        return pd.DataFrame([row.dict() for row in rows])

