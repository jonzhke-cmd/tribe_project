#!/bin/bash

echo "🚀 Preparing AutoTrip for Cloudflare Pages deployment..."

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "Installing wrangler CLI..."
    npm install -g wrangler
fi

# Build the project
echo "📦 Building Next.js project..."
npm run build

echo "✅ Build complete!"
echo ""
echo "📋 Next steps to deploy to Cloudflare Pages:"
echo ""
echo "1. Go to: https://dash.cloudflare.com/?to=/:account/pages"
echo "2. Click 'Create a project'"
echo "3. Connect your GitHub repository: jonzhke-cmd/tribe_project"
echo "4. Configure build settings:"
echo "   - Build command: npm run build"
echo "   - Build output directory: .next"
echo "   - Node version: 22"
echo "5. Click 'Save and Deploy'"
echo ""
echo "🌐 Your site will be available at: https://autotrip.pages.dev"
echo ""
echo "💡 Tip: You can connect a custom domain in Cloudflare dashboard."