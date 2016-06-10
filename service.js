angular.module('apiPractice').service('mainService', function($http,$q){


    var baseUrl = 'http://swapi.co/api/'
    //example of q
    this.starWarsData = function() {
        var deferred = $q.defer();
        $http.get(baseUrl).then(function(response){
            var starWarsData = response.data;
            deferred.resolve(starWarsData);
        });
        return deferred.promise;
    };

});