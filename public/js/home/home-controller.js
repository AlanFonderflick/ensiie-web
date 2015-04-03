angular.module('ecommerce')
  .controller('HomeController', ['$scope', 'Shoe', function ($scope, Shoe) {

  	//ask for shoes in DB
  	$scope.shoes = Shoe.query();

  	//Filter by category
  	$scope.filters = {};

  	//OrderBy price and name
  	$scope.sort = '';

  	//Show only some quantity
  	$scope.quantity = 12;
  	
  	$scope.searchText=''; //not fixed



  }]);
