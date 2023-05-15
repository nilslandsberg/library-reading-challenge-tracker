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