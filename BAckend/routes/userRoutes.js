// Import express to create a router
const express = require('express');
// Import controller functions for user operations
const { registerUser, authUser } = require('../controllers/userController');

// Create an Express router instance
const router = express.Router();

// Define routes
// POST request to /api/users/register will call the registerUser controller function
router.post('/register', registerUser);
// POST request to /api/users/login will call the authUser controller function
router.post('/login', authUser);

// Export the router to be used in server.js
module.exports = router;
