@echo off

title AI Dashboard Builder - Frontend

cd /d "%~dp0frontend"

echo ==========================================
echo     AI Dashboard Builder - Frontend
echo ==========================================
echo.

echo Starting React frontend...
echo.
echo Frontend URL:
echo http://localhost:5173
echo.
echo Press CTRL+C to stop the frontend.
echo.

npm run dev -- --host 0.0.0.0

pause
