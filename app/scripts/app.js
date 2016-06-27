'use strict';

/**
 * @ngdoc overview
 * @name angular2016App
 * @description
 * # angular2016App
 *
 * Main module of the application.
 */
angular
  .module('angular2016App', [
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
      .when('/ngmodel1', {
        templateUrl: 'views/ngmodel1.html',
        controller: 'Ngmodel1Ctrl',
        controllerAs: 'ngmodel1'
      })
      .when('/ngsubmit1', {
        templateUrl: 'views/ngsubmit1.html',
        controller: 'Ngsubmit1Ctrl',
        controllerAs: 'ngsubmit1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
