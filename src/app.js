const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const loadMongo = require('./mongo');
const loadRouter = require('./routes');
const { port } = require('./config');
const app = express();
loadMongo();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', loadRouter);

app.listen(port, () => {
    console.log(`Notes app is listening at ${port}`);
});