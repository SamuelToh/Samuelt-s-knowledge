'use strict';

angular.module('16-learn-angular-nvd3-chart-technology')
    .controller('SimpleLineNoAreaChart', function ($scope) {
    	
        this.options = $scope.$parent.getLineChartTemplate("Time (Hours)", "L", "3.38 L / Hr");
        this.data = $scope.$parent.getRandomData("Gas", "#7777ff", false);
        
    });
