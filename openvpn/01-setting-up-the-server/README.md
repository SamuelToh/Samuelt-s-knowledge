# Setting up openvpn

## Introduction

Setting up vpn to ensure data are transferred securily is not uncommon these days in the IT world.

Unless one is only dealing with `http` traffic in which `tls` (*https*) should be more than adequate.
if you have traffic going through a network using a protocol is not protected then `vpn` is your friend.
Even more true when you're in the `IoT` world where we talk about `constrainted` network and its devices
where usually they talk `CoAP` protocol. 

As `CoAP` protocol is still relatively new, they do not have something like `tls` yet. Oh wait, *update*
there is `dTLS` now but the standard is extremely new. Probably only 6 months old at the point of writing.
Doubt there are many implementations out there that can be conveniently used.

As such, `VPN` is probably the easiest out to address the security needs.

## Setting up VPN

For a server.

You'll want to install two items.
 1) `openvpn`
 2) `easy-rsa`

 To do that;

 `apt-get update`
 `apt-get install openvpn`
 `apt-get install easy-rsa`

Now that you have the critical programs installed. You'll want to copy the `easy-rsa` directory into the `openvpn` area.

`mv /etc/easy-rsa /etc/openvpn/ca` we call it ca (certificate authority)

The step above is optional. The reason why I put them as one is because I feel that they belong to the same category.
Essentially you'll need `easy-rsa` to be your certificate authority to generate certificate and sign them.
So why not put them all in your `openvpn` dir?

Now you'll need to configure the `vars` (variables) file in the `ca` directory.
You pretty much would only be interested in the bottom bits like `KEY_COUNTRY`, `KEY_CITY` etc...
If you're paranoid you might want to change the key bits to be something more than the default `2048`.
I use `4096`.

Sure configured, you will do `source ./vars` to export the environment variables.

You'll notice that the command is asking you to run the `./clean-all` script. Do this.

Next build your `CA`. -> `./build-ca`

Then build your key-server -> `./build-key-server server` The latter part is just the name of your vpn service. We call it `server`

Afterwhich build your `dh`(diffie hellman) It is an algorithm used for generating shared secret between the communicating parties in your vpn.

`./build-dh` is the command. This takes a bit of time so you can go and have some coffee...

Another optional step.
Generate a `HMAC` signature to strenthen the server's `TLS` integrity verification capability.
`openvpn --genkey --secret keys/ta.key`

Now copy everything you have generated so far from the `keys` directory to the `/etc/openvpn` directory.
You'll need;
 1) ca.crt
 2) server.crt
 3) ta.key
 4) dh4096.pem

Now grab a copy of the sample server config and place it in the `/etc/openvpn` directory.
Modify the config, you pretty much wont change anything except for some file names changes.
E.g. dh dh4096.pem, ca.crt, server.crt, server.key

Depending on whether you'll be using `tap` or `tun` mode, regardless you'll need to
make sure that you have the required `network interfaces`. Go to `/etc/networking/interfaces`
and make sure you have the required interface. You should in most cases, unless you use the rare `tap` mode (for emulating ethernet connection).

Try booting your server.
`systemctl restart openvpn@server.service`

I'll recommend you tail the syslog at `/var/log/syslog` to make sure the vpn starts correctly.

If it doesn't then you should debug according to the errors.
You should also check your `firewall` (iptables) to ensure clients can communicate through the defined port `1194` is the standard port nr.
More on this in the future episode. Probably on client setup guide.




