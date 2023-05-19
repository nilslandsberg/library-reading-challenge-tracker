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
  ]
}, {timestamps: true});

module.exports = mongoose.model('Reader', readerSchema);