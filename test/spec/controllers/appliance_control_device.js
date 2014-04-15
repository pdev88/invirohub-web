'use strict';

describe('Controller: ApplianceControlDeviceCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ApplianceControlDeviceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplianceControlDeviceCtrl = $controller('ApplianceControlDeviceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
