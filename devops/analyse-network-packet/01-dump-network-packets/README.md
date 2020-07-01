# Diskspace

## Introduction

Assuming you have an application that talks to some IoT devices over a communication standard or protocol
and it is magically working as expected.
It is behaving well, whereas the one which you are developing is not.

Both performing identical task but their results are different. At this stage you wonder why.
The easiest way out for this kind of situation is to analyse the network packets produced by both applications
and then spot their differences.

## Use case

Self-explainatory. N/A

## Solution

There are couple of tools out there which can be used for dumping network packets.
They are;
- tcpdump
- tshark

Both are equally good.

In this tutorial we will talk about `tcp dump`.

Generally `tcp dump` only provides a very brief information about how a packet. E.g. its source
and destination ip address and probably a bit of the encoded text within the packet's body.

Therefore typically you will save the output of it into a file and transfer it `wireshark`
for further analysis.

Some useful options are;
-i <the network interface which packet capture will happen>
   Use `ifconfig` to lookup the interface name.

-w <write the pcap file content to a flat file. Pcap means packet capture>

Hence you normally do `tcpdump -i eth1 -w /tmp/myPcap`

In case you haven't got `tcpdump` you can install it via `apt-get install tcpdump`.
For wireshark do `sudo apt-get install libcap2-bin wireshark`
