const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 1,
    max: 18
  },
  books: [
    {
    type: String,
    ref: 'Books'
    }
  ]
}, {timestamps: true});

module.exports = mongoose.model('Child', childSchema);