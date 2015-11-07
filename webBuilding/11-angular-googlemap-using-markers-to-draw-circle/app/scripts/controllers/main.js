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
      libraries: 'geometry'
    });
  }])

  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map_markers = [];
    $scope.circles = [];

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
      return markers;
    };

    var getGoogleLatLngObj = function(latitude, longitude) {
      return new $scope.mapApi.LatLng(latitude, longitude);
    };

    var calcDistanceBetweenPtrs = function(p1, p2) {
      return ($scope.mapApi.geometry.spherical.computeDistanceBetween(p1, p2)).toFixed(2);
    };

    var calcCircleDetail = function(minLatitude, minLongitude, maxLatitude, maxLongitude) {
      var minmaxLantDifference = maxLatitude - minLatitude;
      var minmaxLongDifference = maxLongitude - minLongitude;

      // distance in meter
      var distance = calcDistanceBetweenPtrs(
        getGoogleLatLngObj(minLatitude + (minmaxLantDifference/ 2), minLongitude + (minmaxLongDifference/ 2)),
        getGoogleLatLngObj(maxLatitude, maxLongitude)
      );
      return {
          // Center point of the circle
          latitude: minLatitude + (minmaxLantDifference / 2),
          longitude: minLongitude + (minmaxLongDifference / 2),
          radius: parseFloat(distance)
      }
    };

    var getCircles = function() {
      var circles = [];

      // In this demo we only showcase creation of 1 circle
      var circle = {};
      var circleInfo = calcCircleDetail(
          // Assuming marker 0 is has the least lat and lng value
          $scope.map_markers[0].latitude, 
          $scope.map_markers[0].longitude,
          // Whereas marker 1 has the greatest value in lat and lng
          $scope.map_markers[1].latitude, 
          $scope.map_markers[1].longitude
      );

      circle.radius = circleInfo.radius;
      circle.center = {
        latitude: circleInfo.latitude,
        longitude: circleInfo.longitude
      }

      circles.push(circle);

      return circles;
    }

    var renderGoogleMapItems = function() {
        $scope.map_markers = getMarker($scope.map.bounds);
        $scope.circles = getCircles();
    };

    
    // Get the bounds from the map once it's loaded
    $scope.$watch(function() {
      return $scope.map.bounds;
    }, 
    function(nv, ov) {
      // Only need to regenerate once
      if (!ov.southwest && nv.southwest) {
        renderGoogleMapItems();
      }
    }, true);    
  });
