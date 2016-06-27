'use strict';

describe('Controller: Ngmodel1Ctrl', function () {

  // load the controller's module
  beforeEach(module('angular2016App'));

  var Ngmodel1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Ngmodel1Ctrl = $controller('Ngmodel1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Ngmodel1Ctrl.awesomeThings.length).toBe(3);
  });
});
