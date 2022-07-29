import typer
import subprocess

app = typer.Typer()

@app.command()
def train():
    """Train the model"""
    from penguins import train
    train.main()

@app.command()
def serve():
    """Serve the model as an API using uvicorn."""
    from penguins import predict
    predict.main()

if __name__ == "__main__":
    app()