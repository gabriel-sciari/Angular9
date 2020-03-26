## Before Starting 
* Install node
* Install visual studio code (as text editor)


### Set watch for many files in VS code (with linux)
When you see the notification `Visual Studio Code is unable to watch for file changes in this large workspace`, it indicates that the VS Code file watcher is running out of handles because the workspace is large and contains many files. The current limit can be viewed by running:
```bash
cat /proc/sys/fs/inotify/max_user_watches
```
The limit can be increased to its maximum by editing /etc/sysctl.conf and adding this line to the end of the file:
```
fs.inotify.max_user_watches=524288
```
The new value can then be loaded in by running 
```
sudo sysctl -p
``` 
While 524,288 is the maximum number of files that can be watched, if you're in an environment that is particularly memory constrained, you may wish to lower the number. Each file watch takes up 540 bytes (32-bit) or ~1kB (64-bit), so assuming that all 524,288 watches are consumed, that results in an upper bound of around 256MB (32-bit) or 512MB (64-bit).

Another option is to exclude specific workspace directories from the VS Code file watcher with the files.watcherExclude setting. The default for files.watcherExclude excludes node_modules and some folders under .git, but you can add other directories that you don't want VS Code to track.
```json
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```

## Set Node and NPM Env (with linux) 
* update node version:
```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```
in ubuntu run also:
```bash
sudo apt-get install --reinstall nodejs-legacy     # fix /usr/bin/node
```
* check node version:
```
node --version
```
* update npm version:
```
sudo npm install -g npm 
```
* check npm version:
```
npm --version
```


## Install ng (with linux) 
* install angular
```
sudo npm i -g @angular/cli
```
* check angular version:
```
ng --version
```
