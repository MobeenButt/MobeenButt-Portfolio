#!/bin/bash

# Netlify Deployment Script
echo "🚀 Deploying to Netlify..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the client
echo "🏗️ Building client..."
npm run build:client

# Deploy to Netlify
echo "🌐 Deploying to Netlify..."
if command -v netlify &> /dev/null; then
    netlify deploy --prod
else
    echo "❌ Netlify CLI not found. Please install it first:"
    echo "npm install -g netlify-cli"
    echo "Then run: netlify login && netlify init"
fi

echo "✅ Deployment complete!"