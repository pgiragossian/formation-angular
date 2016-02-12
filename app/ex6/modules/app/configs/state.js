angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider.state('root', {
		url : '',
		abstract: true,
		views: {
			'header' : {
				controller: 'header.controller.header as headerCtl',
				templateUrl: 'modules/header/templates/header.html'
			}
		}
	});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);


}] );