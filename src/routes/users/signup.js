const router = require('express').Router();
const { join } = require('path');

router.get('/', (req, res) => res.sendFile(join(process.cwd(), './src/public/signup.html')));

module.exports = router;