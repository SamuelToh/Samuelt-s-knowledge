I would like to port a commit from a bitbucket repository to
github repo. What should I do?


Step #1
`git clone` your github project.

Step #2
git remote add your bitbucket repository as a upstream.
E.g. git remote add bitbucket2 https://SamuelToh@bitbucket.org/vrtsystems/jswidesky-client.gi

Step #3
git pull from your upstream repo added in #2
e.g. git pull bitbucket2 develop

Step #4
git commit and then do the usual push
*If there is conflict, then you'll have to fix them*

