const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1> You already have a account. <br> Please login in instead of signing up </h1>');
});

module.exports = router;