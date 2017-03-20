var myfooter = {
    templateUrl: '/public/app/common/footer/footer.html',
    controller: footerController
};

angular
    .module('myfooter')
    .component('myfooter', myfooter);
