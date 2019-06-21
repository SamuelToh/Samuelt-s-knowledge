# Cherry picking a commit

## Use case

Sometimes you ain't sure which commit broke a test or given a list of commit done by a dev you ain't sure which one
fixes the problem. You are curious, you need to know how or which one or a few of the commits did it.

In this case you can use the cherry pick commit and pull in changes introduced in a commit one by one or a few at once.

## How
Suppose you have a branch named `develop` and that is where the commits are. I'll recommend you forking the `develop`
branch and give it a name. For instance `testing`.

On the `testing` branch, first do a `git reset --hard` to a point where the commits ain't introduced.
Once that is done, you can use the `git cherry-pick` command to bring in commits.

For looking up the commit id, you can use the `gitk` tool. Find out the commit ids then introduce them 
back into `testing` bit by bit.

So `git checkout testing` to switch to your test branch.

`git cherry-pick [commit_ids]`

This will bring in the commits. Resolve any conflicts (if any) then do `git add` the resolved files.

After which, do a `git commit` and finally `git push`. Done.

