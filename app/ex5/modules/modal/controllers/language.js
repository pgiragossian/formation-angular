angular.module('modal').controller('modal.controller.language', ['$uibModalInstance', 'i18n.factory.i18n', function($uibModalInstance, i18nFct) {

	this.i18nFct = i18nFct;

	this.chooseLanguage = function(language) {
		this.i18nFct.changeLanguage(language);
		this.close();
	};

	this.close = function() {
		$uibModalInstance.dismiss();
	}


}]);