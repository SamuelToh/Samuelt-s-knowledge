angular.module("demoAngularGoogleMap2App")
  .controller('InfoController', function ($scope, $log) {
    $scope.templateValue = 'hello from the template itself';
    $scope.clickedButtonInWindow = function (markerTitle) {
      var msg = 'clicked a window in the template using marker => '+markerTitle+'!';
      $log.info(msg);
      alert(msg);
    }
  });