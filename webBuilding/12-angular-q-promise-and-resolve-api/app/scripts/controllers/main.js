'use strict';

/**
 * @ngdoc function
 * @name angularDemoPromises.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAngularGoogleMap2App
 */
angular.module('angularDemoPromises')

  .controller('MainCtrl', function ($scope, $q) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   
    // Grab a new instance of the defer 
    var defer = $q.defer();

    // What to do when promise has been fulfilled
    defer.promise
            .then(function(value1) {
              alert("I promise I will return with " + value1 + "!");
              return "Here is from value 1."
            })
            .then(function(value2) {
              // Subsequent function to run after first function was invoked after triggered by promise
              alert("subsequent call. Got passed in value by first function => " + value2);
            })
            .then(function() {
              // third function call after second.
              alert("this clause is executed after the previous one is done.");
            });

    defer.resolve(" << VALUE PASSED FROM defer.resolve >> "); // Tell Angular to inform defer that the promise has been made.

  });
