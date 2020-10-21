const express = require("express");

const router = express.Router();

// import controllers
// read user profile
const {read} = require('../controllers/user');


module.exports = router;