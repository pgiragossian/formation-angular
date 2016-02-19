angular.module('main').controller('main.controller.first', ['$http', function($http) {

	var _this = this;
	this.apiKey = "f72f5179db25d1f86034e03187b9c";
	this.apiUrl = "http://api.worldweatheronline.com/free/v2/weather.ashx?key=" + this.apiKey + "&format=json&q=";

	this.imgUrl = null;
	this.temperature = null;
	this.windSpeed = null;

	this.getWeather = function(query) {
		$http.get(this.apiUrl + query)
			.then(
				function(response) {
					if (response &&
						response.data &&
						response.data.data.current_condition &&
						response.data.data.current_condition[0] &&
						response.data.data.current_condition[0].weatherIconUrl &&
						response.data.data.current_condition[0].weatherIconUrl[0] &&
						response.data.data.current_condition[0].weatherIconUrl[0].value) {
						_this.imgUrl = response.data.data.current_condition[0].weatherIconUrl[0].value;
						_this.temperature = response.data.data.current_condition[0].temp_C;
						_this.windSpeed = response.data.data.current_condition[0].windspeedKmph;
					}
				}
			);
	}
	
}]);