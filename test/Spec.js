describe('main.controller.config', function() {
  beforeEach(module('main'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('this.myParam', function() {
    it('check numeric param ', function() {
      var $stateParam = {};
      var controller = $controller('main.controller.config', { $stateParam: $stateParam });
      $stateParam.myParam = '12';
      expect(this.myParam).toEqual('12');
    });
  });
});