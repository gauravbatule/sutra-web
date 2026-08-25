@echo off
setlocal
title SUTRA IDE Setup
cd /d "%~dp0"

echo ============================================
echo   SUTRA IDE — Windows Setup
echo ============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo [ERROR] Node.js was not found.
  echo Install Node.js 20+ from https://nodejs.org and run this again.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [1/3] Installing dependencies — this can take a few minutes...
  call npm install --no-audit --no-fund
  if errorlevel 1 (
    echo [ERROR] npm install failed. Check your internet connection and retry.
    pause
    exit /b 1
  )
) else (
  echo [1/3] Dependencies already installed — skipping.
)

if not exist "dist\index.html" (
  echo [2/3] Building the IDE interface...
  call npm run build
) else (
  echo [2/3] Build already present — skipping.
)

echo [3/3] Creating desktop shortcut...
set "TARGET=%~dp0SUTRA-IDE.bat"
set "LNK=%USERPROFILE%\Desktop\SUTRA IDE.lnk"
powershell -NoProfile -Command "$s = (New-Object -ComObject WScript.Shell).CreateShortcut('%LNK%'); $s.TargetPath = '%TARGET%'; $s.WorkingDirectory = '%~dp0'; $s.IconLocation = '%~dp0SUTRA-IDE.exe,0'; $s.Save()" >nul 2>nul
if exist "%LNK%" (echo       Desktop shortcut created.) else (echo       Shortcut skipped — you can run SUTRA-IDE.bat directly.)

echo.
echo Setup complete. Starting SUTRA IDE...
start "" "%~dp0SUTRA-IDE.bat"
exit /b 0
