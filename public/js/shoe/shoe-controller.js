'use strict';

angular.module('ecommerce')
  .controller('ShoeController', ['$scope', '$modal', 'resolvedShoe', 'Shoe',
    function ($scope, $modal, resolvedShoe, Shoe) {

      $scope.shoes = resolvedShoe;

      $scope.create = function () {
        $scope.clear();
        $scope.open();
      };

      $scope.update = function (id) {
        $scope.shoe = Shoe.get({id: id});
        $scope.open(id);
      };

      $scope.delete = function (id) {
        Shoe.delete({id: id},
          function () {
            $scope.shoes = Shoe.query();
          });
      };

      $scope.save = function (id) {
        if (id) {
          Shoe.update({id: id}, $scope.shoe,
            function () {
              $scope.shoes = Shoe.query();
              $scope.clear();
            });
        } else {
          Shoe.save($scope.shoe,
            function () {
              $scope.shoes = Shoe.query();
              $scope.clear();
            });
        }
      };

      $scope.clear = function () {
        $scope.shoe = {
          
          "name": "",
          
          "description": "",
          
          "image": "",
          
          "price": "",
          
          "category": "",
          
          "id": ""
        };
      };

      $scope.open = function (id) {
        var shoeSave = $modal.open({
          templateUrl: 'shoe-save.html',
          controller: 'ShoeSaveController',
          resolve: {
            shoe: function () {
              return $scope.shoe;
            }
          }
        });

        shoeSave.result.then(function (entity) {
          $scope.shoe = entity;
          $scope.save(id);
        });
      };
    }])
  .controller('ShoeSaveController', ['$scope', '$modalInstance', 'shoe',
    function ($scope, $modalInstance, shoe) {
      $scope.shoe = shoe;

      

      $scope.ok = function () {
        $modalInstance.close($scope.shoe);
      };

      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };
    }]);
