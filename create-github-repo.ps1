# Script to create GitHub repository and push code
# You'll need a GitHub Personal Access Token

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Repository Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoName = "Expert-Stacker-Portfolio"
$username = "ajaySingh-93"
$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host "Repository Name: $repoName" -ForegroundColor Yellow
Write-Host "Username: $username" -ForegroundColor Yellow
Write-Host ""

# Check if repository already exists
Write-Host "Step 1: Checking if repository exists..." -ForegroundColor Green
$checkRepo = git ls-remote $repoUrl 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Repository already exists!" -ForegroundColor Green
} else {
    Write-Host "✗ Repository does not exist yet." -ForegroundColor Red
    Write-Host ""
    Write-Host "Please create the repository manually:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/new" -ForegroundColor Cyan
    Write-Host "2. Repository name: $repoName" -ForegroundColor Cyan
    Write-Host "3. Description: Expert Stacker Portfolio Project" -ForegroundColor Cyan
    Write-Host "4. Choose Public or Private" -ForegroundColor Cyan
    Write-Host "5. DO NOT initialize with README, .gitignore, or license" -ForegroundColor Cyan
    Write-Host "6. Click 'Create repository'" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Press Enter after you've created the repository..." -ForegroundColor Yellow
    Read-Host
}

Write-Host ""
Write-Host "Step 2: Setting up remote..." -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin $repoUrl
Write-Host "✓ Remote configured" -ForegroundColor Green

Write-Host ""
Write-Host "Step 3: Pushing code to GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ Success! Code pushed to GitHub" -ForegroundColor Green
    Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "✗ Push failed. Possible reasons:" -ForegroundColor Red
    Write-Host "1. Repository not created yet" -ForegroundColor Yellow
    Write-Host "2. Authentication required" -ForegroundColor Yellow
    Write-Host "3. Check your GitHub credentials" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Try running: git push -u origin main" -ForegroundColor Cyan
    Write-Host "You may be prompted for credentials." -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Red
}

