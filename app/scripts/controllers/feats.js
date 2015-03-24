'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:FeatsCtrl
 * @description
 * # FeatsCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('FeatsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
