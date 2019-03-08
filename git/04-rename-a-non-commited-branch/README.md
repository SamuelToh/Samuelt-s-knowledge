# Renaming a branch

## Use case

Not uncommon to be in a situation where you have just created a branch using `git flow xyz start` or `git checkout -b`
oops! I have a typo in my branch name or I have reference the wrong issue number.

I need to fix it before I commit the branch. How can I rectify it?


## How
Supposingly the branch has not been commited yet.

`git branch -m <newname>`

Doing the above would change the name of your uncomitted branch. You can do `git status` to double check it.

If your branch has already been pushed into the repository then it is always better to copy the entire branch,
rename it and then repush it.
