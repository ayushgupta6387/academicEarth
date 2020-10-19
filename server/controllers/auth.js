
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId:process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
  region:process.env.AWS_REGION
});

// creating aws ses instance
const ses = new AWS.ses({apiVersion: 2010-12-01});

exports.register = (req, res) => {
  // console.log("REGISTER CONTROLLER", req.body);
};
