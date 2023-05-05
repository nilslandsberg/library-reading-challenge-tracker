const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = id => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
};

// POST - signs in user
exports.signup = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    // debugger;
    const newUser = await User.create({
      username: username,
      email: email,
      password: password
    });

    const token = createToken(newUser._id);

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide an email and password"
      })
    } else {
      return res.status(201).json({
        newUser: newUser,
        token: token
      })
    }
  } catch (err) {
    return res.status(500).json({
      message: err.message
    })
  }
};

// POST - logs user in
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Please provide a username and password"
      })
    };

    const user = await User.findOne({ username: username }).select("+password");

    if (!user || !await user.correctPassword(password, user.password)) {
      return res.status(401).json({
        message: "Invalid username or password"
      });
    };

    const token = createToken(user._id);

    return res.status(200).json({
      user: user.username,
      token: token
    });

  } catch (err) {
    return res.status(500).json({
      message: err.message
    });
  }
}