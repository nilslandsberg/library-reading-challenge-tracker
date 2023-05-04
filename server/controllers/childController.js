const Child = require('./../models/childModel');


// GET - get all users children
exports.getAllChildren = async (req, res) => {
  try {
    const children = await Child
      .find({
        userId: req.userData._id
      });
    
      if (children.length === 0) {
        const firstChild = new Child({
          userId: req.userData._id,
          name: "",
          age: null
        });
        return res.status(200).json({
          message: "user has not added any children to track"
        });
      } else {
        return res.status(200).json({ children });
      }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

// GET - get user child by id
exports.getOneChild = async (req, res) => {
  try {
    const { childId } = req.params;
    const child = await Child.findOne({ _id: childId })
    // if need to populate response items, this is where to do it

    if (!child) {
      return res.status(404).json({ messsage: 'child with given id not found' });
    } else {
      return res.status(200).json({ child: child });
    } 
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

// POST - add a child
exports.addChild = async (req, res) => {
  try {
    const { name, age } = req.body;
    const newChild = await Child.create({
      userId: req.userData._id,
      name: name,
      age: age,
      books: []
    });

    res.status(201).json({ newChild: newChild });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// PATCH - update child's age
exports.updateAge = async (req, res) => {
  try {
    const { childId } = req.params;
    const updatedChild = await Child.findOneAndUpdate(childId, { age: req.body.age }, { new: true });

    if (!updatedChild) {
      return res.status(404).json({ 
        message: 'child with given id not found' });
      } else {
        return res.status(200).json({ updatedChild: updatedChild });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

// DELETE - delete a child
exports.deleteOneChild = async (req, res) => {
  try {
    const { childId } = req.params;

    const child = await Child.findOne({ _id: childId });

    if (!child) {
      return res.status(404).json({ message: 'child with given id not found' });
    } else {
      const removedChild = await Child.findByIdAndDelete({ _id: childId });
      // const deletedBooks = await Book.deleteMany({ childId: childId });
    }
    return res.status(200).json({ message: "child deleted" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}