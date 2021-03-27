const router = require('express').Router();
const loadUsersRoute = require('./users');
const loadNotesRoute = require('./notes');

router.use('/users', loadUsersRoute);
router.use('/notes', loadNotesRoute);

module.exports = router;