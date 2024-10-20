// models/Booking.js

const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceType: { type: String, required: true },
  appointmentDate: { type: String, required: true }, // Store as 'YYYY-MM-DD'
  appointmentTime: { type: String, required: true }, // Store as 'HH:mm'
});

module.exports = mongoose.model('Booking', bookingSchema);
