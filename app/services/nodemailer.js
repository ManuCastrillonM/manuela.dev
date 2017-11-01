"use strict";
var path = require("path");
var nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");
var correo = require("./correo.js");

exports.enviarCorreo = function(req, res) {
  var options = {
    service: "SendGrid",
    auth: {
      api_user: "XXXX",
      api_key: "XXX"
    }
  };
  var client = nodemailer.createTransport(sgTransport(options));
  var informacion = req.body;
  var myhtml = correo.correo(
    informacion.nombre,
    informacion.correo,
    informacion.mensaje
  );
  var informacion = req.body;
  var emailAdmin = {
    from: "XXXX",
    to: "XXXX",
    subject: "Te dejaron un mensaje en manucastrillonm.com",
    html: myhtml
  };

  client
    .sendMail(emailAdmin)
    .then(function(info) {})
    .catch(function(err) {
      console.log(err);
    });

  return res.status(200).send("Correcto");
};
