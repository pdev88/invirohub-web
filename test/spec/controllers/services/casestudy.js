'use strict';

describe('Controller: ServicesCasestudyCtrl', function () {

  // load the controller's module
  beforeEach(module('routecontentApp'));

  var ServicesCasestudyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesCasestudyCtrl = $controller('ServicesCasestudyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
