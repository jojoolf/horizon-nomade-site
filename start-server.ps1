$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath
npm start
