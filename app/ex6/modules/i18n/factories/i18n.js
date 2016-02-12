angular.module("i18n").factory("i18n.factory.i18n", ['moment', '$translate', 'i18n.constant.i18n', function(moment, $translate, i18nCst) {

	var i18n = {};

	i18n.init = function() {
		this.availableLanguages = [];
		this.currentLanguage = 'fr';
		this.now = moment();
		if (angular.isObject(i18nCst)) {
			i18n.availableLanguages = Object.keys(i18nCst);
		}
	}

	i18n.init();

	i18n.changeLanguage = function(language) {
		if (angular.isString(language) && this.availableLanguages.indexOf(language) !== -1) {
			this.currentLanguage = language;
			$translate.use(language);
			moment.locale(language);
		}
	}

	return i18n;

}]);