angular.module('main').config(['$stateProvider', function($stateProvider) {

	$stateProvider.state('root.main', {
		url : '/',
		views: {
			'content@' : {
				controller: 'main.controller.first as firstCtl',
				templateUrl: 'modules/main/templates/main.html'
			}
		}
	});
}] );
