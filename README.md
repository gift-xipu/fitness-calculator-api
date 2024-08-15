# Fitness Calculator API

This is a Node.js Express API application that provides various fitness-related calculations. The API includes endpoints for calculating BMI, BMR, TDEE, caloric intake, and macronutrient distribution.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Error Handling](#error-handling)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install

    Start the server:

    bash

    node app.js

The server will start running on http://localhost:3000/.
Usage

The API uses JSON for request and response bodies. Make sure to set the Content-Type header to application/json when making requests.
API Endpoints
1. Calculate BMI

    Endpoint: POST /bmi
    Request Body:

    json

{
  "weight": number,
  "height": number
}

Response:

json

    {
      "bmi": number
    }

2. Calculate BMR (Basal Metabolic Rate)

    Endpoint: POST /bmr
    Request Body:

    json

{
  "gender": "m" | "f",
  "weight": number,
  "height": number,
  "age": number
}

Response:

json

    {
      "BMR": number
    }

3. Calculate TDEE (Total Daily Energy Expenditure)

    Endpoint: POST /tdee
    Request Body:

    json

{
  "BMR": number,
  "activityLevel": 1 | 2 | 3 | 4 | 5
}

Response:

json

    {
      "TDEE": number
    }

4. Calculate Caloric Intake

    Endpoint: POST /intake
    Request Body:

    json

{
  "TDEE": number,
  "goal": 1 | 2 | 3
}

Response:

json

    {
      "caloricIntake": number
    }

5. Calculate Macronutrient Distribution

    Endpoint: POST /macronutrients
    Request Body:

    json

{
  "caloricIntake": number
}

Response:

json

    {
      "carbsGrams": number,
      "proteinGrams": number,
      "fatGrams": number
    }

Error Handling

The API includes basic error handling:

    If required fields are missing, it will return a 400 status code with an error message.
    For invalid inputs (e.g., invalid gender or goal), it will return a 400 status code with an error message.
