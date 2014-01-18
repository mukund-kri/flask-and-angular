var quizApp = angular.module('quizApp', [
    'ngRoute',
    'quizControllers'
]);

// A directive to display the UI for an individual quiz question
quizApp.directive('questionUi', [
    '$compile',
    '$http',
    '$templateCache',
    function($compile, $http, $templateCache) {
	
	var getTemplate = function(partialName) {
	    var baseUrl = '/common/static/templates/';
	    var templateUrl = baseUrl + partialName;
	    var templateLoader = $http.get(templateUrl, {cache: $templateCache});
	    return templateLoader;
	};

	var linker = function(scope, element, attrs) {
	    var loader = getTemplate(scope.question.partialName);
	    var promise = loader.success (function (html) {
		element.html(html);
	    }).then(function (response) {
		console.log(scope);
		element.replaceWith($compile(element.html())(scope));
	    });
	};
	
	return {
	    restrict: 'E',
	    scope: {
		question: '='
	    },
	    link: linker
	};
    }   
]);


// Routes for this application
quizApp.config([
    '$routeProvider',
    '$interpolateProvider',
    function($routeProvider, $interpolateProvider) {
	$interpolateProvider.startSymbol("{|");
	$interpolateProvider.endSymbol("|}");

	$routeProvider.
	    when('/', {
		templateUrl: '/common/static/templates/course.html',
		controller: 'CourseController'
	    }).when('/lesson/:courseId', {
		templateUrl: '/common/static/templates/lesson.html',
		controller: 'Lesson'
	    });
    }
]);

		  



