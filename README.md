# runbg
This script wraps a call to `node` in such a way that the commandline window is hidden.
It uses vbscript approach similar to [this](https://keestalkstech.com/2016/07/start-nodejs-app-windowless-windows/), and only works on Windows OS. Any number of arguments can be passed to the script.

## Installation
The module is intended to be installed globally:
```
npm install -g runbg
```

## Usage

### nodebg
Use like you normally would use `node` but type `nodebg` instead.
Say you have a script `test_server.js` (check `runbg` module directory) that you want to run with a port number as an argument:
```
nodebg test_server 8000
PID: 4340
```
The PID of the process started gets printed to the commandline if everything is ok.
Now the console window in which you have typed the command can be closed.
Test wether the server is running by typing `http://localhost:8000/` in browser.
The server can then be stopped by killing `node` process with the corresponding PID in taskmanager or by command:
```
taskkill /PID 4340 /F
```

> Note that if some server on the port specified is already running this won't stop new `node` process from being created, so `nodebg test_server 8000` if ran multiple times in a row will always print new PIDs as it should.
> But there will be an error in the `node` process due to port being occupied already. So new processes will be terminated immediately after creation and only the first server will keep running.


### runbg
`Runbg` is a more generic version of 'nodebg' script that allows to run any commandline application in the background:
```
runbg node test_server 8000 some_other_argument
```
Check https://msdn.microsoft.com/en-us/library/aa389388(v=vs.85).aspx for `process.Create` errorcodes explanation.
