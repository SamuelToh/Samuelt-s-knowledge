del_recording:
	kapacitor delete recordings streaming000

test:
	kapacitor define stream_example_1 -type stream -tick ./ticks/stream_example_1.tick -dbrp historian.autogen	
	kapacitor delete recordings streaming000
	kapacitor record stream -task stream_example_1 -duration 22s -recording-id streaming000
	kapacitor replay -recording streaming000 -task stream_example_1

kapacitord_up:
	kapacitord -config kapacitor.conf -pidfile=kpid

