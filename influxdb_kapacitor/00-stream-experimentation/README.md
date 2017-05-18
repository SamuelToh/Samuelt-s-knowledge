# Stream mode in Influxdb.Kapacitor

In this experiment I am trying out the "Stream" operation mentioned in the Kapaictor documentation found [here].

# Introduction
In Kapacitor, the Stream operation is a powerful tool which gives someone the ability to "watch/capture" realtime data streaming into an influxdb database. Then mathematical calculations can be performed on the captured data and then re-write the output as another result set in various ways like going back to the database itself.

# How to run?
To execute my experiment you will need the following applications installed;
  - [nodejs]
  - [influxdb]
  - [kapacitor]
  - [make]

With the applications already installed onto your operating system (I use Ubuntu).
Make sure influxdb is already running is listening on the standard 8086 port. 
Configure the kapacitor.config found in my project, if your influxDB is not in docker then your `hostname` will be set as "localhost" or whatever that is returned by the unix hostname binary.
Do `npm install` in the data_generator directory.

Start the Kapacitor daemon `make kapacitord_up`. Run my data generator script by doing `node index.js`.

Now, data should be coming through periodically in a 1 second basis.

Do `make test` now, if you are running the job first time. Otherwise you will have to do `make del_recording` beforehand.

Wait for a bit, the target should takes about 20 seconds to run. Once its down head to `/var/log/kapacitor/` and inspect the .log file produced by the stream job. You should see some JSON output which consists of data values produced by the data generator script.

   [here]: <https://docs.influxdata.com/kapacitor/v1.2/examples/continuous_queries/#when-should-we-use-stream-tasks-vs-batch-tasks-in-kapacitor>
   [nodejs]: https://nodejs.org/en/download/
   [influxdb]: https://docs.influxdata.com/influxdb/v1.2/introduction/installation/
   [kapacitor]: https://docs.influxdata.com/kapacitor/v1.2//introduction/installation/
   [make]: http://stackoverflow.com/questions/11934997/how-to-install-make-in-ubuntu
   