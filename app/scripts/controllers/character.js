'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:CharacterCtrl
 * @description
 * # CharacterCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('CharacterCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
