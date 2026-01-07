#!/bin/sh
set -e

echo "Running database migrations..."
node node_modules/prisma/build/index.js migrate deploy

echo "Starting application..."
if [ -f "server.js" ]; then
    exec node server.js
else
    echo "Error: server.js not found!"
    exit 1
fi