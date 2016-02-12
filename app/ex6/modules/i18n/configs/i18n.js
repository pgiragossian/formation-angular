 angular.module("i18n").config(['i18n.constant.i18n', '$translateProvider', function(i18nCst, $translateProvider) {

	for (var key in i18nCst) {
		var value = i18nCst[key];

		$translateProvider.translations(key, value);
	}

	$translateProvider.preferredLanguage('fr');
	$translateProvider.useSanitizeValueStrategy('');


}]);