@echo off
start node server.js
timeout /t 2 /nobreak >nul
start lt --port 3000
