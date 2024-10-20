// middleware/auth.js

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).json({ error: 'Access Denied. No token provided.' });

  try {
    console.log('Using ACCESS_TOKEN_SECRET:', process.env.ACCESS_TOKEN_SECRET); // Log the secret
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(verified._id);

    if (!user) return res.status(401).json({ error: 'User not found.' });

    req.user = { _id: user._id, role: user.role }; // Attach user info to request
    console.log('Token verified, user:', req.user); // Log the user
    next();
  } catch (err) {
    console.error('Token verification failed:', err);
    res.status(400).json({ error: 'Invalid Token' });
  }
};

module.exports = authenticateToken;
