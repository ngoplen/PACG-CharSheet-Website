'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:InventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('InventoryCtrl', function ($scope,$http,$cookies,$location,$rootScope) {

  var inventoryOrder=["Weapon","Armor","Spell","Item","Ally","Blessing"];
  
  angular.forEach(inventoryOrder, function (value, key) {
    $http.get(API_PATH + 'cards.php',{params:{'action':'inventory','type':value,'character':$rootScope.active_character_id}})
    .success(function(res){
      if (value === "Weapon")
        $scope.weapons=res;
      if (value === "Armor")
        $scope.armors=res;
      if (value === "Spell")
        $scope.spells=res;
      if (value === "Item")
        $scope.items=res;
      if (value === "Ally")
        $scope.allies=res;
      if (value === "Blessing")
        $scope.blessings=res;
    })
    .error(function(res){
      console.error(res);
    });
  });

  angular.forEach(inventoryOrder, function (value, key) {
    $http.get(API_PATH + 'cards.php',{params:{'action':'cardsALL','type':value}})
    .success(function(res){
      if (value === "Weapon")
        $scope.weaponsALL=res;
      if (value === "Armor")
        $scope.armorsALL=res;
      if (value === "Spell")
        $scope.spellsALL=res;
      if (value === "Item")
        $scope.itemsALL=res;
      if (value === "Ally")
        $scope.alliesALL=res;
      if (value === "Blessing")
        $scope.blessingsALL=res;
    })
    .error(function(res){
      console.error(res);
    });
  });

  $scope.inventoryAdjust = function(card_id,action){
    if (action=="inventoryAdd"){
      if (card_id=="weapon")
        card_id=$scope.weaponsADD;
      else if (card_id=="armor")
        card_id=$scope.armorsADD;
      else if (card_id=="spell")
        card_id=$scope.spellsADD;
      else if (card_id=="item")
        card_id=$scope.itemsADD;
      else if (card_id=="ally")
        card_id=$scope.alliesADD;
      else if (card_id=="blessing")
        card_id=$scope.blessingsADD;
    }
    $http.get(API_PATH + 'cards.php',{params:{'action':action,'card_id':card_id,'character_id':$rootScope.active_character_id}})
    .success(function(res){
      
      angular.forEach(inventoryOrder, function (value, key) {
        $http.get(API_PATH + 'cards.php',{params:{'action':'inventory','type':value,'character':$rootScope.active_character_id}})
        .success(function(res){
          if (value === "Weapon")
            $scope.weapons=res;
          if (value === "Armor")
            $scope.armors=res;
          if (value === "Spell")
            $scope.spells=res;
          if (value === "Item")
            $scope.items=res;
          if (value === "Ally")
            $scope.allies=res;
          if (value === "Blessing")
            $scope.blessings=res;
           
          $scope.weaponsADD="?";
          $scope.armorsADD="?";
          $scope.spellsADD="?";
          $scope.itemsADD="?";
          $scope.alliesADD="?";
          $scope.blessingsADD="?";
        })
        .error(function(res){
          console.error(res);
        });
      });      
    })
    .error(function(res){
      console.error(res);
    });
  };
});
