function ContactService($http, $q) {

    var route = "https://www.manucastrillonm.com/api/";

    return {
        enviarMensaje: function(mensaje) {
          console.info('Click send')
            var defered = $q.defer();
            var promise = defered.promise;
            $http.post(route + "enviarcorreo/enviarcorreo", mensaje)
                .then(function(data) {
                    defered.resolve(data);
                });
            return promise;
        }
    };
}


angular
    .module('contact')
    .factory('ContactService', ContactService);
