from penguins import data, config, train

def test_process_dataset():
    df = data.load_data(config.test_data_path)
    df = train.process_dataset(df)
    assert df.isna().sum().sum() == 0