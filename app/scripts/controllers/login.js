'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('LoginCtrl', function ($scope,$http,$cookies,$location) {
  
  $scope.login = function(){
    if ($scope.formInfo.username != undefined && $scope.formInfo.password != undefined){
      $http.get(API_PATH + 'account.php',{params:{'action':'login','username':$scope.formInfo.username,'password':$scope.formInfo.password}})
        .success(function(res){
          console.log(res);
          if (res[0].success === "true"){
            $cookies.username=$scope.formInfo.username;
            $cookies.session_id=res[0].session_id;
            $location.path("/skills");
          }
          else{
          
          }
        })
        .error(function(res){
          console.log(res);
      });
    }
  }  
  
  });
