const User = require('../models/userModel');

// GET all users in database
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({
        message: "No users found"
      });
    } else {
      res.status(200).json({
        users: users,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

