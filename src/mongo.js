module.exports = () => {
    const { mongoPath } = require('./config');
    const { connect } = require('mongoose');
    connect(mongoPath, {
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (err) => {
        if(err) return console.error('Mongo ERR:', err);
        console.log(`Successfully connected to MongoDB at URI "${mongoPath}"`);
    });
};