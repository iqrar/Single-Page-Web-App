
myApp.factory('Main', function($http,$q){
     var deferred = $q.defer();
     return{
              Images: function(id){
		     	  $http.get("http://okotta.neomacro.com/avatars.php?token=" +id)
				   .success(function (data, status) {
		            deferred.resolve(data);
		          })
	       .error(function (data, status) {
	              deferred.reject(data);
	          });
	              return deferred.promise;
		 } 


    }
});