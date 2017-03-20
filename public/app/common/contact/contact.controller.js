function contactController(ContactService) {
    var ctrl = this;
    ctrl.mensaje = {};

    ctrl.enviarMensaje = function() {
        if ((ctrl.mensaje.nombre != undefined) && (ctrl.mensaje.correo != undefined) && (ctrl.mensaje.mensaje != undefined)) {
            ContactService
                .enviarMensaje(ctrl.mensaje)
                .then(function(data) {
                    borrarCampos();
                    var $toastContent = $('<span><i class="em em-smile"></i>Thank you! Your message has been sent</span>');
                    Materialize.toast($toastContent, 5000);
                })
                .catch(function(err) {
                    var $toastContent = $('<span><i class="em em-disappointed_relieved"></i>Error! Something is wrong</span>');
                    Materialize.toast($toastContent, 5000);
                });
        } else {
            var $toastContent = $('<span><i class="em em-disappointed_relieved"></i>Error! Remember to fill the fields correctly</span>');
            Materialize.toast($toastContent, 5000);
        }
    };

    ctrl.$onInit = function() {
        new WOW().init();
    }

    function borrarCampos() {
        document.getElementById("name").value = null;
        document.getElementById("email").value = null;
        document.getElementById("textarea-message").value = null;
    }
};

angular
    .module('contact')
    .controller('contactController', contactController);
