@echo off
REM Windows CMD script to initialize git repository with branches and tags
echo Initializing Git repository...
git init -b main
git config user.name "DevOps Engineer"
git config user.email "devops.intern@example.com"
git add .
git commit -m "chore: initial commit with baseline structure"
git tag -a v1.0.0 -m "Release v1.0.0"
git checkout -b dev
echo // Sample dev changes >> src/app.js
git commit -am "feat: added dev features"
git checkout main
git merge --no-ff dev -m "release: v1.1.0"
git tag -a v1.1.0 -m "Release v1.1.0"
echo Repository initialized successfully!
