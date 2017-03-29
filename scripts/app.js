var appModule = angular.module('zooApp', ['ngRoute', 'zooApp.filters']);

appModule.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .when('/animals', {
            templateUrl: 'views/animals.html',
            controller: 'animalController'
        })
        .when('/species', {
            templateUrl: 'views/species.html',
            controller: 'specieController'
        })
        .when('/cages', {
            templateUrl: 'views/cages.html',
            controller: 'cageController'
        })
        .when('/zookeepers', {
            templateUrl: 'views/zookeepers.html',
            controller: 'zooKeeperController'
        })
        .otherwise({ redirectTo: '/home' });
});

appModule.controller('homeController', function ($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
});

