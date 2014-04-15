'use strict';

describe('Controller: ConsultingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ConsultingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConsultingCtrl = $controller('ConsultingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
