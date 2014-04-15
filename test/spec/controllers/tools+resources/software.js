'use strict';

describe('Controller: ToolsResourcesSoftwareCtrl', function () {

  // load the controller's module
  beforeEach(module('routecontentApp'));

  var ToolsResourcesSoftwareCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ToolsResourcesSoftwareCtrl = $controller('ToolsResourcesSoftwareCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
