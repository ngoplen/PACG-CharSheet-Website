'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('SignupCtrl', function ($scope,$http,$cookies,$location) {
  
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
  
  $scope.createAccount = function(){
    if ($scope.formInfo.username != undefined && $scope.formInfo.email != undefined && $scope.formInfo.password != undefined && $scope.formInfo.password2 != undefined){
      if ($scope.formInfo.startingCharacter != undefined){
        if ($scope.formInfo.password == $scope.formInfo.password2){
          //ready to check if username is valid!
          $http.get(API_PATH + 'account.php',{params:{'action':'usernameCheck','username':$scope.formInfo.username}})
            .success(function(res){
              if (res.success > 0){
                $scope.errormessage="Sorry, that username is taken";
                $scope.error = true;
              }
              else{//ready to create account
                $scope.error = false;
                $scope.loading = true;
                $http.get(API_PATH + 'account.php',{params:{'action':'create','username':$scope.formInfo.username,'fName':$scope.formInfo.fName,'lName':$scope.formInfo.lName,'email':$scope.formInfo.email,'password':$scope.formInfo.password,'startingCharacter':$scope.formInfo.startingCharacter,'base_set':$scope.formInfo.set}})
                  .success(function(res){//set cookies and move user
                    console.log(res);
                    $cookies.username=$scope.formInfo.username;
                    $cookies.session_id=res.session_id;
                    $location.path('#/skills');
                  })
                  .error(function(res){
                  
                });
              }            
            })
            .error(function(res){
            
          });
      
        }
        else{
          $scope.errormessage="Passwords do not match";
          $scope.error = true;
        }
      }
      else{
        $scope.errormessage="Please choose a starting character";
        $scope.error = true;
      }
    }
    else
      $scope.error = false;
  }
  
});