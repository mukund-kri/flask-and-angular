var quizControllers = angular.module('quizControllers', []);

// A very simple controller
quizControllers.controller("CourseController", function($scope, $http) {    
    $http.get('/experiments/static/course/1.json').
	success( function(data) {
	    console.log(data);
	    $scope.data = data;
	});
    $scope.greeting = {text: "Hello World"};
});

quizControllers.controller("Lesson", function($scope) {
    
    $scope.question = {
	partialName: 'simple.html',
	message: 'hello directives'
    };
    $scope.greeting = {text: "lessons"};
});
