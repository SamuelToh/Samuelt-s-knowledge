# Putting others commit below your current commit

## Use case

Squashing your commits into one is consider as a good practise when contributing to others project. 
Anyway if you don't do this, you might find the project collaborators wanting you to do this
as it helps them maintain a clean commit tree on their master branch.

Instead of having multiple commits describing things like
 # add Test
 # revert X 
 # do this 

you should always try to squash all commits into one and tag it with a meaningful commit message before
doing a pull request.

Example:
- Added feature X.


## How
Suppose you're done with your work and you have pushed 5 commits altogether.
Then you'll be looking at squashing 4 commits into one. Hence 

`git rebase -i HEAD~5`

This will bring up an interface (your favourite text editor) with 5 commits listed in there.
You'll want to select the very first commit and tag it with the word 'pick' while the 
commits underneath it with 'squash'.

Then save and exit.

To push the squashed changes, do;

`git commit -f` 

While running the rebase interactive mode, you might want to also reword your commit messages to tag them with
a much meaningful message for your pull request.

