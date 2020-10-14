const express = require("express");

// cors is used to transfer data between one domain to another
// express validator: to give error when email is not valid or password
// jsonwebtoken: to generate jsonwebtoken
// morgan: whenever request coming from any route we can see in console

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();




// import routes
const authRoutes = require('./routes/auth');

// get: receive the request that is coming from client side

// middleware: code that you want to run in middle
// whenever we have request we are forwarding it to authRoutes
app.use('/api', authRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`API is running on port ${port}`));