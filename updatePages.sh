#!/bin/bash

# Script to build and deploy to GitHub Pages
# This script is now primarily for local development use
# The GitHub Actions workflow handles automated deployment

set -e  # Exit on any error

echo "Building Next.js project..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm ci
fi

# Build the project
echo "Running build..."
npm run build

# Add .nojekyll to prevent Jekyll processing
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Copy CNAME file for custom domain
if [ -f "CNAME" ]; then
    echo "Copying CNAME file..."
    cp CNAME out/
fi

echo "Build completed successfully!"
echo "Output directory: ./out"

# If running locally and wanting to deploy manually
if [ "$1" = "--deploy" ]; then
    echo "Deploying to GitHub Pages..."
    npm run deploy
fi

echo "Done!"