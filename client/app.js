var App = angular.module('app',['ui.router','MainModule']);

App.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/app/home");

    $stateProvider
        .state('app', {
            url: "/app",
            abstract: true
        })
}]);