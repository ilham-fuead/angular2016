'use strict';

describe('Controller: Ngsubmit1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angular2016App'));

  var Ngsubmit1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ngsubmit1Ctrl = $controller('Ngsubmit1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Ngsubmit1Ctrl.awesomeThings.length).toBe(3);
  });
});
