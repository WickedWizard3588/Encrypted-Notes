const router = require('express').Router();
const loadSignupRoute = require('./signup');
const loadCreatedRoute = require('./createduser');
const loadAccountAlreadyCreated = require('./account');

router.use('/signup', loadSignupRoute);
router.use('/createduser', loadCreatedRoute);
router.use('/account', loadAccountAlreadyCreated);

module.exports = router;