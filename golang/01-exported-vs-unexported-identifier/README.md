# Exported / unexported variables

## Introduction

This is probably a slightly above hello world level knowledge. I however feel that it is still worth a mention as this is possibly a gotcha to new golang users.
In the `Golang` world, the first character of your type's name actually has a role to play.

Variables or functions with a captialized first character in its name signifies to the compiler that these types are to be exported. In other words,
they are exported and are accessible to other packages. Unlike its counter-part, unexported types.

## Use case
I think the description above is pretty clear and I think we can see them sort-of like the 'private' and 'public' accessor of other object oriented languages like Java.

Use case is straight forward. If you want other packages to access a particular type, let say a variable of a `struct` then export it. Otherwise this information is not accessible. E.g. Stringifying a struct to JSON, if a variable is NOT accessible, then the parser will most likely panic or print null.

