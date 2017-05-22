# User defined function (UDF) in Influxdb.Kapacitor

In this experiment we will be extending the UDF we wrote in [01-user-defined-fn-experimentation] to tag
the streamed data with an additional tag/value and then writing the modified data back into influx using the
influxdbOut node in Tick script.


# Introduction
The ultimate goal of this experiment is to showcase that the UDF can modify the passed in point data and then 
pass it back to the tick script which can then be rewritten back into InfluxDB.

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
In this experiment, we have passed the stream data into our UDF and then within the `point()` API, 
we tag the data with a new tag/value and then copy the modified data into the protocol buffer.response object
which is written back to the tick script. Then, the influxOUT node is used to write the UDF respond back into influx database. 

By defining the interface, we can essentially tell Kapacitor what are the parameter names and data types the UDF accepts.

   [01-user-defined-fn-experimentation]: https://github.com/SamuelToh/2147483647_story_ptr_project/tree/master/influxdb_kapacitor/01-user-defined-fn-experimentation
   [here]: https://docs.influxdata.com/kapacitor/v1.2/nodes/
   [Google's protocol buffer]: https://developers.google.com/protocol-buffers/
   [nodejs]: https://nodejs.org/en/download/
   [influxdb]: https://docs.influxdata.com/influxdb/v1.2/introduction/installation/
   [kapacitor]: https://docs.influxdata.com/kapacitor/v1.2//introduction/installation/
   [make]: http://stackoverflow.com/questions/11934997/how-to-install-make-in-ubuntu
   