(function(){
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
                    function($scope){
       $scope.userDetails ={
           terms:false
       };
        $scope.countries =[];
        
        $scope.registerUser=function(){
            console.log($scope.userDetails)
        };
    });
})();