// Declare app level module which depends on filters, and services
angular.module('ecommerce', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html', 
        controller: 'HomeController'})
      .when('/cart', {
        templateUrl: 'views/cart/cart.html', 
        controller: 'CartController'})
      .otherwise({redirectTo: '/'});
  }]);
