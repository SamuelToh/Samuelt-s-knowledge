```
'use strict';
const fs = require('fs');

const assert = require('assert');


/* Write only five characters. */

fs.writeFileSync('/tmp/test1', 'Hello');

assert.deepStrictEqual(fs.readFileSync('/tmp/test1').toString(), 'Hello');


/* Write something else. */

fs.writeFileSync('/tmp/test1', 'Sun');

assert.deepStrictEqual(fs.readFileSync('/tmp/test1').toString(), 'Sun');


/* Open the file descriptor. */

const fd = fs.openSync('/tmp/test', 'w');


/* Write only five characters. */

assert.deepStrictEqual(fs.writeSync(fd, 'Hello'), 5);

assert.deepStrictEqual(fs.readFileSync('/tmp/test').toString(), 'Hello');


/* Write something else. */

fs.writeFileSync(fd, 'Sun');

assert.deepStrictEqual(fs.readFileSync('/tmp/test').toString(), 'Sun');
```
