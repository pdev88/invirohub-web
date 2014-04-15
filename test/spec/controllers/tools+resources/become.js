'use strict';

describe('Controller: ToolsResourcesBecomeCtrl', function () {

  // load the controller's module
  beforeEach(module('routecontentApp'));

  var ToolsResourcesBecomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsResourcesBecomeCtrl = $controller('ToolsResourcesBecomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
