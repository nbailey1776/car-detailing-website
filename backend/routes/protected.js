// routes/protected.js
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

// Protected Route
router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Welcome to the protected route', user: req.user });
});

module.exports = router;
