const express = require('express');
const router = express.Router();

// Route to calculate BMI
router.post('/', (req, res) => {
    const { weight, height } = req.body;

    if (!weight || !height) {
        return res.status(400).json({ error: 'Please provide weight and height' });
    }

    const bmi = weight / (height * height);

    res.json({ bmi });
});

module.exports = router;
