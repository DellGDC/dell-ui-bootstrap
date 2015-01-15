@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\ext-name\cli.js" %*
) ELSE (
  node  "%~dp0\..\ext-name\cli.js" %*
)