var projects = {
    templateUrl: '/public/app/common/projects/projects.html',
    controller: projectsController
};

angular
    .module('projects')
    .component('projects', projects);
