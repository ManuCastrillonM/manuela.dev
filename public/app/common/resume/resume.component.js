var resume = {
    templateUrl: '/public/app/common/resume/resume.html',
    controller: resumeController
};

angular
    .module('resume')
    .component('resume', resume);
