'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:CardsCtrl
 * @description
 * # CardsCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
        .controller('CardsCtrl', function ($scope,$http,$cookies,$location,$rootScope) {

	var feats=["Weapon","Armor","Spell","Item","Ally","Blessing"];

        angular.forEach(feats, function (value, key) {
                $http.get(API_PATH + 'cardFeats.php',{params:{'action':'view','featName':value,'character':$rootScope.active_character_id}})
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
        
        $scope.cardFeatToggle=function(cardFeat_id, active){
                $http.get(API_PATH + 'cardFeats.php',{params:{'action':'update','cardFeat_id':cardFeat_id,'active':active}})
                .success(function(res){
                        angular.forEach(feats, function (value, key) {
                                $http.get(API_PATH + 'cardFeats.php',{params:{'action':'view','featName':value,'character':$rootScope.active_character_id}})
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
                })
                .error(function(res){
                        console.log(res);
                });        
        };
});
