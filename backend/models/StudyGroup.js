const mongoose = require('mongoose');

const studyGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  maxMembers: {
    type: Number,
    required: true,
    min: 1
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const StudyGroup = mongoose.model('StudyGroup', studyGroupSchema);

module.exports = StudyGroup;