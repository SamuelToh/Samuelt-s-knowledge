'use strict';

/**
 * @ngdoc overview
 * @name 15CssTwitterBootstrapGridSystemApp
 * @description
 * # 15CssTwitterBootstrapGridSystemApp
 *
 * Main module of the application.
 */
angular
  .module('15CssTwitterBootstrapGridSystemApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
