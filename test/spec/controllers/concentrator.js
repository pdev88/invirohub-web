'use strict';

describe('Controller: ConcentratorCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ConcentratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConcentratorCtrl = $controller('ConcentratorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
