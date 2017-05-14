#!/usr/bin/python
from fysom import Fysom

print "Experimenting finite state machine package."
fsm = Fysom({'initial': 'green',
	         'events': [
                 { 'name': 'warn', 'src': 'green', 'dst': 'yellow' },
                 { 'name': 'panic', 'src': 'yellow', 'dst': 'red' },
                 { 'name': 'calm', 'src': 'red', 'dst': 'yellow' },
                 { 'name': 'clear', 'src': 'yellow', 'dst': 'green' }
	         ]})


print "Current state = " + fsm.current
print "Is in state 'red? = %r" % fsm.isstate('red')
print "Is in state 'green? = %r" % fsm.isstate('green')
print "Can fire event %s from state %s? = %r" % ('warn', fsm.current, fsm.can('warn'))
print "Can fire event %s from state %s? = %r" % ('panic', fsm.current, fsm.can('panic'))
print "Can fire event %s from state %s? = %r" % ('clear', fsm.current, fsm.can('clear'))

print ""
print "Firing event warn"
fsm.warn()
print "Current state = " + fsm.current
print "Is in state 'red? = %r" % fsm.isstate('red')
print "Is in state 'green? = %r" % fsm.isstate('green')
print "Can fire event %s from state %s? = %r" % ('warn', fsm.current, fsm.can('warn'))
print "Can fire event %s from state %s? = %r" % ('panic', fsm.current, fsm.can('panic'))
print "Can fire event %s from state %s? = %r" % ('clear', fsm.current, fsm.can('clear'))