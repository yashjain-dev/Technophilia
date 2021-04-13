const express = require('express');

const router = express.Router();

// accessing home page
const internshipController = require('../controllers/internship_controller');
router.get('/internship_registration_page', internshipController.internship_registration_page);
router.post('/internship_register', internshipController.internship_register);

module.exports = router;