'use strict';

describe('Controller: CommercialCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var CommercialCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CommercialCtrl = $controller('CommercialCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
