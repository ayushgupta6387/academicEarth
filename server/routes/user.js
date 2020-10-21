const express = require("express");

const router = express.Router();

// import middlewares
const {requireSignin, authMiddleware, adminMiddleware} = require('../controllers/auth');

// import controllers
// read user profile
const {read} = require('../controllers/user');

// routes
// make request to /user, apply requireSignin so it is available if user logged in
router.get('/user', requireSignin, authMiddleware, read);
router.get('/admin', requireSignin, adminMiddleware, read);

module.exports = router;