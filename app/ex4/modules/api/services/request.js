angular.module('api').service("api.service.request", ['api.constant.api', '$http', '$q', function(apiCst, $http, $q) {
	this.getWeather = function(city) {
		if (city) {
			return this.manageErrors($http.get(apiCst.weatherUrl + '?format=json&key=' + apiCst.key + '&q=' +city));
		}
	};


	this.manageErrors = function(promise) {
		return promise.then(
			function(successResponse) {
				if (successResponse.data) {
					if (successResponse.data.data.error) {
						return $q.reject(successResponse.data.data.error[0].msg);
					}
					else {
						return successResponse.data;
					}
				}
			},
			function(errorResponse) {
				if (errorResponse.statusText) {
					return $q.reject(errorResponse.statusText);
				}

				return $q.reject("Unknown error");
			}
		)
	}

}]);
