'use strict';

angular.module('ecommerce')
  .factory('Shoe', ['$resource', function ($resource) {
    return $resource('ecommerce/shoes/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
