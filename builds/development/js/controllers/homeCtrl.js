myApp.controller('HomeCtrl', 
    function($scope, $http, $routeParams,Main) {

      $scope.id = $routeParams.id;
      $scope.slides = [];
      
      $scope.getImages = function() {
        Main.Images($scope.id)
         .then(function(data) {
           $scope.images = data;
          }, function(error) {
           $scope.message = error;
        });
     };//getImages
      
      $http.get("http://okotta.neomacro.com/avatars.php?token=" +$scope.id)
        .then(function(response) {
          $scope.slides = response.data;
          }, function(error) {
          $scope.message = error;
     });//getSlides
     
      
      $scope.myInterval = 3000;
      $scope.$watch('slides', function(values) {
        var i, a = [], b;
        for (i = 0; i < $scope.slides.length; i += 1) {
            b = { image1: $scope.slides[i] };
             if ($scope.slides[i + 1]) {
            b.image2 = $scope.slides[i + 1];
          }  if ($scope.slides[i + 2]) {
            b.image3 = $scope.slides[i + 1];
          }
             if ($scope.slides[i + 3]) {
            b.image4 = $scope.slides[i + 1];
          } 
              a.push(b);
          }
            $scope.groupedSlides = a;
        }, true);//slides


      $scope.isSelected = function(tab){
        if(tab == $scope.currentSelectedTab){
        return true;
        }

        return false;
    }
   
});//HomeCtrl;