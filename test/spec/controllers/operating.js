'use strict';

describe('Controller: OperatingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var OperatingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OperatingCtrl = $controller('OperatingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
