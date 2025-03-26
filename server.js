require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Import routes
const locationRoute = require('./routes/location');
const weatherRoute = require('./routes/weather');
const moviesRoute = require('./routes/movies');

// Define API routes
app.use('/location', locationRoute);
app.use('/weather', weatherRoute);
app.use('/movies', moviesRoute);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
