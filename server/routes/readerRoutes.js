const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const readerController = require('../controllers/readerController');

const router = express.Router();

router
  .route('/')
  .get(checkAuth, readerController.getAllReaders)
  .post(checkAuth, readerController.addReader);

router
  .route('/:readerId')
  .get(checkAuth, readerController.getOneReader)
  .post(checkAuth, readerController.addBookToReader)
  .patch(checkAuth, readerController.updateReader)
  .delete(checkAuth, readerController.deleteOneReader);

router
  .route('/:readerId/books')
  .patch(checkAuth, readerController.removeBooksFromReader);

router 
  .route('/:readerId/reading-time')
  .patch(checkAuth, readerController.updateReadingTime)

module.exports = router;