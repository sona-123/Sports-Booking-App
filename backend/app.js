const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const bookingRoutes = require('./routes/bookingRoutes');
const centerRoutes = require('./routes/centerRoutes');
const sportRoutes = require('./routes/sportRoutes');
const authRoutes = require('./routes/auth');
const app = express();
app.use(cors());
app.use(express.json());

connectDB();


// Routes
app.use('/api/bookings', bookingRoutes);
app.use('/api/centers', centerRoutes);
app.use('/api/sports', sportRoutes);
app.use('/api', authRoutes);
app.get('/', (req, res) => {
    res.send('API is running on port 5000');
});



module.exports = app;
