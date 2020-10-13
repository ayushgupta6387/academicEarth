const express = require("express");

const router = express.Router();

// import from controller
const {register} = require('../controllers/auth');

router.get('/register');
// export router so that we can use it on other files
module.exports = router;