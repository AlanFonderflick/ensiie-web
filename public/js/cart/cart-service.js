'use strict';

angular.module('ecommerce')
  .factory('Cart', [
  	function () {
  		//
		// Share cart between controllers
		//
		var cart = [];

		// Public API
		return {
			getCart: function() {
				return cart;
			},
			setCart: function(scopeCart) {
				cart = scopeCart;
			}
		};
	}
  ]);
