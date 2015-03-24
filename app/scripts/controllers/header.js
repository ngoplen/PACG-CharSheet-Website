'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('HeaderCtrl', function ($http,$scope,$location,$cookies,$rootScope) {
  
  $scope.isActive = function (viewLocation) { 
    var location = $location.path();
    if (location=="/skills" || location=="/powers" || location =="/cards" || location =="/inventory" || location =="/progress" || location =="/fleet")
      location="/character";
    if (location=="/diceRoller" || location =="/plunderRoller" || location =="/summon" || location =="/rulebook" || location =="/reference" || location == "/cardAdd")
      location="/extras";
    return viewLocation === location;
  };
  
  $scope.logout = function() {
    $cookies.username="";
    $cookies.session_id="";
    $rootScope.loggedIn="";
    $location.path("/");
  }
  
  $scope.changeActiveCharacter = function(player_character_id){
    $http.get(API_PATH + 'account.php',{params:{'action':'changeCharacter','account_id':$rootScope.account_id,'player_character_id':player_character_id}})
      .success(function(res){
        $rootScope.characterName=res.character_name;
        $rootScope.active_character_id=player_character_id;
        $rootScope.character_id=res.character_id;
        $location.path("/skills");
      })
      .error(function(res){
    
    });
  }
    
  
  });
