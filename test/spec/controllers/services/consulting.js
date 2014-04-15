'use strict';

describe('Controller: ServicesConsultingCtrl', function () {

  // load the controller's module
  beforeEach(module('routecontentApp'));

  var ServicesConsultingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ServicesConsultingCtrl = $controller('ServicesConsultingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
