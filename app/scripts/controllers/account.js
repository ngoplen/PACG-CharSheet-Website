'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('AccountCtrl', function ($scope, $http, $rootScope) {

  $http.get(API_PATH + 'characters.php',{params:{'action':'account','user_id':$rootScope.account_id,'active':'t'}})
    .success(function(res){
      $scope.accountCharactersActive=res;
    })
    .error(function(res){
      console.log(res);
    });
    
  $http.get(API_PATH + 'characters.php',{params:{'action':'account','user_id':$rootScope.account_id,'active':'f'}})
    .success(function(res){
      $scope.accountCharactersInactive=res;
    })
    .error(function(res){
      console.log(res);
    });

  $http.get(API_PATH + 'characters.php',{params:{'action':'all'}})
    .success(function(res){
      $scope.characters=res;
    })
    .error(function(res){
      console.error(res);
  });

  $http.get(API_PATH + 'sets.php',{params:{'action':'all'}})
    .success(function(res){
      $scope.base_sets=res;
    })
    .error(function(res){
      console.error(res);
  });

  $scope.newCharacter=function(character_id){
    $http.get(API_PATH + 'characters.php',{params:{'action':'add','user_id':$rootScope.account_id,'character_id':character_id}})
      .success(function(res){
        $http.get(API_PATH + 'characters.php',{params:{'action':'account','user_id':$rootScope.account_id,'active':'t'}})
          .success(function(res){
            $scope.accountCharactersActive=res;
            $rootScope.activeAccountCharacters=res;
          })
          .error(function(res){
            console.log(res);
        });
      })
      .error(function(res){
        console.log(res);
    });
  }

});
