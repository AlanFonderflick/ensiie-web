'use strict';

angular.module('ecommerce')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/shoes', {
        templateUrl: 'views/shoe/shoes.html',
        controller: 'ShoeController',
        resolve:{
          resolvedShoe: ['Shoe', function (Shoe) {
            return Shoe.query();
          }]
        }
      })
    }]);
