const express = require('express');

const router = express.Router();

// accessing home page
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);

// accessing internship pages
router.use('/internship', require('./internship'));

module.exports = router;