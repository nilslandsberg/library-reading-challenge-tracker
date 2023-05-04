const express = require('express');
const checkAuth = require('./../middleware/checkAuth');
const childController = require('../controllers/childController');

const router = express.Router();

router
  .route('/')
  .get(checkAuth, childController.getAllChildren)
  .post(checkAuth, childController.addChild)

router
  .route('/:childId')
  .get(checkAuth, childController.getOneChild)
  .delete(checkAuth, childController.deleteOneChild);

router
  .route('/:childId/age')
  .patch(checkAuth, childController.updateAge);

module.exports = router;