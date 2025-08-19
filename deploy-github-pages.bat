@echo off
echo 🚀 Deploying to GitHub Pages...

REM Check if we're in a git repository
if not exist ".git" (
    echo ❌ Not a git repository. Please run 'git init' first.
    exit /b 1
)

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Build the client for GitHub Pages
echo 🏗️ Building for GitHub Pages...
set NODE_ENV=production
npm run build:gh-pages

REM Check if gh-pages is installed
npm list gh-pages >nul 2>&1
if %errorlevel% neq 0 (
    echo 📦 Installing gh-pages...
    npm install --save-dev gh-pages
)

REM Deploy to GitHub Pages
echo 🌐 Deploying to GitHub Pages...
npm run deploy

echo ✅ Deployment complete!
echo 📱 Your site will be available at your GitHub Pages URL
pause