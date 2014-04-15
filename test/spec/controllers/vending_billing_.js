'use strict';

describe('Controller: VendingBillingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var VendingBillingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendingBillingCtrl = $controller('VendingBillingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
