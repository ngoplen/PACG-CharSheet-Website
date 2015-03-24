'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:CardaddCtrl
 * @description
 * # CardaddCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('CardaddCtrl', function ($scope,$http,$rootScope,$cookies) {
  
  $http.get(API_PATH + 'sets.php',{params:{'action':'all'}})
    .success(function(res){
      $scope.sets=res;
    })
    .error(function(res){
      console.error(res);
  });
  
  $http.get(API_PATH + 'cards.php',{params:{'action':'types'}})
    .success(function(res){
      $scope.cardTypes=res;
    })
    .error(function(res){
      console.error(res);
  });
  
  $http.get(API_PATH + 'cards.php',{params:{'action':'origin'}})
    .success(function(res){
      $scope.origin=res;
    })
    .error(function(res){
      console.error(res);
  });
  
  $http.get(API_PATH + 'cards.php',{params:{'action':'attributes'}})
    .success(function(res){
      $scope.attribute=res;
    })
    .error(function(res){
      console.error(res);
  });
  
  $scope.addNewCard = function(){
    if ($scope.formInfo.set != undefined && $scope.formInfo.type != undefined && $scope.formInfo.cardName != undefined && $scope.formInfo.origin != undefined){
      //required stuff for a new card
      if ($scope.formInfo.attribute1 != undefined || $scope.formInfo.attribute2 != undefined || $scope.formInfo.attribute3 != undefined || $scope.formInfo.attribute4 != undefined || $scope.formInfo.attribute5 != undefined || $scope.formInfo.attribute6 != undefined){
        //need at least 1 attribute, we are good to upload to website
        $http.get(API_PATH + 'cards.php',{params:{'action':'add','cardInfo':$scope.formInfo,'account_id':$rootScope.account_id}})
          .success(function(res){
            $scope.formInfo = "";
            $scope.successmessage = "Success!";
            $scope.success = true;
          })
          .error(function(res){
            console.log(res);
        });
      }
      else{
        $scope.errormessage="Cards need at least 1 attribute";
        $scope.error = true;
      }
    }
  };  

  
  
  });
