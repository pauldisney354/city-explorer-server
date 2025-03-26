const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const city = req.query.city;
        if (!city) {
            return res.status(400).json({ error: "City query parameter is required" });
        }

        const apiKey = process.env.MOVIE_API_KEY;
        const url = `https://api.themoviedb.org/3/search/movie?query=${city}&api_key=${apiKey}`;

        const response = await axios.get(url);
        res.json(response.data.results);
    } catch (error) {
        next(error);
    }
});

module.exports = router;