'use strict';

describe('Controller: ProfilingReportingCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var ProfilingReportingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfilingReportingCtrl = $controller('ProfilingReportingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
