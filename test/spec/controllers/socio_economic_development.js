'use strict';

describe('Controller: SocioEconomicDevelopmentCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var SocioEconomicDevelopmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocioEconomicDevelopmentCtrl = $controller('SocioEconomicDevelopmentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
