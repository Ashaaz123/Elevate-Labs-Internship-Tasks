# DevOps Internship - Task 3: Infrastructure as Code (IaC) with Terraform

## 📌 Objective
Provision a local Docker container using Terraform, apply Infrastructure as Code best practices, and capture execution logs.

## 🛠️ Tools Used
- **Terraform** (>= 1.5.0)
- **Docker Engine**
- **kreuzwerker/docker** Terraform Provider (~> 3.0.2)

## 📁 Repository Structure
```
├── main.tf                       # Provider & Docker resource definitions
├── variables.tf                  # Configurable parameters (ports, names)
├── outputs.tf                    # Output values (URL, container ID)
├── terraform.tfvars.example      # Sample custom configuration
├── execution_logs/               # Real execution outputs
│   ├── 01_terraform_init.log
│   ├── 02_terraform_plan.log
│   ├── 03_terraform_apply.log
│   ├── 04_terraform_state_list.log
│   └── 05_terraform_destroy.log
├── .gitignore                    # Prevents state and secrets commit
└── README.md
```

## 🚀 Execution Steps

### 1. Initialize Terraform
Initializes the working directory containing Terraform configuration files and downloads the Docker provider plugin:
```bash
terraform init
```

### 2. Review Execution Plan
Creates an execution plan, letting you preview what resources Terraform will create:
```bash
terraform plan
```

### 3. Apply Infrastructure Changes
Executes the actions proposed in the Terraform plan to pull the Docker image and start the container:
```bash
terraform apply -auto-approve
```

### 4. Verify the Container
Check running container and test HTTP connectivity:
```bash
docker ps | grep elevate-devops
curl http://localhost:8080
```

### 5. Inspect State
Inspect current Terraform state:
```bash
terraform state list
terraform state show docker_container.web_container
```

### 6. Clean Up & Destroy Resources
Gracefully stop the container and tear down provisioned infrastructure:
```bash
terraform destroy -auto-approve
```
