const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const city = req.query.city;
        if (!city) {
            return res.status(400).json({ error: "City query parameter is required" });
        }

        const apiKey = process.env.LOCATIONIQ_API_KEY;
        const url = `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${city}&format=json`;

        const response = await axios.get(url);
        res.json(response.data[0]); // Sending first result
    } catch (error) {
        next(error);
    }
});

module.exports = router;