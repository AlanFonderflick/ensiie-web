'use strict';

angular.module('ecommerce')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/user/users.html',
        controller: 'UserController',
        resolve:{
          resolvedUser: ['User', function (User) {
            return User.query();
          }]
        }
      })
      .when('/subscription', {
        templateUrl: 'views/user/subscription.html',
        controller: 'HomeController'
      })
    }]);
