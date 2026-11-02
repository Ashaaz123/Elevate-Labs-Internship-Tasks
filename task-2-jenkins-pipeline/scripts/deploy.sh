#!/bin/bash
set -e

APP_NAME="elevate-jenkins-app"
PORT="5000"
IMAGE_TAG="${1:-latest}"

echo "Starting automated deployment of ${APP_NAME}:${IMAGE_TAG}..."

# Remove previous running instance
if [ "$(docker ps -aq -f name=${APP_NAME}-staging)" ]; then
    echo "Stopping existing container..."
    docker stop ${APP_NAME}-staging
    docker rm ${APP_NAME}-staging
fi

# Run new container
echo "Running new Docker container on port ${PORT}..."
docker run -d \
  --name ${APP_NAME}-staging \
  -p ${PORT}:3000 \
  --restart unless-stopped \
  elevate-labs/${APP_NAME}:${IMAGE_TAG}

echo "Deployment complete! Application available at http://localhost:${PORT}"
