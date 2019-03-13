# Formatting your Go code

## Introduction

Unlike most programming languages where format was never enforced until recently where we start seeing tools like `jslint` begin to emerge.

In `GoLang` there is a tool call `GoFmt` which performs code formatting for developers.

Benefits of having a look alike code base is that;

 - it is easier to write: never worry about minor formatting concerns while hacking away,
 - it is easier to read: when all code looks the same you need not mentally convert others' formatting style into something you can understand.
 - it is easier to maintain: mechanical changes to the source don't cause unrelated changes to the file's formatting; diffs show only the real changes.
 - it is uncontroversial: never have a debate about spacing or brace position ever again!

Extremely helpful across GoLang repository.


## How to do

Easy. 

`go fmt gofile.go`

Alternatively;

`go fmt ./...`

Means from current directory plus recursively scan all child/grand-child, etc.., apply `fmt` to all found files
