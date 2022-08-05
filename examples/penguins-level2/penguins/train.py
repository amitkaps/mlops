"""Script to train the model.

Usage:

    $ python trian.py
    saved the model to model.pkl
"""
import pandas as pd
import numpy as np
import json
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn import metrics
import mlflow

import pickle
from . import config
from . import data
from . import validate

def process_dataset(df):
    columns = ['species', 'bill_length_mm', 'bill_depth_mm', 'flipper_length_mm', 'body_mass_g']
    return df[columns].dropna()

def compute_metrics(model, X_train, X_test, y_train, y_test):
    y_pred = model.predict(X_train)
    train_accuracy = metrics.accuracy_score(y_true=y_train, y_pred=y_pred)
    print("Accuracy on training data:", train_accuracy)

    y_pred = model.predict(X_test)
    test_accuracy = metrics.accuracy_score(y_true=y_test, y_pred=y_pred)
    print("Accuracy on test data:", test_accuracy)

    cm = metrics.confusion_matrix(y_true=y_test, y_pred=y_pred, labels=model.classes_)
    print("Confusion Matrix:")
    print(cm)

    _metrics = {
        "train_accuracy": train_accuracy,
        "test_accuracy": test_accuracy,
        "confusion_matrix": cm.tolist()
    }
    with open(config.metrics_path, "w") as f:
        json.dump(_metrics, f)
    print("wrote the metrics to", config.metrics_path)

def setup_mlflow():
    if not config.mlflow_trcking_uri:
        return

    mlflow.set_tracking_uri(config.mlflow_trcking_uri)
    mlflow.set_experiment(config.mlflow_experiment)
    mlflow.autolog()

def train(df):
    setup_mlflow()

    columns = ['bill_length_mm', 'bill_depth_mm', 'flipper_length_mm', 'body_mass_g']
    print("selecting columns", columns)
    X = df[columns]
    y = df.species

    print("splitting the data into train and test...")
    X_train, X_test, y_train, y_test = train_test_split(X, y)

    print("Running gridsearch to find the best estimator...")
    model = DecisionTreeClassifier()
    param_grid = {"max_depth": [2, 3, 4, 5, 6, 7]}
    gridsearch = GridSearchCV(model, param_grid, cv=5, return_train_score=True, verbose=1)
    gridsearch.fit(X_train, y_train)
    print("  Best Params:", gridsearch.best_params_)
    print("  Best Test Score:", np.mean(gridsearch.cv_results_['mean_test_score']))

    print("Fitting the model with the best parameters...")
    max_depth = gridsearch.best_params_['max_depth']
    model = DecisionTreeClassifier(max_depth=max_depth)
    model.fit(X_train, y_train)

    compute_metrics(model, X_train, X_test, y_train, y_test)
    return model

def save_model(model):
    with open(config.model_path, "wb") as f:
        pickle.dump(model, f)
    print("saved the model to", config.model_path)

def main():
    df = data.load_data()
    validate.validate_data(df)
    df = process_dataset(df)
    model = train(df)
    save_model(model)

if __name__ == "__main__":
    main()