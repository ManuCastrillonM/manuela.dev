function navbarController() {
    var ctrl = this;

    ctrl.openNavbar = function() {
        if ($('menu').hasClass('.mobile-click')) {
            $('#menu').removeClass('.mobile-click');
        } else {
            $('#menu').addClass('.mobile-click');
        }
    }
    ctrl.$onInit = function() {}
};
angular
    .module('navbar')
    .controller('navbarController', navbarController);
