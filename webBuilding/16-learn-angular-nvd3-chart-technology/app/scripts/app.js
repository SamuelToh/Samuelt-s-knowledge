'use strict';

/**
 * @ngdoc overview
 * @name 16-learn-angular-nvd3-chart-technology
 * @description
 * # 16-learn-angular-nvd3-chart-technology
 *
 * Main module of the application.
 */
angular
  .module('16-learn-angular-nvd3-chart-technology', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'nvd3'
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
