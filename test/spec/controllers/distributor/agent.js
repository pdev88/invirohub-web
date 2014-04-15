'use strict';

describe('Controller: DistributorAgentCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var DistributorAgentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DistributorAgentCtrl = $controller('DistributorAgentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
