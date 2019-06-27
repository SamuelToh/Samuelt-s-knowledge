# Diskspace

## Introduction

Who (process) is chewing all of my disk space again??

Running low/out of diskspace on a production machine is probably one of the common a devops'er can encounter during his/her career.
Exhausting disks is bad because it could cause unexpected behaviour to your process and sometimes even making your machine unresponsive, in which can lead to other problems like unable to `ssh` onto it.

## Use case

Self-explainatory. N/A

## Solution

I find the `ncdu` utility to be quite useful for hunting down disk spaces.
What it does is, it will recursively loop through all files and directory from your current working directory, calculate the disk usage
for it in a simple graphical matter.

Through its simple UI, you can navigate layers of directory until you track down that one or more of disk that eats up all of your disk.
If you're thinking of 'What if the huge files are in a docker container'? Not to worried.

This is not a problem for `ncdu` because docker's `volume` is actually mounted onto your machine. You can do a `docker inspect` to find
out the directory name of the volume and start `ncdu` from there.

If you are clueless about where is a good starting point. The extreme case would be to begin scanning from `/`.

Sometimes you may want to also include the `--exclude` option to tell `ncdu` to avoid scanning a certain directory to save time.

Unfortunately the `ncdu` utility don't come pre-installed with your linux operating system. However it is not difficult to get it
from the usual `apt-get update && apt-get install ncdu`.

