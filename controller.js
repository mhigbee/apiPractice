angular.module('apiPractice').controller('MainController', function($scope, mainService){

    $scope.getData = function (){
        mainService.starWarsData().then(function(response){
            $scope.data = response;
        });
    };

    $scope.getData();


})