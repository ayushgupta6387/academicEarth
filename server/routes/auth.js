const express = require("express");

const router = express.Router();

// import from controller
const {register, registerActivate, login, requireSignin} = require('../controllers/auth');

// import vaidators
const {userRegisterValidator, userLoginValidator} = require('../validators/auth');
const {runValidation} = require('../validators');

// apply validator before register controller
router.post('/register', userRegisterValidator, runValidation,register);

// creating route for /register/activate(on pages-->[id].js) client side
router.post('/register/activate', registerActivate);

// for login
router.post('/login', userLoginValidator, runValidation,login);

// restrict secret page only for logged in user by applying middleware requireSignin
// router.post('/secret', requireSignin, (req, res) => {
//     res.json({
//         data: 'This is secret page for logged in users only'
//     });
// });

// export router so that we can use it on other files
module.exports = router;