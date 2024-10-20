const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Import Routes
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const bookingsRoute = require('./routes/bookings'); // Import the bookings route

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/bookings', bookingsRoute); // Mount the bookings route

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
