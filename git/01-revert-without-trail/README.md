# Reverting without trail

## Use case

Ooops you have done a bad commit and you don't want people to see the commit within the git tree.

## How
use `git reset --hard REVISION_ID`. This is essentially chopping down a commit tree to a certain revision sha. This also means that you will loose all changes from the `HEAD` up till the reset point.

To commit the `reset` use `git push -f`.

