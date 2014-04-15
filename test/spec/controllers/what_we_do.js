'use strict';

describe('Controller: WhatWeDoCtrl', function () {

  // load the controller's module
  beforeEach(module('invirohubWebApp'));

  var WhatWeDoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WhatWeDoCtrl = $controller('WhatWeDoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
