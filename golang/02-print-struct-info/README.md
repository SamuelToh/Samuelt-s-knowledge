# Printing out the `struct`

## Introduction

Another Golang 101 lesson. A must know for all developers keen in writing Golang. As we know there is currently no IDE which supports code stepping for Golang, there are attempts to do that through the Delve engine. Last time I checked, it is still in development but I suspect they should be available soon.

Other than using GDB or Delve, one of the conventional method for debugging is to throw in print statements up down left right center within the code base to trace how things are going in the process.

In this lesson we will talk about `Printf`, F for formatted.


## Use case
As noted above. Supposingly you would want to find out more about a `struct` what its 'state' or value of a variable is, you can use the `Printf` method from the `fmt` package.

Example code:

```go
package main

import (
    "fmt"
)

type s struct {
    Int       int
    String    string
    ByteSlice []byte
}

func main() {
    a := &s{42, "Hello World!", []byte{0,1,2,3,4}}

    fmt.Printf("%#v", a)
}
```
