const Reader = require('../models/readerModel');
const BookRecommendation = require('../models/bookRecommendationModel');

// POST - add a book recommendation
exports.addBookRecommendation = async (req, res) => {
  try {
    const { title, authors, pages, description, imageUrl, isbn, ageGroup, recommendation, readerId } = req.body; 

    // Check if the book already exists in the recommendation list
    const existingBookRecommendation = await BookRecommendation.findOne({ title, authors });

    if (existingBookRecommendation) {
      // Book already exists, add the recommendation information to existing book recommendation
      if (!existingBookRecommendation.recommendations.some(rec => rec.readerId.toString() === readerId)) {
        existingBookRecommendation.recommendations.push({ readerId, text: recommendation });
        await existingBookRecommendation.save();
      }
      res.status(200).json({ message: 'Book already exists. Added new recommendation to existing book.', existingBookRecommendation });
    } else {
      // Book doesn't exist, create a new book with the recommendation
      const newBookRecommendation = await BookRecommendation.create({
        title,
        authors,
        description,
        pages,
        imageUrl,
        isbn,
        ageGroup,
        recommendations: [{ readerId, text: recommendation }]
      });
      res.status(201).json({ newBookRecommendation });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

exports.getBooksByAgeGroup = async (req, res) => {
  try {
    const { ageGroup } = req.params;
    
    const books = await BookRecommendation.find({ ageGroup }).populate('recommendations.readerId');
    res.status(200).json({ books });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
