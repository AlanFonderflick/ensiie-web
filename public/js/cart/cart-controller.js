'use strict';

angular.module('ecommerce')
  .controller('CartController', ['$scope', 'Cart',
    function ($scope, Cart) {

      //Just refresh number of products in cart
      $scope.cart = Cart.getCart();

    }]);
