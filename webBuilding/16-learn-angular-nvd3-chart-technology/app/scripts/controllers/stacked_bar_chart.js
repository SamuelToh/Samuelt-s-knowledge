'use strict';

angular.module('16-learn-angular-nvd3-chart-technology')
    .controller('StackedBarChart', function ($scope) {
    	
    this.options = $scope.$parent.getMultiBarChartTemplate("DateTime", "Cost (Dollar)", "4.31$ / Hr");
    this.data = $scope.$parent.getMultibarRandData(3, [ "Electricity", "Water", "Gas" ]);
        
});
