@echo off

if "%~1"=="" (
	echo Too few arguments.
	exit /B
)

cscript //nologo //E:vbscript %~dp0/runbg.vbs node %*
exit /B
