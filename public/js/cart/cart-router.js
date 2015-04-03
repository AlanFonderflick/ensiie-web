'use strict';

angular.module('ecommerce')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/cart', {
        templateUrl: 'views/cart/cart.html',
        controller: 'CartController',
        })
    }]
  );
