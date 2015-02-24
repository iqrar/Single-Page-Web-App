var myApp = angular.module('myApp', 
  ['ngRoute','ui.bootstrap' ]);

myApp.config(['$routeProvider',  function($routeProvider) {
  
    $routeProvider.
      when('/login', {
        templateUrl: 'views/login.html',
        controller:  'RegistrationController'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller:  'RegistrationController'
      }).
      when('/home/:id', {
        templateUrl: 'views/home.html',
        controller:  'HomeCtrl'
      }).
    
      otherwise({
        redirectTo: '/login'
      });

}]);