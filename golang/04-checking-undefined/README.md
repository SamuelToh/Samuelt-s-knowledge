# Formatting your Go code

## Introduction

Checking if a property is undefined.

Is this even possible?

## Answer
No. `Golang` is different to `Javascript`. Actually `Javascript` is not the same to most languages as it is *NOT* strongly-typed.
`Javascript`'s object is pretty much is inspired by `JSON` where a property can be set optionally. Even when set,
it is possible that a certain property can be at one moment be `object` and another instance be `array`, even `undefined`.

In `Golang` if you have a `struct` which contains a certain set of properties then they are already set by default.
Even their types are already defined at compile time.

Since these fields are `strongly-typed`, defined at compile time, the compiler would have assigned them
an "un-initialized" default value during compilation, so there is no such use case where a property is `unset`
or undefined.

Here are some `un-init` values for certain data types;

For `Integer` the default "un-initialized" value is 0. 
`String` = ""
`Boolean` = false.


Certain types like `Array` e.g. []String can be `Nil`.
Or `len(Array)` can be 0.

