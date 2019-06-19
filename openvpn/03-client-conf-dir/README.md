# Client Configuration Directory (ccd)

## Introduction

Primary known as 'ccd'. You may notice this empty directory upon installing `openvpn`.
What this directory does is it allows you to give explict configuration to a specific openvpn client.

I am not an openvpn expert but from I know today is that you can assign a fixed ip-address for a client in the open virtual network
through the client configuration.


## HOW-TO?: Assigning a fixed ip-address to a client.

First you'll have to generate the keys and certificates for your client.
On generating the crypto items, you would have already given your client a unique name e.g. 'client001'

Based on the unique name, you can create a file and named it as the client name in the `openvpn/ccd` directory.

Then in the file, defined:

```
push ifconfig 172.30.0.2 172.30.0.1
```

The first ip address denotes the fixed ip address which you are assigning and the latter would be the server's ipaddress.

So example;

If I have a client named 'bread-75eb100f' then in my `ccd` directory I would have a file named `bread-75eb100f`, containing
the content shown above.
