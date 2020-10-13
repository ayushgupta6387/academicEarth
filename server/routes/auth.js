const express = require("express");

const router = express.Router();

router.get('/register', (req, res) => {
    res.json({
        data: 'you hit register endpoint middleware...'
    });
});

// export router so that we can use it on other files
module.exports = router;