#!/bin/sh
set -e

echo "Running database migrations..."
node_modules/.bin/prisma migrate deploy

echo "Starting application..."
if [ -f "standalone-server.js" ]; then
    exec node standalone-server.js
else
    exec node server.js
fi