---------
Vagrant |
Vagrant | => Q: What is it? 
Vagrant |
---------
A: It is a virtual machine helper tool that create VM using other Virtualization application.


Q: How does it helps other?
A: It allows one to configure a virtual machine easily through filling up some configuration in the
   VagrantFile. See => https://docs.vagrantup.com/v2/vagrantfile

Q: How can it be useful?
A: It can build a development environment and then upload a box to 'X' location available for other developers
   to automatically grab 1 of those environment by simply downloading a VagrantFile and that will set 
   the dev up.

   Also, for the corporate world who wish to easily setup multiple simiar copies of Virtual machine 
   on a box (usually a server) easily. All they need is a VagrantFile (with loop logic) and you are all setup. 

Q: So how do I get started?
A: Easy. vagrant up is all you need to bring up the box. Next, vagrant ssh to log into it.

Q: If I don't like vagrant ssh but would prefer using tools like putty manager can I?
A: Yes. Login ip is 127.0.0.1 port: 2222
   login/pass: vagrant/vagrant


Learning notes:
----------------

Provider=Oracle Virtual Box (You'll have to manually install VirtualBox if you haven't got it yet)
Note: Virtual box is not the only supported provider. There are others like vmware, docker etc.
See https://docs.vagrantup.com/v2/getting-started/providers.html

plugin installed:
vagrant plugin install vagrant-vbguest 
Note: needed because when I first started my vm there were some issues trying to mount the drive.
* An issue with virtual box version 4.3
Reference: http://stackoverflow.com/questions/22717428/vagrant-error-failed-to-mount-folders-in-linux-guest


Ubuntu 14.10 box location:
https://github.com/kraksoft/vagrant-box-ubuntu/releases/download/14.10/ubuntu-14.10-amd64.box

Add ubuntu 14.10 box to Vagrant's box-collection
vagrant add ubuntu14 https://github.com/kraksoft/vagrant-box-ubuntu/releases/download/14.10/ubuntu-14.10-amd64.box

Note: ubuntu14 is just a name I give to the box. It can be anything.
