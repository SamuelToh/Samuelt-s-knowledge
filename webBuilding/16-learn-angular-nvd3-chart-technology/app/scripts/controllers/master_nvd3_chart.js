'use strict';

/**
 * @ngdoc function
 * @name 16-learn-angular-nvd3-chart-technology.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 16-learn-angular-nvd3-chart-technology
 */
angular.module('16-learn-angular-nvd3-chart-technology')
  .controller('MasterNvD3Chart', function ($scope) {

        $scope.getMultiBarChartTemplate = function(xAxisName, yAxisName, chartHeadTxt, stacked) {
            return {
                chart: {
                    type: 'multiBarChart',
                    height: 200,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    stacked: true,
                    clipEdge: true,
                    staggerLabels: true,
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: '',
                        tickFormat: function(d) {
                            var axisDate = new Date();
                            axisDate.setMonth(10);
                            axisDate.setDate(d);
                            return d3.time.format('%d %b %y')(axisDate);
                        }
                    },
                    yAxis: {
                        axisLabel: 'Cost (AUD)',
                        axisLabelDistance: -10
                    }
                },
                title: {
                    enable: true,
                    text: chartHeadTxt
                }
            };
        };

        $scope.getBarChartTemplate = function(xAxisName, yAxisName, chartHeadTxt, stacked) {
            return {
                chart: {
                    type: 'historicalBarChart',
                    height: 300,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    clipEdge: true,
                    staggerLabels: false,
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: '',
                        tickFormat: function(d) {
                            var axisDate = new Date();
                            axisDate.setMonth(10);
                            axisDate.setDate(d);
                            return d3.time.format('%d %b %y')(axisDate);
                        }
                    },
                    yAxis: {
                        axisLabel: 'Cost (AUD)',
                        axisLabelDistance: -10
                    },
                    "zoom": {
                      "enabled": true,
                      "scaleExtent": [
                        1,
                        10
                      ],
                      "useFixedDomain": false,
                      "useNiceScale": false,
                      "horizontalOff": false,
                      "verticalOff": true,
                      "unzoomEventType": "dblclick.zoom"
                    }
                },
                title: {
                    enable: true,
                    text: chartHeadTxt
                },
            };
        };

        $scope.getLineChartTemplate = function(xAxisName, yAxisName, chartHeadTxt) {
            return {
                chart: {
                    //zoom: {
                        //NOTE: All attributes below are optional
                        //enabled: true,
                        //scale: 1,
                        //scaleExtent: [1, 10],
                        //translate: [0, 0],
                        //useFixedDomain: true,
                        //useNiceScale: true,
                        //horizontalOff: false,
                        //verticalOff: false,
                        //zoomed: function(xDomain, yDomain) {
                        //    //console.log("zoomed => " + JSON.stringify(xDomain) + " <= y domain = " + JSON.stringify(yDomain));
                        //    //var domains = {x1: 0, x2: 24, y1: 0, y2: 2};
                        //    //domains.x2 = 24 * xDomain[0];
                        //    //domains.y2 = 24 * yDomain[1];
                        //
                        //    return {
                        //        x1: xDomain[0],
                        //        x2: xDomain[1],
                        //        y1: yDomain[0],
                        //        y2: yDomain[1]
                        //    };
                        //}
                    //},
                    useInteractiveGuideline: true,
                    type: 'lineChart',
                    height: 200,
                    margin: {
                        top: 20,
                        right: 20,
                        bottom: 40,
                        left: 55
                    },
                    x: function (d) {
                        return d.x;
                    },
                    y: function (d) {
                        return d.y;
                    },
                    xAxis: {
                        axisLabel: 'Time (XYZ)',
                        tickFormat: function(d) {
                            var axisDate = new Date();
                            axisDate.setHours(d);
                            axisDate.setMinutes(0);
                            return d3.time.format('%H:%M')(axisDate);
                        }
                    },
                    yAxis: {
                        axisLabel: 'Cost (AUD)',
                        axisLabelDistance: -10
                    }
                },
                title: {
                    enable: true,
                    text: chartHeadTxt
                }
            };
        };

        /*Random Data Generator */
        // Format = {"X": value, "Y": value}
        $scope.getRandomData = function sinAndCos(itemName, color, area) {
            var pairXYValues = [];
            //Data is represented as an array of {x,y} pairs.
            for (var i = 0; i < 24; i++) {
                pairXYValues.push(
                    {
                        x: i,
                        y: (Math.random(1, 10)).toFixed(1) + Math.floor((Math.random() * 10) + 4)
                    });
            }

            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: pairXYValues,
                    key: itemName,
                    color: color,
                    area: area //area - set to true if you want this line to turn into a filled area chart.
                }
            ];
        };

        // For multi-stacked bar chart
        // Format = { "Key": "Stream1" :  [ {"X": value, "Y": value}, {"X": value, "Y":value} ... ] }
        $scope.barNames = [ "Electricity", "Water", "Recycle Water", "Chilled Water" ]

        $scope.getMultibarRandData = function generateData(setOfGraphToGen, setNames, color) {
            console.log(JSON.stringify(stream_layers(4, 50 + Math.random() * 50, .1)));


            // return stream_layers(/*Set of graph to gen=*/4,
                return stream_layers(setOfGraphToGen,
                                 /*Set of data to gen (days=)*/30, .1).map(function (data, i) {
                return {
                    key: setNames[i],
                    // key: $scope.barNames[i],
                    values: data,
                    color: (color) ? color[i] : null
                };
            });
        }

        /* Inspired by Lee Byron's test data generator. */
        function stream_layers(n, m, o) {
            if (arguments.length < 3) o = 0;
            function bump(a) {
                var x = 1 / (.1 + Math.random()),
                    y = 2 * Math.random() - .5,
                    z = 10 / (.1 + Math.random());
                //console.log('x=' + x + ', y=' + y + ', z=' + z);
                for (var i = 0; i < m; i++) {
                    var w = (i / m - y) * z;
                    a[i] += x * Math.exp(-w * w);
                }
            }

            return d3.range(n).map(function () {
                var a = [], i;
                for (i = 0; i < m; i++) a[i] = o + o * Math.random();
                for (i = 0; i < 5; i++) bump(a);
                return a.map(stream_index);
            });
        }


        function stream_index(d, i) {
            return {x: i, y: Math.max(0, d)};
        }


  });
