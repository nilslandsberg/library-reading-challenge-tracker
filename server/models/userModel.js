const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username required"]
  },
  email: {
    type: String,
    required: [true, "Email required"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Valid email required"]
  },
  password: {
    type: String,
    required: [true, "Password required"],
    select: false
  },
}, {timestamps: true});

// pre-save middleware to hash password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  } else {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  }
});

// bcrypt password compare method on userModel
userSchema.methods.correctPassword = async (comparedPassword, userPassword) => {
  return await bcrypt.compare(comparedPassword, userPassword)
}

module.exports = mongoose.model('Users', userSchema);