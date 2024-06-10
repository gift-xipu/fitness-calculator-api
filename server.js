const express = require('express');
const app = express();
const port = 3000; // Change the default port to 4000 or any other available port

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const bmrRoute = require('./routes/bmr');
const tdeeRoute = require('./routes/tdee');
const intakeRoute = require('./routes/intake');
const macronutrientsRoute = require('./routes/macronutrients');
const bmiRoute = require('./routes/bmi'); // Import BMI route

// Use routes
app.use('/bmr', bmrRoute);
app.use('/tdee', tdeeRoute);
app.use('/intake', intakeRoute);
app.use('/macronutrients', macronutrientsRoute);
app.use('/bmi', bmiRoute); // Use BMI route

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
