var main = angular.module ('quiz', [
    'ui.router',
    'quizControllers'
])

main.config(
    function($interpolateProvider, $stateProvider, $urlRouterProvider) {
	$interpolateProvider.startSymbol("{|");
	$interpolateProvider.endSymbol("|}");

	// The routes
	$urlRouterProvider.otherwise('/course');

	$stateProvider.
	    state('course', {
		url: '/course',
		templateUrl: '/experiments/static/partials/course.html'
	    }).
	    state('lesson', {
		url: '/lesson',
		templateUrl: '/experiments/static/partials/lesson.html'
	    }).
	    state('lesson.squiz', {
		url: '/:id',
		templateProvider: function ($timeout, $stateParams, $http) {
		    console.log($stateParams);
		    console.log($http);
		    return "<h3>Hello</h3>";
		}
	    });
    }
);





