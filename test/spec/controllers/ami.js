'use strict';

describe('Controller: AmiCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var AmiCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AmiCtrl = $controller('AmiCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
