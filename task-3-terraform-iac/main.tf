terraform {
  required_version = ">= 1.5.0"
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.2"
    }
  }
}

provider "docker" {
  # Connects to default local Docker daemon socket
  # On Linux/macOS: unix:///var/run/docker.sock
  # On Windows: npipe:////./pipe/docker_engine
}

# Pull Docker Image
resource "docker_image" "web_image" {
  name         = var.docker_image_name
  keep_locally = false
}

# Provision Container from Docker Image
resource "docker_container" "web_container" {
  name  = var.container_name
  image = docker_image.web_image.image_id

  ports {
    internal = var.internal_port
    external = var.external_port
  }

  restart = "unless-stopped"

  env = [
    "ENVIRONMENT=production",
    "MANAGED_BY=terraform",
    "PROJECT=elevate-labs-devops-internship"
  ]

  labels {
    label = "tier"
    value = "frontend"
  }
  labels {
    label = "maintainer"
    value = "devops-intern"
  }
}
