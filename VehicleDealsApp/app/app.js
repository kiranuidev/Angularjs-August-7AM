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
