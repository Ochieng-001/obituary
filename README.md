# Obituary Management Platform

## Overview

This is a Flask-based web application for submitting, managing, and displaying obituaries. It includes features for SEO and social media optimization to enhance visibility and engagement.

## Setup

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd obituary_platform
    ```

2. Create and activate a virtual environment:
    ```bash
    python -m venv venv
    .\venv\Scripts\Activate
    ```

3. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

4. Set up the database:
    ```bash
    flask db upgrade
    ```

5. Run the application:
    ```bash
    python run.py
    ```

## Usage

- Submit obituaries at `/submit`.
- View submitted obituaries at `/obituaries`.

## Configuration

Update the `config.py` file with your own settings for `SECRET_KEY` and `SQLALCHEMY_DATABASE_URI`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
