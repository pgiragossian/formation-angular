angular.module('main').controller('main.controller.first', ['$http', function($http) {

	var _this = this;
	this.apiKey = "f72f5179db25d1f86034e03187b9c";
	this.apiUrl = "http://api.worldweatheronline.com/free/v2/weather.ashx?key=" + this.apiKey + "&format=json&q=";



}]);