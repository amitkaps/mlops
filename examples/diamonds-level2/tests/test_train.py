from diamonds import train
from diamonds import data
from diamonds import config
import numpy as np

def test_train_can_run():
    df = data.load_data(config.test_data_path)
    model = train.train(df)
    assert model is not None

def test_train_is_repeatable():
    df = data.load_data(config.test_data_path)
    X = df[config.FEATURES]

    model1 = train.train(df)
    y1 = model1.predict(X)

    model2 = train.train(df)
    y2 = model2.predict(X)

    np.testing.assert_allclose(y1, y2)


