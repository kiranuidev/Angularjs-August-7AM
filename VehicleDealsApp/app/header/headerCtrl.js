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
