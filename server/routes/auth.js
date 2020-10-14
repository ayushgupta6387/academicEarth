const express = require("express");

const router = express.Router();

// import from controller
const {register} = require('../controllers/auth');

// import vaidators
const {userRegisterValidator} = require('../validators/auth');
const {runValidation} = require('../validators');

// apply validator before register controller
router.post('/register', userRegisterValidator, runValidation,register);
// export router so that we can use it on other files
module.exports = router;