angular.module('app').run(['amMoment', function(amMoment) {
    amMoment.changeLocale('fr');
}]);