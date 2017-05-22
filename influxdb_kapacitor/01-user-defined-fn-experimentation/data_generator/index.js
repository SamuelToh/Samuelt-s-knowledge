var influx = require('influx');

var influxWriteOptions = {
        host: 'localhost',
        port: 8086,
        protocol: 'http',
        username: 'wswrite',
        password: '12qwaszx',
        database: 'historian'
};

var influxWrite = function(measurement, id, value, valueDatetime, callback) {
    var influxPointData = [];
    influxPointData.push([
            {
                "value": value,
                "time" : valueDatetime
            },
            // tag values
            {
                "ID": id
            }
        ]);

    connection.writePoints(
        measurement,
        influxPointData,
        { precision: 'ms' },
        function(errmsg, returnValue) {
            if (errmsg) return console.log("onWrite: Error = "+ errmsg);
            if (callback) callback();
        }
    );
}

var counter1 = 1;

// main
var connection = influx(influxWriteOptions);

var writeFn1 = function() {
    var value = 1;
    var valueDatetime = new Date(Date.now());

    if (counter1 == 2) value = 2;
    else if (counter1 == 3) value = 3;

    console.log("Write1: Writing data value (" + value + ") for datetime = " + valueDatetime);
    influxWrite("measurement_100", "DATA_SET_111", value, valueDatetime, function() {
        influxWrite("measurement_100", "DATA_SET_111", 999, valueDatetime);
    });

    counter1 += 1;
    if (counter1 % 4 == 0) counter1 = 1;
};

var writeFn2 = function() {
    var value = 10;
    var valueDatetime = new Date(Date.now() - 1000);

    influxWrite("measurement_105", "DATA_SET_222", value, valueDatetime);
    
    console.log("Write2: Writing data value (" + value + ") for datetime = " + valueDatetime);
}

setInterval(writeFn1, 1000);
setInterval(writeFn2, 1000);

