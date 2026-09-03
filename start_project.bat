@echo off

title AI Dashboard Builder - Project

echo ==========================================
echo      AI Dashboard Builder
echo      Starting Full Project
echo ==========================================
echo.

echo Starting Backend...
start "AI Dashboard Builder - Backend" cmd /k "%~dp0start_backend.bat"

timeout /t 3 /nobreak >nul

echo Starting Frontend...
start "AI Dashboard Builder - Frontend" cmd /k "%~dp0start_frontend.bat"

echo.
echo ==========================================
echo       Project Started Successfully
echo ==========================================
echo.
echo Backend  : http://127.0.0.1:8000
echo API Docs : http://127.0.0.1:8000/docs
echo Frontend : http://localhost:5173
echo.

pause
