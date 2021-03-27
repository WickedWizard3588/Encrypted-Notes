const { Schema, model } = require('mongoose');

const reqString = {
    type: String,
    required: true,
};

const userSchema = Schema({
    firstname: reqString,
    lastname: reqString,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});


module.exports = model('user', userSchema);