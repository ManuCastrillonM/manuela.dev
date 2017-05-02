'use strict'

//Configraciones para el servidor
const path = require('path');

const all = {
    root: path.normalize(__dirname + '/../../..'),
    port: process.env.PORT || 3000,
    ip: process.env.IP || "0.0.0.0"
}

module.exports = all;
