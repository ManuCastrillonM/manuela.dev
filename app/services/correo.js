'use strict'

exports.correo = function(nombre, correo, mensaje) {
    var contenido = '<h1 style="background-color:#DEDDD3; color:#CD3E3D">Mensaje de ' + nombre + '<h1><div style="padding:5em; text-align:justify;"><p>' + mensaje + '</p><h6>' + nombre + '</h6><h6>' + correo + '</h6></div>'
    return contenido;
}
