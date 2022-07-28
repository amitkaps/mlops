"""Script to train the model.

Usage:

    $ python trian.py
    saved the model to model.pkl
"""
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import pickle
import config

def read_dataset():
    return pd.read_csv(config.dataset_path)

def process_dataset(df):
    columns = ['species', 'bill_length_mm', 'bill_depth_mm', 'flipper_length_mm', 'body_mass_g']
    return df[columns].dropna()

def train(df):
    model = DecisionTreeClassifier()
    X = df[['bill_length_mm', 'bill_depth_mm', 'flipper_length_mm', 'body_mass_g']]
    y = df.species
    model.fit(X, y)
    return model

def save_model(model):
    with open(config.model_path, "wb") as f:
        pickle.dump(model, f)
    print("saved the model to", config.model_path)

def main():
    df = read_dataset()
    df = process_dataset(df)
    model = train(df)
    save_model(model)

if __name__ == "__main__":
    main()