const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  readerId: {
    type: Schema.Types.ObjectId,
    ref: 'Reader'
  },
  title: {
    type: String,
    required: true
  },
  authors: [{
    type: String,
    required: true,
  }],
  pages: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: false,
  }
}, {timestamps: true});

module.exports = mongoose.model('Book', bookSchema);