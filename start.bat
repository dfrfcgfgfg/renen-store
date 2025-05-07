@echo off
start node server.js
timeout /t 2 /nobreak >nul
start ngrok http 3000
