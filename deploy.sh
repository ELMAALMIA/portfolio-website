#!/bin/bash

# Deployment script for portfolio
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env.production exists
if [ ! -f .env.production ]; then
    echo -e "${YELLOW}⚠️  Warning: .env.production not found${NC}"
    echo "Creating from env.example..."
    cp env.example .env.production
    echo -e "${YELLOW}Please update .env.production with your actual values (including EmailJS keys for contact form)${NC}"
fi

# Load .env.production so NEXT_PUBLIC_* are available as build args (Next.js inlines them at build time)
if [ -f .env.production ]; then
    echo -e "${GREEN}📄 Loading .env.production for build...${NC}"
    set -a
    . ./.env.production
    set +a
fi

# Pull latest changes
echo -e "${GREEN}📥 Pulling latest changes...${NC}"
git pull origin main || echo "Not a git repository or no remote configured"

# Stop existing containers
echo -e "${GREEN}🛑 Stopping existing containers...${NC}"
docker-compose down

# Build and start containers
echo -e "${GREEN}🔨 Building and starting containers...${NC}"
docker-compose up -d --build

# Wait for container to be healthy
echo -e "${GREEN}⏳ Waiting for application to start...${NC}"
sleep 5

# Check container status
if docker ps | grep -q portfolio-app; then
    echo -e "${GREEN}✅ Container is running!${NC}"
    echo -e "${GREEN}📊 Container status:${NC}"
    docker ps | grep portfolio-app
else
    echo -e "${RED}❌ Container failed to start${NC}"
    echo -e "${YELLOW}📋 Checking logs...${NC}"
    docker-compose logs portfolio
    exit 1
fi
# Show logs
echo -e "${GREEN}📋 Recent logs:${NC}"
docker-compose logs --tail=20 portfolio

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${YELLOW}💡 To view logs: docker-compose logs -f portfolio${NC}"
echo -e "${YELLOW}💡 To check status: docker ps${NC}"


