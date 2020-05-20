# Port forwarding

## Introduction

Many times if a container was built based on one of the best practises, you will find that on performing `docker exec`
you will be connecting as a non-root user account.

This document describes how you can access the container as `root`

## Use case
I would like to do `docker exec -it blah bash` as root user to install things like `vim`

What should I do?

## Solution
Use the `-u 0` option. `-u` means to connect as user `0`. Root's user id is usually 0. Hence `-u 0` means as root.
Do:

```shell
docker exec -it -u 0 my_container_name bash
``` 

