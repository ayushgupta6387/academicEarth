const express = require("express");

const app = express();

// import routes
const authRoutes = require('./routes/auth');

// get: receive the request that is coming from client side

// middleware: code that you want to run in middle
// whenever we have request we are forwarding it to authRoutes
app.use('/api', authRoutes);

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`API is running on port ${port}`));