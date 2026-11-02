# DevOps Internship - Task 4: Build a Version-Controlled DevOps Project with Git

## 📌 Project Overview
This repository illustrates industry-standard Git best practices for modern DevOps workflows:
- Multi-branching structure (`main`, `dev`, and `feature/*` branches).
- Conventional Commits (`feat:`, `fix:`, `chore:`, `release:`).
- Pull Request and Issue templates for collaborative review.
- Comprehensive `.gitignore` for zero secrets leak.
- Semantic Versioning tags (`v1.0.0`, `v1.1.0`).
- Automated setup script (`setup-git-branches.sh`) to construct the entire commit graph in one step.

## 🚀 Quick Start: Automated Git Initialization
To automatically initialize the full Git repository with all branches, commits, and tags:
```bash
# Make the setup script executable and run it:
chmod +x setup-git-branches.sh
./setup-git-branches.sh
```

## 📤 Pushing to Your GitHub
```bash
# 1. Create a new empty repository on GitHub named 'devops-task4-git'
# 2. Link your local repository to GitHub:
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/devops-task4-git.git

# 3. Push all branches and tags:
git push -u origin --all
git push origin --tags
```
