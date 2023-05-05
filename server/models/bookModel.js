const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  childId: {
    type: Schema.Types.ObjectId,
    ref: 'Child'
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
  },
  pages: {
    type: String,
    required: false
  },
  imageUrl: {
    type: String,
    required: false,
  }
}, {timestamps: true});

module.exports = mongoose.model('Child', childSchema);