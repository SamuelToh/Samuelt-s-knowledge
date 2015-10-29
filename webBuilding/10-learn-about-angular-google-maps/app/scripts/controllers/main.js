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
      areaZoom       = 5;

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


      for (var i = 0; i < 2; i++) {
          var ret = {
              id: i,
              latitude: 55 - i * 2,
              longitude: -100 - i * 0.0001,
              title: 'm' + i
            };
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
