'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:ProgressCtrl
 * @description
 * # ProgressCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('ProgressCtrl', function ($scope,$http,$rootScope) {
  

  $http.get(API_PATH + 'progress.php',{params:{'action':'view','type':'Adventure Path','character_id':$rootScope.active_character_id}})
    .success(function(res){
      console.log(res);
      $scope.AdventurePath=res;
    })
    .error(function(res){
      console.error(res);
  });

  $http.get(API_PATH + 'progress.php',{params:{'action':'view','type':'Adventure','character_id':$rootScope.active_character_id}})
    .success(function(res){
      console.log(res);
      $scope.Adventure=res;
    })
    .error(function(res){
      console.error(res);
  });

  $http.get(API_PATH + 'progress.php',{params:{'action':'view','type':'Scenario','character_id':$rootScope.active_character_id}})
    .success(function(res){
      console.log(res);
      $scope.Scenario=res;
    })
    .error(function(res){
      console.error(res);
  });
  
  $scope.progressUpdate = function (card) {
    console.log('card=' + card);
    $http.get(API_PATH + 'progress.php',{params:{'action':'update','card':card}})
    .success(function(res){
      console.log(res);
      $http.get(API_PATH + 'progress.php',{params:{'action':'view','type':'Adventure','character_id':$rootScope.active_character_id}})
      .success(function(res){
        $scope.Adventure=res;
      })
      .error(function(res){
        console.error(res);
      });

      $http.get(API_PATH + 'progress.php',{params:{'action':'view','type':'Scenario','character_id':$rootScope.active_character_id}})
        .success(function(res){
          $scope.Scenario=res;
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
