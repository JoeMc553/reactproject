const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const jwt = require('jsonwebtoken');

// Sign Up Route
router.post('/signup', async (req, res) => {
  try {
    const { email, password, phone } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    user = new User({
      email,
      password,
      phone
    });

    // Save user to database
    await user.save();

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Sign In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ message: 'Signed in successfully', token });
  } catch (error) {
    console.error('Error in signin:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;