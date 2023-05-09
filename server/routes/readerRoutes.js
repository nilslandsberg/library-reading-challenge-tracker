const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const readerController = require('../controllers/readerController');

const router = express.Router();

router
  .route('/')
  .get(checkAuth, readerController.getAllReaders)
  .post(checkAuth, readerController.addReader)

router
  .route('/:readerId')
  .get(checkAuth, readerController.getOneReader)
  .delete(checkAuth, readerController.deleteOneReader);

router
  .route('/:readerId/age')
  .patch(checkAuth, readerController.updateAge);

module.exports = router;