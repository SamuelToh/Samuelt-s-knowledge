# Port forwarding

## Introduction

I have a backward application that talks to me through a low numbered port. E.g. 502
The modbus protocol is one such example.

Unfortunately my modern application does not have access to 502 as it is a lower number port.
Note that, any port below 1024 will require special access to use them.

Alternative to this problem is, if you have root access then you can map 502 to a higher port number.
This is so that an ordinary user can access this mapped port like it is using a lower number port with no trouble, 

## Use case
As described above.

## Solution

Use iptable to reroute the lower number port to a higher range.
Assuming you want to bring 502 to 10502. Then.

Do:

```shell
sudo iptables -A PREROUTING -t nat -p tcp --dport 502 -j REDIRECT --to-port 10502
``` 

