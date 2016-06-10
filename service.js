angular.module('apiPractice').service('mainService', function($http,$q){


    var baseUrl = 'http://swapi.co/api/'

    this.starWarsData = function() {
        return $http.get(baseUrl).then(function(response){
            return response.data;
        })
    }

})