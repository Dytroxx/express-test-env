
var express = require('express');

let root = require('./root');
let users = require('./users');

const app = express();

/* GET home page. */
app.use('/', root);
app.use('/users', users);

module.exports = app;
