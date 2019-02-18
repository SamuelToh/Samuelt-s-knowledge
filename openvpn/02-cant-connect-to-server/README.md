# Setting up openvpn

## Introduction

Troubleshooting an inevitable step.

Assuming you have got both the server and its clients all setup correctly but when you boot up the openvpn service from the client space it is reporting error.
Possibly a nasty error saying "No server certificate verification method has been enabled".

Scary. Upon googling you realize it doesn't make sense at all, so you are stuck. What to do next?

## Troubleshoeeting: Always check the /var/log/syslog of your vpn server.

Make sure you are seeing an attempt to contact the server is made from your client. 

If no effort is seen then it has to be something to do with the client. Either it is not configured right hence not starting or it could not make any outbound connection. E.g. Internet issue? Network cable not plugin? All sorts of possibility.

If you do see connectivity from the client and you realize packets getting dropped by your `IPTABLE` (firewall) then this is a firewall issue.

Typically openvpn talks via the `1194` port. Unless configured differently, the command below should open up the port.
```
# Allow incoming OpenVPN
iptables -A INPUT -p udp --dport 1194 -j ACCEPT
ip6tables -A INPUT -p udp --dport 1194 -j ACCEPT
```

One is for `ipv4` and the other is `ipv6`. Run the appropriate command.

Now, try again.

In most cases it should resolve the issue once the client is able to connect to the server.
If not then see `/var/log` again to determine next step.

