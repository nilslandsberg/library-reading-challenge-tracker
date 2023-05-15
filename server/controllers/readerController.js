const Reader = require('../models/readerModel');
const Book = require('../models/bookModel')


// GET - get all user's Readers
exports.getAllReaders = async (req, res) => {
  try {
    const readers = await Reader
      .find({
        userId: req.userData._id
      });
    
      if (readers.length === 0) {
        const firstReader = new Reader({
          userId: req.userData._id,
          name: "",
          age: null
        });
        return res.status(200).json({
          message: "user has not added any readers to track"
        });
      } else {
        return res.status(200).json({ readers });
      }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// GET - get user reader by id
exports.getOneReader = async (req, res) => {
  try {
    const { readerId } = req.params;
    const reader = await Reader.findOne({ _id: readerId })
    // if need to populate response items, this is where to do it

    if (!reader) {
      return res.status(404).json({ messsage: 'reader with given id not found' });
    } else {
      return res.status(200).json({ reader: reader });
    } 
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

// POST - add a reader
exports.addReader = async (req, res) => {
  try {
    const { name, age, avatar } = req.body;
    const newReader = await Reader.create({
      userId: req.userData._id,
      name: name,
      age: age,
      avatar: avatar,
      books: []
    });

    res.status(201).json({ newReader: newReader });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// POST - adds book to reader
exports.addBookToReader = async (req, res) => {
  try {
    const { title, authors, description, pages, imageUrl } = req.body;
    const readerId = req.params.readerId;

    const newBook = await Book.create({
      readerId: readerId,
      title: title,
      authors: authors,
      description: description,
      pages: pages,
      imageUrl: imageUrl      
    });

    res.status(201).json({ newBook: newBook });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PATCH - update reader's age
exports.updateAge = async (req, res) => {
  try {
    const { readerId } = req.params;
    const updatedReader = await Reader.findOneAndUpdate(readerId, { age: req.body.age }, { new: true });

    if (!updatedReader) {
      return res.status(404).json({ 
        message: 'reader with given id not found' });
      } else {
        return res.status(200).json({ updatedReader: updatedReader });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

// DELETE - delete a reader
exports.deleteOneReader = async (req, res) => {
  try {
    const { readerId } = req.params;

    const reader = await Reader.findOne({ _id: readerId });

    if (!reader) {
      return res.status(404).json({ message: 'reader with given id not found' });
    } else {
      const removedReader = await Reader.findByIdAndDelete({ _id: readerId });
      // const deletedBooks = await Book.deleteMany({ readerId: readerId });
    }
    return res.status(200).json({ message: "reader deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}