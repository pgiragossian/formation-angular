angular.module('main').controller('main.controller.first', ['main.factory.weather', function(weatherFct) {

	var _this = this;

	this.errorMsg = '';

	this.weatherFct = weatherFct;

	this.getWeather = function() {

		this.errorMsg = '';

		this.weatherFct.getWeather().then(
			function(responseOk) {},
			function(error) {
				_this.errorMsg = error;
			}

		)
	}

	
}]);