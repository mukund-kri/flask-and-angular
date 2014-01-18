// I accumulate all my controllers here

var quizControllers = angular.module('quizControllers', []);


quizControllers.controller("CourseController", function($scope, $http) {
    $scope.greeting = "Hello You";
});
