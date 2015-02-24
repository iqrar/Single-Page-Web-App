myApp.controller('RegistrationController', 
  function($scope, $http, $location,Main,$rootScope) {

   

        $scope.login = function() {
              $http({
                data: { username: $scope.username, password: $scope.password },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                method: 'POST',
               transformRequest: function(obj) {
                 var str = [];
                   for(var p in obj)
                 str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                 return str.join("&");
             },
                 url: 'http://okotta.neomacro.com/login.php'
         }).
               success(function(data, status, headers, config) {
                $rootScope.user = data;
                  if($rootScope.user.userid){
                    $scope.currentPath= $location.path('/home/'+ $scope.user.userid);
                    }else{
                    $scope.message=data;
                  }
           });
         }//login;



        $scope.register = function() {
              $http({
                data: { fullname: $scope.fullname, email:$scope.email, password: $scope.password, newsletter:$scope.newsletter },
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                method: 'POST',
               transformRequest: function(obj) {
                 var str = [];
                   for(var p in obj)
                 str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                 return str.join("&");
             },
                 url: 'http://okotta.neomacro.com/registration.php'
         }).
                 success(function(data, status, headers, config) {
                  $scope.user = data;
                    if($scope.user){
                       $location.path('/login');
                      }else{
                      $scope.message=data;
                    }
           });
         }//register

}); //RegistrationController







