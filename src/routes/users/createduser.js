const router = require('express').Router();
const { port } = require('../../config');
const UserSchema = require('../../schema/user');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    UserSchema.findOne({
        email: req.query.email,
    }, (err, doc) => {
        if(err) return console.error(err);
        if(!doc) {
            console.log(req.query);
            bcrypt.genSalt(10, (err, salt) => {
                if(err) return console.error(err);
                bcrypt.hash(req.query.password, salt, (err, encrypted) => {
                    if(err) console.err(err);
                    UserSchema.create({
                        firstname: req.query.FName,
                        lastname: req.query.LName,
                        email: req.query.email,
                        password: encrypted,
                    });
                });
            });
            return res.redirect(`http://localhost:${port}/notes`);
        } else {
            return res.redirect(`http://localhost:${port}/users/account`);
        }
    });
});

module.exports = router;

