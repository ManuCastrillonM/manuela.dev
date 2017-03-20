function skillsController() {
    var ctrl = this;
    ctrl.$onInit = function() {
        new WOW().init();
    }

};
angular
    .module('skills')
    .controller('skillsController', skillsController);
