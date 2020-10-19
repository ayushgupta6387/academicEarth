const User = require('../models/user');
const AWS = require('aws-sdk');

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
  })

  const params = {
    Source:process.env.EMAIL_FROM,
    Destination: {
      // this should be a array
      ToAddresses: [email]
    },
    ReplyToAddresses: [process.env.EMAIL_TO],
    Message:{
      Body:{
        Html:{
          Charset: 'UTF-8',
          Data: `<html><body><h1>Hello ${name}</h1 style="color:red;"><p>Test Email</p></body></html>`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Complete Your Registration'
      }
    }
  };
  const sendEmailOnRegister = ses.sendEmail(params).promise();

  sendEmailOnRegister
  .then(data => {
    console.log('email submitted to SES', data);
    res.send('Email sent');
  })

  .catch(error => {
    console.log('ses email on register', error);
    res.send('email failed');
  });
};
