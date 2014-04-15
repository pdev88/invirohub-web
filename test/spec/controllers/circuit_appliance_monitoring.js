'use strict';

describe('Controller: CircuitApplianceMonitoringCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var CircuitApplianceMonitoringCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CircuitApplianceMonitoringCtrl = $controller('CircuitApplianceMonitoringCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
