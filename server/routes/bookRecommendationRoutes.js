const express = require('express');
const checkAuth = require('../middleware/checkAuth');
const bookRecommendationController = require('../controllers/bookRecommendationController');

const router = express.Router();

router
  .route('/')
  .post(checkAuth, bookRecommendationController.addBookRecommendation);

router 
  .route('/age-group/:ageGroup')
  .get(checkAuth, bookRecommendationController.getBooksByAgeGroup);

module.exports = router;