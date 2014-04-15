'use strict';

describe('Controller: ToolsResourcesToolsCtrl', function () {

  // load the controller's module
  beforeEach(module('routecontentApp'));

  var ToolsResourcesToolsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsResourcesToolsCtrl = $controller('ToolsResourcesToolsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
