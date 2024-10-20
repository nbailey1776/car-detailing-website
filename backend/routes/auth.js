// routes/auth.js

const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/auth');

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;

  const userRole = role || 'user';

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  // Check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    role: userRole,
  });

  try {
    const savedUser = await newUser.save();
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  // Check for existing user
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'User does not exist' });

  // Validate password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  // Create JWT
  const token = jwt.sign(
    { _id: user._id, username: user.username, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token, user: { _id: user._id, username: user.username, email: user.email, role: user.role } });
});

// Profile Route to fetch user data
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
