'use strict';

/**
 * @ngdoc function
 * @name pacgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pacgApp
 */
angular.module('pacgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
