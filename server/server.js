const express = require("express");

const app = express();

// receive the request that is coming from client side
app.get('/api/register', (req, res) => {
    res.json({
        data: 'you hit register endpoint'
    });
});

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`API is running on port ${port}`));