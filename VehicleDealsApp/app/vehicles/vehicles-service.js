(function(){
    angular.module("vehicles")
    .service("vehicleSvc",["$http",
                           function($http){
        this.getVehicles=function(){
          return  $http.get("app/api/vehicles.json");
           /* var returnObj={};
            returnObj.then=function(){
                console.log("xyz")
            };
            returnObj.catch=function(){
                console.log("error")
            };
            
            return returnObj;
        };*/
        };
    }]);
})();