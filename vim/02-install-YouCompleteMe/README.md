# YouCompleteME for vim

## Introduction

One reason why people love IDE so much was due
to its autocomplete feature.

Obviously there are more, like allowing one
to step through the code line after line.

Not too sure if vim actually has the latter
capability. Probably not.

However, at least auto-complete is made possible now
with YouCompleteME.

See:
```
https://github.com/ycm-core/YouCompleteMe#linux-64-bit
```

## Use case

Self-explainatory. N/A

## Solution (ubuntu only)

To install `YouCompleteMe` to your vim. Do the followings.

Step 1: Install `vundle` from my previous blog post.

Step 2: Modify the `.vimrc` file located in your $HOME dir.

Step 2: Add the following content into the plugin section.

```
" Git plugin - you complete me
Plugin 'ycm-core/YouCompleteMe'
```

Step 3: Install it.

Run `vim +PluginInstall +qall`

OR

Inside vim type `:PluginInstall`.

