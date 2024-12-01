const express = require('express');
const router = express.Router();
const StudyGroup = require('../models/StudyGroup');

// Get all study groups
router.get('/study-groups', async (req, res) => {
  try {
    const studyGroups = await StudyGroup.find().populate('members', 'name email');
    res.json(studyGroups);
  } catch (error) {
    console.error('Error fetching study groups:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Join a study group
router.post('/study-groups/:id/join', async (req, res) => {
  try {
    const studyGroup = await StudyGroup.findById(req.params.id);

    if (!studyGroup) {
      return res.status(404).json({ message: 'Study group not found' });
    }

    // For simplicity, we're using a userId from the request body
    // In a real application, this would come from authenticated user data
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    if (studyGroup.members.includes(userId)) {
      return res.status(400).json({ message: 'You are already a member of this group' });
    }

    if (studyGroup.members.length >= studyGroup.maxMembers) {
      return res.status(400).json({ message: 'This group is already full' });
    }

    studyGroup.members.push(userId);
    await studyGroup.save();

    res.json({ message: 'Successfully joined the study group', studyGroup });
  } catch (error) {
    console.error('Error joining study group:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create a new study group
router.post('/study-groups', async (req, res) => {
  try {
    const { name, maxMembers, time, location, description} = req.body;

    const newStudyGroup = new StudyGroup({
      name,
      maxMembers: parseInt(maxMembers),
      time,
      location,
      description,

    });

    await newStudyGroup.save();

    res.status(201).json({ message: 'Study group created successfully', studyGroup: newStudyGroup });
  } catch (error) {
    console.error('Error creating study group:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;