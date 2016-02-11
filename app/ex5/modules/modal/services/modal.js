angular.module('modal').service('modal.service.modal', ['$uibModal', function($uibModal) {


	this.open = function (size) {

	    $uibModal.open({
	      animation: true,
	      templateUrl: 'modules/modal/templates/language.html',
	      controller: 'modal.controller.language as LanguageCtl',
	      size: size,
	      backdrop : false,
	      resolve: {
	      }
	    });
	    /*
	    modalInstance.result.then(function (selectedItem) {
	      $scope.selected = selectedItem;
	    }, function () {
	      $log.info('Modal dismissed at: ' + new Date());
	    });
	    */
	};
	
}])