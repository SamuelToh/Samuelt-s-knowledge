# Putting others commit below your current commit

## Use case

Happens a lot especially you're on a project which a dozen of developers are working at the same time.
A branch that you forked out from can get out of sync quite easily due to the constantly merging to the 
source branch.

It is often a good practise to keep your working branch in sync with the source branch to avoid complicated merge
conflicts.

This can be achieve through the `git rebase` command.

## How
If you are sync'ing against the remote master branch then you'll have to fetch its updated commit data.

`git remote add upstream {URL} master` 

To tell `git` where you're intending to sync against. In scenario where it is just your own project then you can
skip this step.

Once you have added the new remote source, the next thing to do would be to fetch the latest commit information from it.

`git fetch upstream master`

Then you can ask `git` to rebase (sync) with your target ;

`git rebase upstream/master` 

Update the `master` value according to the name of branch you're syncing against with.
In scenario where you're just syncing with your own repository then upstream will be `origin` means the "Original" source.

There can be conflicts. When one is encountered you'll have to resolve the `>>>>`, `=====` or `<<<<` markers. Then 
decide to `git add` or `git rm` the file before running `git rebase --continue`.

