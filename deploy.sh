echo Starting deployment...

pushd %DEPLOYMENT_SOURCE%

echo Install npm packages
call npm install

IF %ERRORLEVEL% NEQ 0 (
goto error
)

echo Building...
call npm run build

:error
echo Deploy Error
exit

:end
echo Deploy Finished
exit