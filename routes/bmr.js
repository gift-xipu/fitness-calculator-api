const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { gender, weight, height, age } = req.body;
    let BMR;

    if (gender === 'm') {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else if (gender === 'f') {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    } else {
        return res.status(400).send({ error: 'Invalid gender input' });
    }

    res.send({ BMR });
});

module.exports = router;
