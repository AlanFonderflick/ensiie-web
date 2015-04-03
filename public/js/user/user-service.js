'use strict';

angular.module('ecommerce')
  .factory('User', ['$resource', function ($resource) {
    return $resource('ecommerce/users/:id', {}, {
      'query': { method: 'GET', isArray: true},
      'get': { method: 'GET'},
      'update': { method: 'PUT'}
    });
  }]);
