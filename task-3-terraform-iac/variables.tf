variable "container_name" {
  type        = string
  description = "The unique name of the Docker container to provision"
  default     = "elevate-devops-nginx-container"
}

variable "docker_image_name" {
  type        = string
  description = "The Docker image name and tag to pull from Docker Hub"
  default     = "nginx:alpine"
}

variable "external_port" {
  type        = number
  description = "The external host port exposed to traffic"
  default     = 8080
}

variable "internal_port" {
  type        = number
  description = "The internal port exposed by the container"
  default     = 80
}
