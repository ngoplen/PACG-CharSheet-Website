'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:FleetCtrl
 * @description
 * # FleetCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('FleetCtrl', function ($scope,$http,$rootScope) {

  $http.get(API_PATH + 'cards.php',{params:{'action':'getShipClasses'}})
    .success(function(res){
      var shipClasses=res;
      
        angular.forEach(shipClasses, function (value, key) {
          $http.get(API_PATH + 'cards.php',{params:{'action':'fleet','character':$rootScope.active_character_id,'attribute':value.id}})
            .success(function(res){
              if (value.attribute === "Class 0")
                $scope.class0=res;
              else if (value.attribute === "Class 1")
                $scope.class1=res;
              else if (value.attribute === "Class 2")
                $scope.class2=res;
              else if (value.attribute === "Class 3")
                $scope.class3=res;
              else if (value.attribute === "Class 4")
                $scope.class4=res;
              else if (value.attribute === "Class 5")
                $scope.class5=res;
              else if (value.attribute === "Class 6")
                $scope.class6=res;
              else if (value.attribute === "Class 7")
                $scope.class7=res;
            })
            .error(function(res){
              console.error(res);
            });
      });
    })
    .error(function(res){
      console.error(res);
  });
  
  $scope.fleetUpdate = function (card,attribute,shipClass) {
    $http.get(API_PATH + 'cards.php',{params:{'action':'fleetUpdate','card':card}})
    .success(function(res){
      console.log(res);
      
      $http.get(API_PATH + 'cards.php',{params:{'action':'getShipClasses'}})
      	.success(function(res){
	  var shipClasses=res;

	  angular.forEach(shipClasses, function (value, key) {
            $http.get(API_PATH + 'cards.php',{params:{'action':'fleet','character':$rootScope.active_character_id,'attribute':value.id}})
              .success(function(res){
                if (value.attribute === "Class 0")
                  $scope.class0=res;
                else if (value.attribute === "Class 1")
                  $scope.class1=res;
                else if (value.attribute === "Class 2")
                  $scope.class2=res;
                else if (value.attribute === "Class 3")
                  $scope.class3=res;
                else if (value.attribute === "Class 4")
                  $scope.class4=res;
                else if (value.attribute === "Class 5")
                  $scope.class5=res;
                else if (value.attribute === "Class 6")
                  $scope.class6=res;
                else if (value.attribute === "Class 7")
                  $scope.class7=res;
              })
              .error(function(res){
                console.error(res);
              });
        });
      })
      .error(function(res){
        console.error(res);
      });
    })
    .error(function(res){
      console.error(res);
    });
  };
});
