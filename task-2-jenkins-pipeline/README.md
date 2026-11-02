# DevOps Internship - Task 2: Create a Simple Jenkins Pipeline for CI/CD

## 📌 Objective
Set up a basic Jenkins pipeline to automate the process of building, testing, and deploying an application in a DevOps pipeline.

## 📁 Repository Structure
```
├── Jenkinsfile                  # Main Declarative Jenkins pipeline script
├── docker-compose.jenkins.yml   # Docker Compose for local Jenkins controller
├── Dockerfile                   # Application Docker image specification
├── app/
│   ├── server.js               # Node.js web server with /health route
│   ├── test.js                 # Automated unit and integration test
│   └── package.json            # App dependencies & scripts
├── scripts/
│   └── deploy.sh               # Staging deployment script
└── README.md
```

## 🚀 Step-by-Step Instructions

### Step 1: Install and Run Jenkins
Run the pre-configured Jenkins controller with Docker:
```bash
docker compose -f docker-compose.jenkins.yml up -d
```
Access Jenkins at `http://localhost:8080`.
Retrieve the initial admin password:
```bash
docker exec -it jenkins-devops-server cat /var/jenkins_home/secrets/initialAdminPassword
```

### Step 2: Configure Jenkins Pipeline
1. Install recommended plugins along with **Docker Pipeline** and **Git**.
2. Click **New Item** > Enter `devops-task2-pipeline` > Select **Pipeline** > Click **OK**.
3. Under the **Pipeline** configuration section:
   - Definition: **Pipeline script from SCM**
   - SCM: **Git**
   - Repository URL: Enter your GitHub repository URL
   - Script Path: `Jenkinsfile`
4. Under **Build Triggers**, select **GitHub hook trigger for GITScm polling** or **Poll SCM** (`H/5 * * * *`).

### Step 3: Run and Test the Pipeline
1. Click **Build Now** in the Jenkins dashboard.
2. Observe stages in the Stage View:
   - `Checkout SCM`
   - `Install Dependencies`
   - `Run Unit & Integration Tests`
   - `Code Quality & Lint`
   - `Build Docker Image`
   - `Deploy Application`
3. Verify the deployed app:
   ```bash
   curl http://localhost:5000/health
   ```
