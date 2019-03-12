# Port forwarding 2

## Introduction

In the previous port forward tutorial we spoke about bringing (port foward) a port of a remote host to your machine.
While this is a useful technique but not always feasible especially you are in a situation where your `docker container`
port is not binded to the remote host yet and you cannot bounce the container stack for some reason.

Or for security reason you are not allowed to port forward a container's port to the remote host.

What should I do?

## Use case

I have this fancy rabbitmq management UI that I wish to access from my host but I am not allowed to restart the
docker container stacks to abuse the `ports` attribute.

What can I do?

## Solution

We'll use rabbitmq's management application as an example but it should be applicable to most of the scenario.

Note: Rabbitmq's management application runs on port `15672`. 

First do a `docker inspect` on your rabbitmq container. `grep` for its ip address. E.g. `docker inspect test_rabbitmq_1 | grep IPAddress`

This should yield you the result;

```
"SecondaryIPAddresses": null,
            "IPAddress": "",
                    "IPAddress": "172.28.0.2",
```

You will want to take note of the Ip address above.

Then on your host use the `ssh` binary with the `-L` option to forward/map directly to the container's ip address on the remote host.

Example:

`ssh -L 9999:<docker container ip>:15672 root@remote-host.aws.somewhere`
