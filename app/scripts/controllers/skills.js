'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:SkillsCtrl
 * @description
 * # SkillsCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('SkillsCtrl', function ($scope,$http,$cookies,$location,$rootScope) {

  var skillOrder=["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];

  angular.forEach(skillOrder, function (value, key) {
    $http.get(API_PATH + 'skills.php',{params:{'action':'view','skill':value,'character':$rootScope.active_character_id}})
    .success(function(res){
      if (value === "Strength")
        $scope.strength=res;
      if (value === "Dexterity")
        $scope.dexterity=res;
      if (value === "Intelligence")
        $scope.intelligence=res;
      if (value === "Wisdom")
        $scope.wisdom=res;
      if (value === "Charisma")
        $scope.charisma=res;
      if (value === "Constitution")
        $scope.constitution=res;
    })
    .error(function(res){
      console.error(res);
    });
  });

  $scope.skillToggle = function(skill_id,active){
    $http.get(API_PATH + 'skills.php',{params:{'action':'update','skill_id':skill_id,'active':active}})
      .success(function(res){
        angular.forEach(skillOrder, function (value, key) {
          $http.get(API_PATH + 'skills.php',{params:{'action':'view','skill':value,'character':$rootScope.active_character_id}})
          .success(function(res){
            if (value === "Strength")
              $scope.strength=res;
            if (value === "Dexterity")
              $scope.dexterity=res;
            if (value === "Intelligence")
              $scope.intelligence=res;
            if (value === "Wisdom")
              $scope.wisdom=res;
            if (value === "Charisma")
              $scope.charisma=res;
            if (value === "Constitution")
              $scope.constitution=res;
          })
          .error(function(res){
            console.error(res);
          });
        });
      })
      .error(function(res){
        console.log(res);
    });
  };

});
