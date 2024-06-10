const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { caloricIntake } = req.body;

    const carbsCalories = caloricIntake * 0.40;
    const proteinCalories = caloricIntake * 0.30;
    const fatCalories = caloricIntake * 0.30;

    const carbsGrams = carbsCalories / 4;
    const proteinGrams = proteinCalories / 4;
    const fatGrams = fatCalories / 9;

    res.send({
        carbsGrams,
        proteinGrams,
        fatGrams
    });
});

module.exports = router;
