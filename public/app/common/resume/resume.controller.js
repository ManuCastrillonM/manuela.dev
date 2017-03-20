function resumeController() {
    var ctrl = this;
    ctrl.$onInit = function() {
        new WOW().init();
    }
};
angular
    .module('resume')
    .controller('resumeController', resumeController);
