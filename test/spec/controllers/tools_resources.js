'use strict';

describe('Controller: ToolsResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ToolsResourcesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsResourcesCtrl = $controller('ToolsResourcesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
