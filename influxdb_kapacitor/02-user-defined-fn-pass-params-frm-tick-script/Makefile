del_recording:
	kapacitor delete recordings udf000

test:
	kapacitor define udf_test_1 -type stream -tick ./ticks/udf_example_1.tick -dbrp historian.autogen	
	kapacitor delete recordings udf000
	kapacitor record stream -task udf_test_1 -duration 5s -recording-id udf000
	kapacitor replay -recording udf000 -task udf_test_1

kapacitord_up:
	kapacitord -config kapacitor.conf -pidfile=kpid

