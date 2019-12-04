# Copy the following contents to your default .bashrc
# If .bashrc does not exists for some reason then create it in your $HOME
#
# Uncomment if required.
# You'll need `nvm` to be installed.
# This setup also requires `ruby` to be installed.

# Copy ME
nvm use 8.12
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

alias stop_containers='docker stop $(docker ps -aq)'
alias remove_containers_img='docker rmi $(docker images -q)'
alias remove_containers='docker rm $(docker ps -aq)'
alias lookup_proc_port='sudo netstat -nlp | grep 3000'
alias widesky_api_dev='cd /home/samuelt/widesky-dev-environment-release-0.0.2/develop/widesky/server/api'
alias start_webstorm='sh /home/samuelt/devtools/WebStorm-191.7141.49/bin/webstorm.sh'
alias start_sublime='/home/samuelt/devtools/sublime_text_3/sublime_text `pwd`'

cat << EOF
Alias commands:
---------------

-------------------------------------------------------------------------
| Nr    | Description:                          | Command               |
------------------------------------------------------------------------
|  0    | Start webstorm binary:                | start_webstorm        |
|  1    | Stop all running docker containers:   | stop_containers       |
|  2    | Remove all stopped containers:        | remove_containers     |
|  3    | Remove all container images:          | remove_containers_img |
|  4    | Go to Widesky api server dev:         | widesky_api_dev       |
|  5    | Lookup process nr on port:            | lookup_proc_port      |
|  6    | Rerun the .bashrc setup:              | source ~/.bashrc      |
|  7    | Start the sublime binary:             | start_sublime         |
-------------------------------------------------------------------------

EOF

# Add RVM to PATH for scripting. Make sure this is the last PATH variable change.
# Ruby setup
export PATH="$PATH:$HOME/.rvm/bin"
export GEM_HOME=~/.ruby/
export PATH="$PATH:~/.ruby/bin"

# Use vim permanently
alias vi=vim

