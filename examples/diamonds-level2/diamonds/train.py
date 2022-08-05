"""
Module to train the ML model
"""

from . import data
from . import preprocess
from . import models
from . import validate
from . import config
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error, r2_score

def train(df):
    X = df[config.FEATURES]
    y = df[config.TARGET]


    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42)

    regressor = RandomForestRegressor(n_estimators = 300, max_depth = 8,
                random_state = 42)
    model = Pipeline(
        steps=[("preprocessor", preprocess.preprocessor), ("regressor", regressor)]
    )

    score = cross_val_score(model, X_train, y_train,
        cv=5, scoring="neg_root_mean_squared_error", n_jobs=-1).mean()
    print("cross validation score", score)

    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)

    rmseTest = np.sqrt(mean_squared_error(y_test, y_pred))
    r2Test = r2_score(y_test, y_pred)

    print("Scoring:")
    print("  RMSE - Test: ", rmseTest)
    print("  R2 - Test: ", r2Test)

    return model

def main():
    df = data.load_data(config.data_path)
    model = train(df)
    models.save_model(model)

