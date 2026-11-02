#!/usr/bin/env bash
# ==============================================================================
# Script: setup-git-branches.sh
# Purpose: Automatically initializes a full Git repository demonstrating:
#          - Standard Branching: main, dev, feature/*
#          - Semantic commit messages (Conventional Commits)
#          - Pull request merge simulation
#          - Annotated Git tags (v1.0.0, v1.1.0)
# ==============================================================================
set -e

echo "🚀 Initializing Version-Controlled DevOps Git Repository..."

# 1. Initialize Git Repo
git init -b main

# Configure local git user if not already set
git config user.name "DevOps Engineer"
git config user.email "devops.intern@example.com"

# 2. Initial commit on main branch
git add .gitignore README.md src/
git commit -m "chore: initial commit with baseline DevOps application structure"

# 3. Create Annotated Release Tag v1.0.0
git tag -a v1.0.0 -m "Release v1.0.0: Baseline stable release"

# 4. Create and switch to develop branch
git checkout -b dev
echo "Switched to branch 'dev'"

# 5. Create Feature Branch 1: User Authentication
git checkout -b feature/user-auth
cat << 'EOF' >> src/auth.js
// Feature: User Authentication & Token Validation
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(401).json({ error: 'Access token required' });
    next();
}
module.exports = { authenticateToken };
EOF
git add src/auth.js
git commit -m "feat(auth): add middleware for API authentication"

# 6. Merge Feature 1 into dev
git checkout dev
git merge --no-ff feature/user-auth -m "merge: pull request #1 from feature/user-auth into dev"

# 7. Create Feature Branch 2: System Metrics & Health Telemetry
git checkout -b feature/system-metrics
cat << 'EOF' >> src/metrics.js
// Feature: Prometheus formatted system metrics
function getSystemMetrics() {
    return {
        memory: process.memoryUsage(),
        uptime: process.uptime(),
        load: process.cpuUsage()
    };
}
module.exports = { getSystemMetrics };
EOF
git add src/metrics.js
git commit -m "feat(metrics): introduce system metrics telemetry endpoint"

# 8. Merge Feature 2 into dev
git checkout dev
git merge --no-ff feature/system-metrics -m "merge: pull request #2 from feature/system-metrics into dev"

# 9. Release to main (Merge dev into main)
git checkout main
git merge --no-ff dev -m "release: merge dev into main for v1.1.0 production release"

# 10. Tag v1.1.0
git tag -a v1.1.0 -m "Release v1.1.0: includes auth middleware and telemetry metrics"

echo "=========================================================="
echo "🎉 Git repository successfully created with all branches & tags!"
echo "Branches:"
git branch -a
echo ""
echo "Tags:"
git tag -n
echo ""
echo "Commit Log Graph:"
git log --graph --oneline --decorate -n 10
echo "=========================================================="
echo "To push to your GitHub:"
echo "  git remote add origin https://github.com/<YOUR_USERNAME>/devops-git-task4.git"
echo "  git push -u origin --all"
echo "  git push --tags"
