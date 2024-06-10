const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { BMR, activityLevel } = req.body;
    let activityMultiplier;

    switch (activityLevel) {
        case 1: activityMultiplier = 1.2; break;
        case 2: activityMultiplier = 1.375; break;
        case 3: activityMultiplier = 1.55; break;
        case 4: activityMultiplier = 1.725; break;
        case 5: activityMultiplier = 1.9; break;
        default: activityMultiplier = 1.0; break;
    }

    const TDEE = BMR * activityMultiplier;
    res.send({ TDEE });
});

module.exports = router;
