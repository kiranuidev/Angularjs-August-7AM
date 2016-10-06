angular.module("demoApp", []);

angular.module("demoApp")
    .directive("customBrand", [function () {
        return {
            restrict: "A",
            template: "<a>{{brand}}</a>",
            scope: {
                brand: "@" //readonly or one way binding.
            }
        }

}]);

angular.module("demoApp")
    .controller("clientA", ["$scope", function ($scope) {
        $scope.institute = "NBITS";
}]);


angular.module("demoApp")
    .controller("clientB", ["$scope", function ($scope) {
        $scope. company = "k3informatics";
}]);

angular.module("demoApp")
    .controller("clientC", ["$scope", function ($scope) {
        $scope.organisation = "learneasy";
}]);
