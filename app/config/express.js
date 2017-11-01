'use strict'
var express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const config =  require('./enviroment');

module.exports = function(app) {
    app.use(compression())
    app.use(bodyparser.json());
    app.use(helmet());
    app.use(morgan('dev'));
    app.use('/public',express.static(path.join(config.root,'/public')));
    app.use('/node_modules',express.static(path.join(config.root,'/node_modules')));
    app.use('/bower_components',express.static(path.join(config.root,'/bower_components')));
}
