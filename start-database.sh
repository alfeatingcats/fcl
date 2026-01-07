#!/usr/bin/env bash
# Start a local development PostgreSQL database using Podman or Docker

set -a
source .env

# Parse DB info from DATABASE_URL
DB_PASSWORD=$(echo "$DATABASE_URL" | awk -F':' '{print $3}' | awk -F'@' '{print $1}')
DB_PORT=$(echo "$DATABASE_URL" | awk -F':' '{print $4}' | awk -F'/' '{print $1}')
DB_NAME=$(echo "$DATABASE_URL" | awk -F'/' '{print $4}')
DB_CONTAINER_NAME="$DB_NAME-postgres"

# Check if docker or podman exists
if ! command -v docker >/dev/null 2>&1 && ! command -v podman >/dev/null 2>&1; then
  echo "Docker or Podman is not installed. Install one and try again."
  exit 1
fi

# Select command
if command -v docker >/dev/null 2>&1; then
  DOCKER_CMD="docker"
elif command -v podman >/dev/null 2>&1; then
  DOCKER_CMD="podman"
fi

# Check port availability
if command -v nc >/dev/null 2>&1; then
  if nc -z localhost "$DB_PORT" 2>/dev/null; then
    echo "Port $DB_PORT is already in use."
    exit 1
  fi
else
  echo "Warning: netcat not installed, can't check port."
  read -p "Continue anyway? [y/N]: " REPLY
  if ! [[ $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
fi

# Start existing running container
if [ "$($DOCKER_CMD ps -q -f name=$DB_CONTAINER_NAME)" ]; then
  echo "Database container '$DB_CONTAINER_NAME' already running"
  exit 0
fi

# Start stopped container if exists
if [ "$($DOCKER_CMD ps -q -a -f name=$DB_CONTAINER_NAME)" ]; then
  $DOCKER_CMD start "$DB_CONTAINER_NAME"
  echo "Existing database container '$DB_CONTAINER_NAME' started"
  exit 0
fi

# Handle default password
if [ "$DB_PASSWORD" = "password" ]; then
  echo "Default database password detected."
  read -p "Generate a random password? [y/N]: " REPLY
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    DB_PASSWORD=$(openssl rand -base64 12 | tr '+/' '-_')
    sed -i "s#:password@#:$DB_PASSWORD@#" .env
    echo "Password updated in .env"
  else
    echo "Please set a secure password in .env and rerun."
    exit 1
  fi
fi

# Run the container
$DOCKER_CMD run -d \
  --name $DB_CONTAINER_NAME \
  -e POSTGRES_USER="postgres" \
  -e POSTGRES_PASSWORD="$DB_PASSWORD" \
  -e POSTGRES_DB="$DB_NAME" \
  -p "$DB_PORT":5432 \
  docker.io/postgres \
  && echo "Database container '$DB_CONTAINER_NAME' created successfully."
