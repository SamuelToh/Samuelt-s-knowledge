# Port forwarding

## Introduction

A must have tool for any person doing ops.

There odd to be 1 or 2 instances where you wish you have access to a particular service running on a cloud instance but you can't
directly access the console or fancy UI due to the great firewall keeping the instance safe and secure.

In this case you would want port forward a useful port over the `secure shell` onto your machine. So you can 
access these hidden services.

## Use case

I have this fancy rabbitmq management UI that I wish to use on my remote host but the host is not allowing me to connect
to it as the port is blocked off.

What should I do?

## Solution

We'll use rabbitmq's management application as an example but it should be applicable to the rest of the use-cases.

Rabbitmq's management application runs on port `15672`. If you're using docker you will first of all want to map
the container's `15672` onto the remote host's port. This can be done via the `ports` attribute in the `docker-compose`
file.

If you do it correctly, doing `docker ps` should reveal show something like this;

```python
f07d2a58b8f9        my-rabbitmq:0.1.0                       "docker-entrypoint.sh"   21 minutes ago      Up 21 minutes       4369/tcp, 5671/tcp, 0.0.0.0:5672->5672/tcp, 15671/tcp, 25672/tcp, 0.0.0.0:15672->15672/tcp   docker_rabbitmq_1
```

The latter bit with the `->` sign means the host's port `15672` is portforwarded into the container's `15672` port.

Next you'll want to run the `ssh` command with the `-L` option to forward/map a remote host's port onto your machine.

Do:

```shell
ssh -L 9000:localhost:15672 root@my-ec2-hostname
``` 

Now you should be able to access whatever thatis meant to be on the remote host's `15672` from your host at port `9000`.

For my use case, I can access the rabbitmq management application from my browser at `http://localhost:9000`.
