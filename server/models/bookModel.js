const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  readerIds: [{
    type: Schema.Types.ObjectId,
    ref: 'Reader'
  }],
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
  },
  isbn: {
    type: String,
    required: true,
  }
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema);