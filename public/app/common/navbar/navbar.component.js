var navbar = {
    templateUrl: '/public/app/common/navbar/navbar.html',
    controller: navbarController
};

angular
    .module('navbar')
    .component('navbar', navbar);
