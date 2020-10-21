const User = require('../models/user');
const AWS = require('aws-sdk');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const { registerEmailParams } = require('../helpers/email');
const shortId = require('shortid');

AWS.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION
});

// creating aws ses instance
const ses = new AWS.SES({apiVersion: '2010-12-01'});

exports.register = (req, res) => {
    // getting data on server
  // console.log("REGISTER CONTROLLER", req.body);

  const {name, email, password} = req.body;

  // check if user exists in our db
  User.findOne({email}).exec((err, user)=>{
    if (user) {
      // console.log(err)
      return res.status(400).json({
        error: 'Email is taken'
      })
    }
    // GENERATE TOKEN WITH USERNAME EMAIL PASSWORD
    // create token to activete account
    const token = jwt.sign({name, email, password}, process.env.JWT_ACCOUNT_ACTIVATION, {
      expiresIn: '10m'
    });


    // send email
    const params = registerEmailParams(email, token)
  

 
  const sendEmailOnRegister = ses.sendEmail(params).promise();

  sendEmailOnRegister
  .then(data => {
    console.log('email submitted to SES', data);
   res.json({
    //  send this message to register.js(client side) also in handle submit in .then
    message: `Email has been sent to ${email}, Follow the instructions to complete your registration`
  })
})

.catch(error => {
  console.log('ses email on register', error);
  res.json({
    //  send this message to register.js(client side) also in handle submit in .catch
      message: `We could not verify your email. Please try again`
    })
  });
});
};

// register/Activate
exports.registerActivate = (req, res) => {
  const { token } = req.body;
  // console.log(token);
  // verify token for( 10 minutes) if it is after 10 min. then gene. error
  jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
      if (err) {
          return res.status(401).json({
              error: 'Expired link. Try again'
          });
      }

      const { name, email, password } = jwt.decode(token);
        // generate unique username
      const username = shortId.generate();

      // check already exist or not

      User.findOne({ email }).exec((err, user) => {
          if (user) {
              return res.status(401).json({
                  error: 'Email is taken'
              });
          }

          // otherwise register new user
          const newUser = new User({ username, name, email, password });
          newUser.save((err, result) => {
              if (err) {
                  return res.status(401).json({
                      error: 'Error saving user in database. Try later'
                  });
              }
              return res.json({
                  message: 'Registration success. Please login.'
              });
          });
      });
  });
};


exports.login =(req, res) =>{
  const { email, password } = req.body;
  // console.table({email, password})
  // check account with respective email exist or not
  User.findOne({email}).exec((err, user)=>{
    if(err || !user){
      return res.status(400).json({
        error: 'User with that email does not exist. Please register first.'
      })
    }
// authenticate method to match the password
if(!user.authenticate(password)){
  return res.status(400).json({
    error: 'Email and password do not match'
  })
}
// if matched
// generate token and send to client
const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
const {_id, name, email, role} = user;

return res.json({
  token,
  user: {_id, name, email, role }
});
  });
};

// require signin match the token and make pages accessible if they are logged in
// it will match with JWT_SECRET(which is in just above func) and expiry and get user_id available to us
exports.requireSignin = expressJwt({ secret: process.env.JWT_SECRET,  algorithms: ['sha1', 'RS256', 'HS256']}); // req.user

// implementing middlewares
// auth will check user have role of subscriber
// admin middleware allow access to admin which means user with role of admin
exports.authMiddleware = (req, res, next)=>{
  const authUserId = req.user._id
  User.findOne({_id: authUserId}).exec((err, user) =>{
      if (err || !user) {
        return res.status(400).json({
          error: "User not found"
        })
      }
      // add user information in req.profile
      req.profile = user
      next()
  })
}
exports.adminMiddleware = (req, res, next)=>{
  const adminUserId = req.user._id
  User.findOne({_id: adminUserId}).exec((err, user) =>{
      if (err || !user) {
        return res.status(400).json({
          error: "User not found"
        })
      }
      if (user.role ===! 'admin') {
        return res.status(400).json({
          error: "Admin resource. Access Denied"
        })
      }
      // it will get all the details of user
      req.profile = user
      next()
  })
}
