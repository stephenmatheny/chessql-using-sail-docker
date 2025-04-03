#!/bin/bash

# Navigate to the project directory (update this path if needed)
PROJECT_DIR="./"
cd "$PROJECT_DIR" || { echo "Failed to navigate to project directory"; exit 1; }

# Function to stop running processes if they exist
stop_process() {
    PROCESS_NAME=$1
    PID=$(pgrep -f "$PROCESS_NAME")
    if [ -n "$PID" ]; then
        echo "Stopping $PROCESS_NAME..."
        kill -9 "$PID"
        echo "$PROCESS_NAME stopped"
    fi
}

# Stop existing services if they are running
stop_process "php artisan serve"
stop_process "npm run dev"
stop_process "npm run storybook"

# Start Laravel Sail in detached mode
./vendor/bin/sail up -d

# Ensure log directory exists
mkdir -p storage/logs

# Start the frontend development server and log output
nohup npm run dev > storage/logs/npm-dev.log 2>&1 &
echo "Started npm dev server"

# Start the Laravel development server and log output
nohup php artisan serve > storage/logs/laravel-server.log 2>&1 &
echo "Started Laravel server: localhost"

# Start Storybook
nohup npm run storybook > storybook.log 2>&1 &
echo "Started Storybook server: 6006"

# Display running processes
ps aux | grep -E "npm|artisan" | grep -v grep