"""Preprocessing steps for training.
"""
import pandas as pd
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder, OrdinalEncoder
from sklearn.pipeline import Pipeline
from . import config

numeric_transformer = Pipeline(
        steps=[
            ("impute", SimpleImputer(strategy="median")),
            ("scale", StandardScaler()),
        ]
    )

categorical_transformer = Pipeline(
        steps=[
            ("impute", SimpleImputer(strategy="most_frequent")),
            ("encode", OneHotEncoder(handle_unknown="ignore")),
        ]
    )

preprocessor = ColumnTransformer(
        transformers=[
            ("numerical", numeric_transformer, config.NUMERIC_FEATURES),
            ("categorical", categorical_transformer, config.CATEGORICAL_FEATURES),
        ],
        remainder="drop",
        n_jobs=-1,
    )
