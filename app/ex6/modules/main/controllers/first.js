angular.module('main').controller('main.controller.first', 
	['$state', 'modal.service.modal', 'i18n.factory.i18n', 'main.factory.weather',
	function($state, modalSvc, i18nFct, weatherFct) {

		console.log('Current state : ' + $state.$current);

		var _this = this;

		this.isCollapsed = true;
		this.currentHour = i18nFct.now.format('H:mm');
		this.currentDate = i18nFct.now.format('D MMMM YYYY');

		this.errorMsg = '';

		this.weatherFct = weatherFct;
		this.modalSvc = modalSvc;

		this.modalInstance = null;

		this.openModal = function(size) {
			this.modalInstance = this.modalSvc.open(size);
		}

		this.closeModal = function() {
			if (this.modalInstance) {
				this.modalInstance.dismiss();
			}
		}

		this.getWeather = function() {

			this.errorMsg = '';

			if (this.cityForm.$valid) {
				this.weatherFct.getWeather().then(
					function(responseOk) {},
					function(error) {
						_this.errorMsg = error;
					}

				)
			}
		}

	
}]);