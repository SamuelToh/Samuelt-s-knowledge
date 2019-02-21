# Declaring callback for the events

## Introduction

In Fysom's state machine module. You are expected to;
  1) delcare events
  2) declare states
  3) optionally you can declare callbacks against events as well

There are 5 types of callbacks you can declare for your events;

  onbefore_event_ - fired before the event
  onleave_state_ - fired when leaving the old state
  onenter_state_ - fired when entering the new state
  onreenter_state_ - fired when reentering the old state (a reflexive transition i.e. src == dst)
  onafter_event_ - fired after the event


Callbacks are add on to your events.
Sometimes you want to have the ability to 'preprocess' something prior to really executing the events.
This is when you add the callback methods.

States are essentially a guidance/hint for your code on what to do next upon executing the event.

## Sample code and output

```python
from fysom import Fysom

def onpanic(e):
    print 'panic! ' + e.msg
def oncalm(e):
    print 'thanks to ' + e.msg + ' done by ' + e.args[0]
def ongreen(e):
    print 'green'
def onyellow(e):
    print 'yellow'
def onred(e):
    print 'red'
fsm = Fysom({'initial': 'green',
             'events': [
                 {'name': 'warn', 'src': 'green', 'dst': 'yellow'},
                 {'name': 'panic', 'src': 'yellow', 'dst': 'red'},
                 {'name': 'panic', 'src': 'green', 'dst': 'red'},
                 {'name': 'calm', 'src': 'red', 'dst': 'yellow'},
                 {'name': 'clear', 'src': 'yellow', 'dst': 'green'}],
             'callbacks': {
                 'onpanic': onpanic,
                 'oncalm': oncalm,
                 'ongreen': ongreen,
                 'onyellow': onyellow,
                 'onred': onred }})

# main
fsm.panic(msg='killer bees')
```

Output is:

```python
# output
red
panic! killer bees
```

The output above show case the callback function getting invoked prior to executing the actual event method.
