'use strict';

describe('Controller: WaterPulseUnitCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var WaterPulseUnitCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaterPulseUnitCtrl = $controller('WaterPulseUnitCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
