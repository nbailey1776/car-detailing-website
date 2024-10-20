const router = require('express').Router();
const Booking = require('../models/Booking');
const authenticateToken = require('../middleware/auth');
const admin = require('../middleware/admin');

// Create Booking with Conflict Check
router.post('/', authenticateToken, async (req, res) => {
  const { serviceType, appointmentDate, appointmentTime } = req.body;

  // Log incoming data
  console.log('Received booking data:', {
    serviceType,
    appointmentDate,
    appointmentTime,
  });

  if (!serviceType || !appointmentDate || !appointmentTime) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Check for conflicting bookings
    const existingBooking = await Booking.findOne({
      appointmentDate,
      appointmentTime,
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'This time slot is already booked.' });
    }

    const booking = new Booking({
      userId: req.user._id,
      serviceType,
      appointmentDate,
      appointmentTime,
    });

    await booking.save();
    res.status(201).json('Booking Created');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});



// Get User's Bookings
router.get('/', authenticateToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id });
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Bookings (Admin Only)
router.get('/all', authenticateToken, admin, async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId', 'username email');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get Available Times for a Date and Service
router.get('/available-times', async (req, res) => {
  try {
    const { date, serviceType } = req.query;

    // Define your business hours (9 AM to 5 PM)
    const openingTime = 9;
    const closingTime = 17;
    const timeSlots = [];

    // Generate half-hour time slots
    for (let hour = openingTime; hour < closingTime; hour++) {
      timeSlots.push(`${hour}:00`, `${hour}:30`);
    }

    const bookings = await Booking.find({ appointmentDate: date });
    const bookedTimes = bookings.map((booking) => booking.appointmentTime);

    const availableTimes = timeSlots.filter(
      (time) => !bookedTimes.includes(time)
    );

    res.json(availableTimes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
