'use strict'
var express = require('express');
var nodemailer = require('./nodemailer');

var router = express.Router();
router.route('/enviarcorreo')
    .post((req, res) => {
        nodemailer.enviarCorreo(req, res);
    });

module.exports = router;
