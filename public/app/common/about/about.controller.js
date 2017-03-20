function aboutController() {
    var ctrl = this;
    ctrl.$onInit = function() {
        new WOW().init();
    }
};
angular
    .module('about')
    .controller('aboutController', aboutController);
