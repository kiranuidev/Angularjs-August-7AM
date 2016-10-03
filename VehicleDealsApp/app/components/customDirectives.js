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
    .directive("customBrand",[function(){
        return{
            template:'<a class="navbar-brand" href="#">{{brandName}}</a>',
            restrict:"E,A,C,M"
        };
    }]);
})();

(function () {
    angular.module("components")
    .directive("customHeader",[function(){
        return{
            templateUrl:"app/templates/header.html",
            restrict:"A"
        };
    }]);
})();