'use strict';

/**
 * @ngdoc function
 * @name angular2016App.controller:Ngmodel1Ctrl
 * @description
 * # Ngmodel1Ctrl
 * Controller of the angular2016App
 */
angular.module('angular2016App')
  .controller('Ngmodel1Ctrl', function () {
    
    this.username='init username';
    this.password='init password';
    
    this.change=function(){
      this.username='new username';
      this.password='changed password';
    };
    
    this.submit=function(){
      console.log(this.username,this.password);
    };
    
  });
