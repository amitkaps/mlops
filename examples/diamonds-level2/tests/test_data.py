from diamonds.data import load_data, schema
from diamonds import config
import pandas as pd
import pytest
import pandera as pa

def test_load_data():
    df = load_data(config.test_data_path)
    assert df is not None
    assert isinstance(df, pd.DataFrame)

def test_schema_column_missing():
    df = pd.read_csv(config.test_data_path)
    df1 = df.drop(columns=['carat'])

    with pytest.raises(pa.errors.SchemaError):
        schema(df1)

def test_schema_invalid_category():
    df = pd.read_csv(config.test_data_path)
    df.loc[df.color=='D', 'color'] = 'A'

    with pytest.raises(pa.errors.SchemaError):
        schema(df)