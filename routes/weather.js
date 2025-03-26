const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ error: "Latitude and Longitude are required" });
        }

        const apiKey = process.env.WEATHER_API_KEY;
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${apiKey}`;

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

module.exports = router;