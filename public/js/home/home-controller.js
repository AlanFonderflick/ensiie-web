angular.module('ecommerce')
  .controller('HomeController', ['$scope', 'Shoe', 'Cart', function ($scope, Shoe, Cart) {

  	//ask for shoes in DB
  	$scope.shoes = Shoe.query();

  	//Filter by category
  	$scope.filters = {};

  	//OrderBy price and name
  	$scope.sort = '';

  	//Show only some quantity
  	$scope.quantity = 12;

  	$scope.searchText=''; //not fixed


  	//
  	//Cart management
  	//

  	$scope.cart = Cart.getCart();

  	$scope.addCart = function(shoe){
  		$scope.cart.push(shoe);
  		Cart.setCart($scope.cart);
  	}

  }]);
