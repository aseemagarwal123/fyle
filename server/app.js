// app.js
var express = require('express');
var app = express();
var db = require('./db');


BankRoute=require('../routes/BankDetails')
 app.use('/v1/api/bankinfo',BankRoute );



module.exports = app;
