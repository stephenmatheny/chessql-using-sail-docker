#!/bin/bash

# Navigate to the project directory (update this path if needed)
PROJECT_DIR="./"
cd "$PROJECT_DIR" || { echo "Failed to navigate to project directory"; exit 1; }

# Start Laravel Sail in detached mode
./vendor/bin/sail up -d

# Ensure log directory exists
mkdir -p storage/logs

# Start the frontend development server and log output
nohup npm run dev > storage/logs/npm-dev.log 2>&1 &
echo "Started npm dev server"

# Start the Laravel development server and log output
nohup php artisan serve > storage/logs/laravel-server.log 2>&1 &
echo "Started Laravel server"

# Display running processes
ps aux | grep -E "npm|artisan" | grep -v grep