'use strict';

/**
 * @ngdoc function
 * @name angular2016App.controller:Ngsubmit1Ctrl
 * @description
 * # Ngsubmit1Ctrl
 * Controller of the angular2016App
 */
angular.module('angular2016App')
  .controller('Ngsubmit1Ctrl', function () {
    this.users=[];
    this.submit_1=function(){
      var user={
        fname:this.fname,
        lname:this.lname
      };  
      this.users.push(user);
      console.log(user);
    };
    this.submit_2=function(){
      this.users.push(this.user);
      console.log(this.user);  
    };
  });
