output "container_id" {
  description = "The Docker ID of the provisioned container"
  value       = docker_container.web_container.id
}

output "container_name" {
  description = "The name of the provisioned container"
  value       = docker_container.web_container.name
}

output "application_url" {
  description = "URL to access the provisioned service locally"
  value       = "http://localhost:${var.external_port}"
}

output "container_ip_address" {
  description = "The internal IP address allocated to the container"
  value       = docker_container.web_container.network_data[0].ip_address
}
