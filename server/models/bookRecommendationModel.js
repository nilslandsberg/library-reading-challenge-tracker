const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookRecommendationSchema = new Schema({
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
    required: false
  },
  isbn: {
    type: String,
    required: true
  },
  recommendations: [
    {
      readerId: {
        type: Schema.Types.ObjectId,
        ref: 'Reader'
      },
      text: {
        type: String,
        required: true,
      }
    }
  ]
}, { timestamps: true });


module.exports = mongoose.model('BookRecommendation', bookRecommendationSchema);