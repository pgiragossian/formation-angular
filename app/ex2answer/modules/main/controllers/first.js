angular.module('main').controller('main.controller.first', [function() {

	this.myList = [];

	this.addItem = function() {
		this.myList.push(new Date().toString());
	}

}]);