'use strict';

/**
 * @ngdoc function
 * @name demoAngularGoogleMap2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAngularGoogleMap2App
 */
angular.module('demoAngularGoogleMap2App')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Define variables for our Map object
    var areaLatitude = 25,
      areaLongitude  = -999,
      areaZoom       = 8;

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map     = { center: { latitude: areaLatitude, longitude: areaLongitude }, zoom: areaZoom, bounds: {} };
      $scope.options = { scrollwheel: true };
    });

    var getMarker = function(bounds, idKey) {
      var markers = [];

      if (idKey == null) {
        idKey = "id";
      }

    
      for (var i = 0; i < 50; i++) {
          var lat_min   = bounds.southwest.latitude,
              lat_range = bounds.northeast.latitude - lat_min,
              lng_min   = bounds.southwest.longitude,
              lng_range = bounds.northeast.longitude - lng_min;

          var latitude = lat_min + (Math.random() * lat_range);
          var longitude = lng_min + (Math.random() * lng_range);
          var ret = {
              latitude: latitude,
              longitude: longitude,
              title: 'm' + i
            };
         ret[idKey] = i;
         markers.push(ret);
      }
      console.log(bounds);
    
      return markers;
    };

    $scope.map_markers = [];

    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, 
    function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        $scope.map_markers = getMarker($scope.map.bounds);
      }
    }, true);    
  });
