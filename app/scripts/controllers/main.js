'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
	.controller('MainCtrl', function ($scope,$http) {
	
	$http.get('http://it-nolan-dfctools.dfplainville.com/pricemanagementsystem/PACG/characters.php',{params:{'action':'random','limit':'1'}})
        .success(function(res){
                console.log(res);
                $scope.characters=res;
        })
        .error(function(res){
                console.error(res);
        });

});
