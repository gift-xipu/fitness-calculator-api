const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { TDEE, goal } = req.body;
    let caloricIntake;

    switch (goal) {
        case 1:
            caloricIntake = TDEE;
            break;
        case 2:
            caloricIntake = TDEE - 500;
            break;
        case 3:
            caloricIntake = TDEE + 500;
            break;
        default:
            return res.status(400).send({ error: 'Invalid goal input' });
    }

    res.send({ caloricIntake });
});

module.exports = router;
