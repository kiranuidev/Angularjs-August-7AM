(function(){
    angular.module("components",[]);
})();
//ui rendering directives.
// functional directives
// validation directives.

/*on html directive will be used as
Element: <custom-brand></custom-brand>
Attribute: <div custom-brand></div>
Class:     <div class="custom-brand"></div>


*/
(function () {
    angular.module("components")
        .directive("customBrand", [function () {
            return {
                template: '<a class="navbar-brand" href="#">{{brandName}}</a>',
                restrict: "E,A,C,M"
            };
    }]);
})();

(function () {
    angular.module("components")
        .directive("customHeader", [function () {
            return {
                templateUrl: "app/templates/header.html",
                restrict: "A",
                controller: 'headerCtrl',
                link: function (scope, element, attrs) {
                    console.log(scope);
                    console.log(element);
                    console.log(attrs);
                }
            };
    }]);
})();

(function () {

    angular.module("components")
        .directive("numbersOnly", [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    element.bind("keypress", function (evt) {
                        console.log(this.value);
                        var exp = RegExp(/^\d+$/)
                        if ((!exp.test(evt.key)) || this.value.length > attrs["length"]) {
                            evt.preventDefault();
                        }
                    });
                }
            }

    }]);


    angular.module("components")
    .directive("alphabetsOnly",[function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                element.bind("keypress",function(evt){
                    var exp = RegExp(/^[a-zA-z. ]+$/)
                    if(!exp.test(evt.key)){
                        evt.preventDefault();
                    }
                });
            }
        }
        
    }]);
    
     angular.module("components")
    .directive("customDatepicker",[function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                
                var config ={};
                if(attrs['mindate']){
                    config.minDate=attrs["mindate"]
                }
                 if(attrs['maxdate']){
                    config.maxDate=attrs["maxdate"]
                }
                element.datepicker(config);
            }
        }
        
    }]);


   
    angular.module("components")
        .directive("parent", [function () {
            return {
                restrict: "A",
                template: "<h1>I am the parent. <div child-dir></div></h1>",
                controller: function ($scope) {
                    console.log("I am the controller");
                },
                compile: function (element, attrs) {
                        console.log(element);
                        return {
                            pre: function (scope, element, attrs) {
                                scope.parentName = "John";
                                console.log("i am the parent");
                                console.log("pre Link");
                            },
                            post: function (scope, element, atts) {
                                console.log("Post Link");
                            }
                        }
                    }
                    /*link:function(scope,element,attrs){
                        scope.parentName="John";
                        console.log("i am the parent");
                    }*/
            }

    }]);

    angular.module("components")
        .directive("childDir", [function () {
            return {
                restrict: "A",
                template: "<h1>Hey i am the child:{{parentName}}</h1>",
                /* controller:function($scope){
                     console.log("I am the controller");
                 },*/
                /* link: function (scope, element, attrs) {
                         console.log(scope.parentName);
                         console.log("i am the child");
                     }*/
                compile: function (element, attrs) {
                    console.log(element);
                    return {
                        pre: function (scope, element, attrs) {
                            console.log("pre Link");
                        },
                        post: function (scope, element, atts) {
                            console.log(scope.parentName);
                            console.log("i am the child");
                            console.log("Post Link");
                        }
                    }
                }
            }

    }]);
    
    
    
})();

(function () {
    angular.module("components")
        .filter("rangeFilter", [function () {
            return function (data, filteringCriteria) {
                var newArray = [];
                if ( filteringCriteria && filteringCriteria.min && filteringCriteria.max) {
                    _.each(data, function (item) {
                        if (item.Price >= filteringCriteria.min && item.Price < filteringCriteria.max) {
                            newArray.push(item);
                        }

                    });

                    return newArray;
                }
                else{
                    return data;
                }
            };
    }])
})();

angular.module("header",[]);
(function () {
    angular.module("header")
        .controller("headerCtrl", ["$scope", "build", "$translate",
                                   function ($scope, build, $translate) {
                console.log(build);
                $scope.vehicleCount = 0;
                $scope.total = 0;
                $scope.brandName = "VehicleDeals App";

                $scope.$on("VEHICLE-ADDED", function (event, args) {
                    $scope.total += args.veh.Price;
                    $scope.vehicleCount++;
                });
                $scope.$on("VEHICLE-REMOVED", function (event, args) {
                    $scope.total -= args.veh.Price;
                    $scope.vehicleCount--;
                });
                $scope.changeLanguage = function (language) {
                     $translate.use(language);
                };
}]);


})();


    


(function(){
    'use strict'
    angular.module("home",[]);
})();

(function () {
    angular.module("home")
        .controller("homeCtrl", function ($scope, $state) {
            console.log($state.params);
        });

})();



(function(){
    'use strict'
    angular.module("login",[]);
    
    //config function.
     angular.module("login")
     .config([function(){
         console.log("I am the login Module"); 
     }]);
})();

(function () {
    angular.module("lookup", []);
})();

(function () {
    angular.module("lookup")
        .factory("lookupFact", [function () {


            return {
                getCountryList: function () {
                    return [{
                            "key": "IN",
                            "value": "India"
                    },
                        {
                            "key": "US",
                            "value": "United States"
                    }];
                },

                getStateList: function () {
                    return [{
                            "countryCode": "IN",
                            "key": "TG",
                            "value": "Telangana"
                    },
                        {
                            "countryCode": "IN",
                            "key": "AP",
                            "value": "Andhra Pradesh"
                    },
                        {
                            "countryCode": "US",
                            "key": "TX",
                            "value": "Texas"
                    },
                        {
                            "countryCode": "US",
                            "key": "NY",
                            "value": "New York"
                    }];
                }
            };

        }]);
})();

(function () {
    angular.module("lookup")
        .service("lookupSvc", function () {
            this.getCountryList = function () {
                return [{
                        "key": "IN",
                        "value": "India"
                    },
                    {
                        "key": "US",
                        "value": "United States"
                    }];
            };

            this.getStateList = function () {
                return [{
                        "countryCode": "IN",
                        "key": "TG",
                        "value": "Telangana"
                    },
                    {
                        "countryCode": "IN",
                        "key": "AP",
                        "value": "Andhra Pradesh"
                    },
                    {
                        "countryCode": "US",
                        "key": "TX",
                        "value": "Texas"
                    },
                    {
                        "countryCode": "US",
                        "key": "NY",
                        "value": "New York"
                    }];
            };

        });
})();

angular.module("vehicleDealsApp",[])
.provider("build",[function(){
    this.version ="1.0.0";
    this.$get=function(){
        return this.version;
    };
}]);
(function(){
    'use strict'
    //code goes here.
    angular.module("register",[]);
})();
(function () {
    'use strict'
    //code goes here.
    angular.module("register")
        .controller("registerCtrl",
            function ($scope, $state, lookupSvc,lookupFact) {
                $scope.userDetails = {
                    terms: false
                };
               // $scope.countries = lookupSvc.getCountryList();
               $scope.countries= lookupFact.getCountryList();

                var states = lookupSvc.getStateList();

                $scope.loadStates = function () {
                    $scope.stateList = [];
                    angular.forEach(states, function (item) {
                        if (item.countryCode === $scope.selectedCountry.key) {
                            $scope.stateList.push(item);
                        }
                    });
                    console.log($scope.stateList);
                };

                $scope.registerUser = function () {
                    console.log($scope.userDetails);
                    $state.go("home", {
                        userDetails: $scope.userDetails
                    });
                };
            });
})();

angular.module("vehicles",[]);
(function () {
    angular.module("vehicles")
        .controller("vehicleCtrl", ["$scope", "vehicleSvc", "$rootScope",
                           function ($scope, vehicleSvc, $rootScope) {



                $scope.filterRange = [{
                        range: "between 100000 to 300000",
                        min: 100000,
                        max: 300000
                },
                    {
                        range: "between 300000 to 500000",
                        min: 300000,
                        max: 500000
                },
                    {
                        range: "between 800000 to 1200000",
                        min: 800000,
                        max: 1200000
                },
                    {
                        range: "between 1000000 to 1500000",
                        min: 1000000,
                        max: 1500000
                },
                    {
                        range: "between 1000000 to 9900000",
                        min: 1000000,
                        max: 9900000
                }];

                vehicleSvc.getVehicles()
                    .then(function (response) {
                        $scope.vehicles = response.data.vehicles;
                    })
                    .catch(function (response) {
                        $scope.showError = response;
                    });


                $scope.changeSort = function () {
                    if ($scope.sortBy == "Price") {
                        $scope.sortBy = "=Price"
                    } else {
                        $scope.sortBy = "-Price"
                    }
                    /*$scope.sortBy = $scope.sortBy == "Price" ? "-Price" : "Price";*/
                };
                $scope.selectVehicle = function (vehicle) {
                    vehicle.isSelected = true;
                    $rootScope.$broadcast("VEHICLE-ADDED", {
                        veh: vehicle
                    });
                };
                $scope.removeVehicle = function (vehicle) {
                    vehicle.isSelected = false;
                    $rootScope.$broadcast("VEHICLE-REMOVED", {
                        veh: vehicle
                    });
                };

                $scope.$watch("searchByModel", function (newVal, oldVal) {
                    console.log("Old Value is: " + oldVal);
                    console.log("New Value is: " + newVal)
                });

                setTimeout(function () {
                    $scope.searchByModel="WagonR";
                    $scope.$apply();
                },3000);

    }]);


})();

(function () {
    angular.module("vehicles")
        .service("vehicleSvc", ["$http", "$q",
                           function ($http, $q) {

                var vehicleResponse;

                function addDiscount(data) {
                    _.each(data.data.vehicles, function (item) {
                        item.discount = .1;
                    });
                    return data;
                }

                this.getVehicles = function () {

                    var dfd = $q.defer();

                    if (vehicleResponse) {
                        dfd.resolve(vehicleResponse);
                    } else {
                        $http.get("app/api/vehicles.json")
                            .then(function (response) {
                                var data = addDiscount(response);
                                vehicleResponse = data;
                                dfd.resolve(vehicleResponse);
                            })
                            .catch(function (response) {
                                dfd.reject(response)
                            });
                    }
                    return dfd.promise;
                    // return  $http.get("app/api/vehicles.json");

                };
    }]);
})();

(function () {
    'use strict';
    //module initilization
    angular.module("vehicleDeals", ["login", "register", "ui.router", "home", "lookup", "vehicles", "components", "header", "vehicleDealsApp", 'pascalprecht.translate']);
    //code goes here.
    //consuming the modeule
    angular.module("vehicleDeals")
        .config(["$stateProvider", "buildProvider", "$translateProvider",
                 function ($stateProvider, buildProvider, $translateProvider) {
                console.log(buildProvider.version);

                $translateProvider.translations('en', {
                    LOGIN: 'Login',
                    TOTAL: 'This is a paragraph.',
                    CART: 'Cart',
                    REGISTER: 'Register',
                    VEHICLES:'Vehicles',
                    HOME:'Home'
                });
                $translateProvider.translations('de', {
                    LOGIN: 'Anmeldung',
                    TOTAL: 'Gesamt',
                    CART: 'Carte',
                    REGISTER: 'Neu registrieren',
                    VEHICLES:'Fahrzeug',
                    HOME:'Zuhause'
                });
                $translateProvider.preferredLanguage('de');


                var basePath = "app/templates/";
                var homeObj = {
                    templateUrl: basePath + "home.html",
                    params: {
                        userDetails: ""
                    },
                    controller: "homeCtrl"
                };
                var registerObj = {
                    templateUrl: basePath + "register.html",
                    controller: "registerCtrl"
                };
                var loginObj = {
                    templateUrl: basePath + "login.html"
                };
                var vehiclesObj = {
                    templateUrl: basePath + "vehicles.html",
                    controller: "vehicleCtrl"
                };

                $stateProvider.state("home", homeObj);
                $stateProvider.state("vehicles", vehiclesObj);
                $stateProvider.state("login", loginObj);
                $stateProvider.state("register", registerObj);

     }])
        .run(function () {
            console.log("finally");
        });
})();
