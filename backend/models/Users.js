const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [1, 'Password must be at least 8 characters long'],
      select: false
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number'],
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number']
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  // Hash the password before saving
  userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      next(error);
    }
  });
  
  // Method to check if password is correct
  userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
      return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
      throw new Error(error);
    }
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;