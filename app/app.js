'use strict'

var express = require('express');
var favicon = require('serve-favicon');
const config = require('./config/enviroment');
const colors = require('colors');

var app = express();
app.use(favicon(__dirname + '/favicon.ico'));
require('./config/express')(app);
require('./routes')(app);

app.listen(config.port, () => {
    console.log("Corriendo");
})
