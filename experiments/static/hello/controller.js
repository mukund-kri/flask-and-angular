// the hello world of angular.js


var main = angular.module("main", []);
main.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol("{|");
    $interpolateProvider.endSymbol("|}");
});


function HelloController($scope) {
    $scope.greeting = { text: "Hello Angular!" }; 
}
