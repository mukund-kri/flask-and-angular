// The right way to add controllers to page


// Intialize the angular application
var main = angular.module("main", []);
main.config( function($interpolateProvider){
    $interpolateProvider.startSymbol("{|");
    $interpolateProvider.endSymbol("|}");
});

// A very simple controller
main.controller("CourseController", function($scope, $http) {
    
    $http.get('/experiments/static/course/1.json').
	success( function(data) {
	    console.log(data);
	    $scope.data = data;
	});
    $scope.greeting = {text: "Hello World"};
});
