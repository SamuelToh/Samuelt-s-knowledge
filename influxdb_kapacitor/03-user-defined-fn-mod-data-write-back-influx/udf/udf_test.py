import sys
import json
from kapacitor.udf.agent import Agent, Handler, Server
from kapacitor.udf import udf_pb2
from pprint import pprint
import signal

import logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s %(levelname)s:%(name)s: %(message)s')
logger = logging.getLogger()


# Check all received points and mark them as udf_test or not
class UdfTestHandler(Handler):
    def __init__(self, agent):
        self._agent = agent


    def info(self):
        logger.info("STOH: Sending udf_test handler info to kapacitor.")
        response = udf_pb2.Response()
        response.info.wants = udf_pb2.STREAM
        response.info.provides = udf_pb2.STREAM

        # Define informations that can be set in the @UDF operation
        # By doing the next 3 lines the class is telling the connector (kapaictor)
        # that the @holiday UDF supports taking in optional value like 'testString1', 'testInteger' and 'testString2'
        # as option
        response.info.options['testString1'].valueTypes.append(udf_pb2.STRING)
        response.info.options['testInteger'].valueTypes.append(udf_pb2.INT)
        response.info.options['testString2'].valueTypes.append(udf_pb2.STRING)

        return response

    def init(self, init_req):
        logger.info("STOH: Initializing udf_test.")

        for opt in init_req.options:
            if opt.name == 'testString1':
                logger.info("STOH: option testString1 is set with value: %s.", opt.values[0].stringValue)
                self._opt_field1 = opt.values[0].stringValue
            elif opt.name == 'testString2':
                logger.info("STOH: option testString2 is set with value: %s.", opt.values[0].stringValue)
                self._opt_field2 = opt.values[0].stringValue
            elif opt.name == 'testInteger':
                logger.info("STOH: option testInteger is set with value: %d.", opt.values[0].intValue)
                self._opt_field3 = opt.values[0].intValue

        response = udf_pb2.Response()
        response.init.success = True
        return response

    def snapshot(self):
        response = udf_pb2.Response()
        response.snapshot.snapshot = ''
        return response

    def restore(self, restore_req):
        response = udf_pb2.Response()
        response.restore.success = False
        response.restore.error = 'not implemented'
        return response

    def begin_batch(self, begin_req):
        raise Exception("not supported")

    def point(self, point):
        logger.info("STOH: A point has arrived:\n%s.", point)

        # Demo on how to loop through tags
        for tag in point.tags:
            logger.info("STOH: Examine tag -> :%s.", tag)
        response = udf_pb2.Response()
        response.point.CopyFrom(point)

        # How to response with an additional tag
        response.point.tags["TAG_X"] = "THIS IS A NEW TAG"

        logger.info("STOH: Respond => :\n%s.", response.point)
        self._agent.write_response(response, True)
        
    def end_batch(self, end_req):
        raise Exception("not supported")

if __name__ == '__main__':
    a = Agent()
    h = UdfTestHandler(a)
    a.handler = h

    logger.info("STOH: Starting UDF as part of kapacitor's sub process through kapaictor.Agent")
    a.start()
    a.wait()
    logger.info("STOH: UDF started. Waiting for data...")



# class accepter(object):
#     _count = 0
#     def accept(self, conn, addr):u
#         self._count += 1
#         a = Agent(conn, conn)
#         h = UdfTestHandler(a)
#         a.handler = h

#         logger.info("Starting Agent for connection %d", self._count)
#         a.start()
#         a.wait()
#         logger.info("Agent finished connection %d",self._count)

# if __name__ == '__main__':
#     path = "localhost:9092"
#     if len(sys.argv) == 2:
#         path = sys.argv[1]
#     server = Server(path, accepter())
#     logger.info("Started server")
#     server.serve()
