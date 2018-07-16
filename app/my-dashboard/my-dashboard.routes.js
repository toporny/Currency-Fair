(function () {
    angular
        .module('authApp')
        .config(routes);

    routes.$inject = ['$stateProvider'];

    function routes($stateProvider) {
        $stateProvider
            .state('my-dashboard', {
                url: '/my-dashboard',
                templateUrl: '../app/my-dashboard/my-dashboard.html',
                controller: 'myDashboardController as myDashboard'
            })
    }
})();
