'use strict';

angular.module('ecommerce')
  .controller('CartController', ['$scope', 'Cart',
    function ($scope, Cart) {

      //Just refresh number of products in cart
      $scope.cart = Cart.getCart();


    $scope.removeCart = function(id){

      var index = -1;   
      var comArr = eval( $scope.cart );
      for( var i = 0; i < comArr.length; i++ ) {
        if( comArr[i].id === id ) {
          index = i;
          break;
        }
      }
      if( index === -1 ) {
        alert( "Something gone wrong" );
      }
      $scope.cart.splice( index, 1 );  

      Cart.setCart($scope.cart);

    };

    }]);
