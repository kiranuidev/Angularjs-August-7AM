(function(){
    'use strict'
    //module initilization
    angular.module("vehicleDeals",["login","register"]);
    //code goes here.
    //consuming the modeule
     angular.module("vehicleDeals")
     .config([function(){
         console.log("I am the vehicleDeals Module"); 
     }]);
})();
