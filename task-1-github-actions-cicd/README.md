# DevOps Internship - Task 1: Automate Code Deployment Using CI/CD Pipeline (GitHub Actions)

## 📌 Project Overview
This repository implements a full automated Continuous Integration and Continuous Deployment (CI/CD) pipeline for a containerized Node.js web application using **GitHub Actions** and **Docker Hub**.

## 🚀 Pipeline Workflow
```
[ Code Commit / Push to main ]
              │
              ▼
   [ GitHub Actions Trigger ]
              │
              ├──▶ [ Job 1: Test & Lint ]
              │        ├── Check out code
              │        ├── Setup Node.js 20
              │        ├── Install dependencies (npm ci)
              │        └── Run Jest unit tests (npm test)
              │
              └──▶ [ Job 2: Build & Push Docker Image ]
                       ├── Runs only after tests pass
                       ├── Authenticates with Docker Hub
                       ├── Multi-stage Docker build
                       └── Push to Docker Hub with SHA & latest tags
```

## 🛠️ Tools Used
- **GitHub**: Source code management and repository hosting.
- **GitHub Actions**: Automated CI/CD orchestrator.
- **Node.js & Express**: Backend sample web application with `/health` endpoint and unit tests.
- **Jest & Supertest**: Automated testing framework.
- **Docker**: Containerization using multi-stage lightweight Alpine build.
- **Docker Hub**: Container registry hosting the published application image.

## 🔐 GitHub Secrets Configuration
In your GitHub repository, navigate to **Settings > Secrets and variables > Actions** and add:
1. `DOCKERHUB_USERNAME`: Your Docker Hub username.
2. `DOCKERHUB_TOKEN`: Your Docker Hub Personal Access Token (PAT) with Read & Write permissions.

## 💻 Running the App Locally
```bash
# 1. Install dependencies
npm install

# 2. Run unit tests
npm test

# 3. Start local development server
npm start
# Visit http://localhost:3000 and http://localhost:3000/health
```

## 🐳 Building and Running with Docker Locally
```bash
# Build the Docker image
docker build -t nodejs-demo-app:local .

# Run the container
docker run -p 3000:3000 --name demo-app nodejs-demo-app:local
```

## 🧪 Testing GitHub Actions Locally
You can test this pipeline locally using [act](https://github.com/nektos/act):
```bash
act push --secret DOCKERHUB_USERNAME=demo --secret DOCKERHUB_TOKEN=dummy
```
