require('dotenv').config();

const config = {
    mongoURI: process.env.mongoURI || 'mongodb://localhost:27017',
    dbName: process.env.dbName || 'notes',
    mongoPath: process.env.mongoPath || 'mongodb://localhost:27017/notes',
    port: process.env.port || '8080',
};

module.exports = config;