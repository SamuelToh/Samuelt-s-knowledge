'use strict';

angular.module('16-learn-angular-nvd3-chart-technology')
    .controller('SimpleLineChart', function ($scope) {
    	
        this.options = $scope.$parent.getLineChartTemplate("Time (Hours)", "L", "3.38 L / Hr");
        this.data = $scope.$parent.getRandomData("Water", "#9e379f", true);
        
    });
