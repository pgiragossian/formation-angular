angular.module("main").factory("main.factory.weather", ['api.service.request', function(requestSvc) {

	var weather = {};

	weather.init = function() {
		this.cityName = null;
		this.imgUrl = null;
		this.temperature = null;
		this.windSpeed = null;
	};

	weather.init();

	weather.getWeather = function() {
		if (this.cityName) {
			var _this = this;
			return requestSvc.getWeather(this.cityName).then(
				function(respOk) {
					if (respOk.data && respOk.data.current_condition && respOk.data.current_condition[0]) {
						_this.imgUrl = respOk.data.current_condition[0].weatherIconUrl[0].value;
						_this.temperature = respOk.data.current_condition[0].temp_C;
						_this.windSpeed = respOk.data.current_condition[0].windspeedKmph;
					}
				},
				function(respKo) {
					_this.init();
					throw respKo;
				}
			);
		}
	}

	return weather;

}]);