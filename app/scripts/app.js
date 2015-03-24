'use strict';

/**
 * @ngdoc overview
 * @name pacgApp
 * @description
 * # pacgApp
 *
 * Main module of the application.
 */
 
var API_PATH = "http://it-nolan-dfctools.dfplainville.com/pricemanagementsystem/PACG/";

angular
  .module('pacgApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/character', {
        templateUrl: 'views/character.html',
        controller: 'CharacterCtrl'
      })
      .when('/extras', {
        templateUrl: 'views/extras.html',
        controller: 'ExtrasCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/powers', {
        templateUrl: 'views/powers.html',
        controller: 'PowersCtrl'
      })
      .when('/cards', {
        templateUrl: 'views/cards.html',
        controller: 'CardsCtrl'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl'
      })
      .when('/progress', {
        templateUrl: 'views/progress.html',
        controller: 'ProgressCtrl'
      })
      .when('/feats', {
        templateUrl: 'views/feats.html',
        controller: 'FeatsCtrl'
      })
      .when('/fleet', {
        templateUrl: 'views/fleet.html',
        controller: 'FleetCtrl'
      })
      .when('/diceRoller', {
        templateUrl: 'views/diceroller.html',
        controller: 'DicerollerCtrl'
      })
      .when('/plunderRoller', {
        templateUrl: 'views/plunderroller.html',
        controller: 'PlunderrollerCtrl'
      })
      .when('/summon', {
        templateUrl: 'views/summon.html',
        controller: 'SummonCtrl'
      })
      .when('/reference', {
        templateUrl: 'views/reference.html',
        controller: 'ReferenceCtrl'
      })
      .when('/rulebook', {
        templateUrl: 'views/rulebook.html',
        controller: 'RulebookCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/cardAdd', {
        templateUrl: 'views/cardadd.html',
        controller: 'CardaddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    })
    .run(function($rootScope, $location, $cookies, $http){

      var username = $cookies.username;
      var session_id = $cookies.session_id;

      $http.get(API_PATH + 'account.php',{params:{'action':'validate','username':username,'session_id':session_id}})
        .success(function(session){
          if (session[0].success === "true"){//session checks out, continue on
            $rootScope.account_id=session[0].account_id;
            $rootScope.loggedIn="true";
            $rootScope.characterName=session[0].character_name;
            $rootScope.active_character_id=session[0].active_character_id;
            $rootScope.character_id=session[0].character_id;
            $http.get(API_PATH + 'characters.php',{params:{'action':'account','user_id':session[0].account_id,'active':'t'}})
              .success(function(res){
                console.log(res);
                $rootScope.activeAccountCharacters=res;
              })
              .error(function(res){
                console.log(res);
            });
          }
          else {
            $rootScope.loggedIn="";
          }
        })
        .error(function(res){
          console.log(res);
      });
    
  });
