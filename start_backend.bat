@echo off

title AI Dashboard Builder - Backend

echo ==========================================
echo     AI Dashboard Builder - Backend
echo ==========================================
echo.

cd /d "%~dp0backend"

if not exist "%~dp0.venv\Scripts\python.exe" (
    echo ERROR: Python virtual environment not found!
    echo.
    echo Expected:
    echo %~dp0.venv\Scripts\python.exe
    echo.
    pause
    exit /b 1
)

echo Starting FastAPI backend...
echo.
echo Backend URL:
echo http://127.0.0.1:8000
echo.
echo API Documentation:
echo http://127.0.0.1:8000/docs
echo.
echo Press CTRL+C to stop the backend.
echo.

"%~dp0.venv\Scripts\python.exe" -m uvicorn main:app --reload --port 8000

echo.
echo Backend stopped.
pause