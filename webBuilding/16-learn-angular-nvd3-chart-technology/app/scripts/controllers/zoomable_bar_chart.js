'use strict';

angular.module('16-learn-angular-nvd3-chart-technology')
    .controller('ZoomableBarChart', function ($scope) {
    	
    this.options = $scope.$parent.getBarChartTemplate("DateTime", "Cost (Dollar)", "1.31$ / Hr");
    this.data = $scope.$parent.getMultibarRandData(1, [ "Electricity" ]);
        
});
