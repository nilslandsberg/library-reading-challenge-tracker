const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readerSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  name: {
    type: String,
  },
  age: {
    type: String,
  },
  avatar: {
    type: String,
  },
  books: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Book'
    }
  ],
  readingTime: {
    type: [Number],
    default: Array(12).fill(0) // Initialize with 0 reading time for 12 weeks
  }
}, {timestamps: true});

module.exports = mongoose.model('Reader', readerSchema);