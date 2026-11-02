# Branching, Merging & Conflict Resolution Guide

## 1. Creating a Feature Branch
```bash
git checkout dev
git pull origin dev
git checkout -b feature/telemetry-exporter
```

## 2. Making Atomic Commits
```bash
git add src/telemetry.js
git commit -m "feat(telemetry): implement Prometheus counter for HTTP requests"
```

## 3. Resolving Merge Conflicts
If another developer modified the same lines:
```bash
# Update dev
git checkout dev
git pull origin dev

# Rebase your feature branch on latest dev
git checkout feature/telemetry-exporter
git rebase dev

# Git will pause on conflicts
# Inspect conflicts:
git status

# Edit conflicted files to resolve <<<<<<< HEAD markers
# Then mark as resolved:
git add <resolved-file>
git rebase --continue
```

## 4. Semantic Tagging
```bash
# Create an annotated tag
git tag -a v1.2.0 -m "Release v1.2.0: Adds Prometheus metrics"

# Push tags to remote repository
git push origin --tags
```
