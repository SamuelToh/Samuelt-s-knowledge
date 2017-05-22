# User defined function (UDF) in Influxdb.Kapacitor

In this experiment we will be;
1) defining a "UDF" user-defined-function (stdin/out)
2) modify kapacitor boot config to load the UDF
3) use it in a tick script.

# Introduction
In Kapacitor, on top of the standard node operations noted [here]. A user can define functions written in one of the programming languages that is supported by 
[Google's protocol buffer] to massage the data captured by a tick script.

UDF allows users to modify a particular time series data, by changing its value or adding/removing or updating the tag/value. It basically unlocks the full potential of a chosen programming language,
one could write a file or call another API to perform a set of actions based on the received point data.

# How to run?
To execute my experiment, you will need the following applications installed;
  - [nodejs]
  - [influxdb]
  - [kapacitor]
  - [make]

With the applications already installed onto your operating system (I use Ubuntu).
Make sure influxdb is already running and is listening on the standard 8086 port. 
Configure the kapacitor.config found in my project, if your influxDB is not in docker then your `hostname` will be set as "localhost" or whatever that is returned by the unix hostname binary.
Do `npm install` in the data_generator directory.

Start the Kapacitor daemon `make kapacitord_up`. Run my data generator script by doing `node index.js`.

Now, data should be coming through periodically in a 1 second basis.

Do `make test` now, if you are running the job first time. Otherwise you will have to do `make del_recording` beforehand.

Wait for a bit, the target should takes about 5 seconds to run. Once it is done. Head to `/var/log/kapacitor/` and inspect the .log file produced by the stream job. 
Search for text "STOH" and you'll realized that there are a few of these occurrences. Each one are the output by the logger script defined in UDF script found under ./udf/udf_test.py.

# Output
In case you're lazy to run any of those steps. We have got a pre-baked output ready for view in the `example_output` directories. This is essentially what you'll see from the kapacitor log file upon running the scripts.

# What just happened.
In this experiment, I have written my UDF using python 2.7.
When the kapacitor server gets boot up, it looks up the UDF tag in its boot config to run the UDF script or binary. Note: if you are
not wanting Kapacitor to manage its UDF processes then your UDF script will need to support writing and listening on unix domain socket.
Then in the Kapacitor config, you'll need to specify that by using the 'sock' keyword. More on this in other tutorial.
Once the UDF is up running, the ultimate goal here is to show case that for each point data received by our tick script. 
The data gets pushed into the udf script, and this can be evidently observed by the /var/log/kapacitor/kapacitor log file as
log messages with the "STOH" prefix is written by the logger object started by our UDF python script.  

   [here]: https://docs.influxdata.com/kapacitor/v1.2/nodes/
   [Google's protocol buffer]: https://developers.google.com/protocol-buffers/
   [nodejs]: https://nodejs.org/en/download/
   [influxdb]: https://docs.influxdata.com/influxdb/v1.2/introduction/installation/
   [kapacitor]: https://docs.influxdata.com/kapacitor/v1.2//introduction/installation/
   [make]: http://stackoverflow.com/questions/11934997/how-to-install-make-in-ubuntu
   