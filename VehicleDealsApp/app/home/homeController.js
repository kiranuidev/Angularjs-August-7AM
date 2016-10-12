(function () {
    angular.module("home")
        .controller("homeCtrl", function ($scope, $state) {
            console.log($state.params);
        });

})();
