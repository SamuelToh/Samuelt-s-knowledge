'use strict';

/**
 * @ngdoc function
 * @name demoAngularGoogleMap2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoAngularGoogleMap2App
 */
angular.module('demoAngularGoogleMap2App')

  .config(['uiGmapGoogleMapApiProvider', function (uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.configure({
      // key: 'your api key',
      // v: '3.20',
      libraries: 'weather,geometry,visualization'
    });
  }])

  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Define variables for our Map object
    var areaLatitude = 55,
      areaLongitude  = -100,
      areaZoom       = 1;

    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map     = { center: { latitude: areaLatitude, longitude: areaLongitude }, zoom: areaZoom, bounds: {} };
      $scope.options = { scrollwheel: true };

      $scope.rectangles = [];
      $scope.mapApi = maps;
    });

    var getMarker = function(bounds, idKey) {
      var markers = [];

      if (idKey == null) {
        idKey = "id";
      }


      for (var i = 0; i < 10; i++) {
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

      // Rectangles
      $scope.rectangles.push(new $scope.mapApi.LatLngBounds(new $scope.mapApi.LatLng(55,-100), new $scope.mapApi.LatLng(49,-78)));
      $scope.rectangles.push(new $scope.mapApi.LatLngBounds(new $scope.mapApi.LatLng(50,-80), new $scope.mapApi.LatLng(44,-77)));

      console.log(JSON.stringify($scope.boundz, null, 4));
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
