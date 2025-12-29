# Deployment Guide - VPS with Docker

This guide will help you deploy your Next.js portfolio to a VPS using Docker and Nginx as a reverse proxy.

## Prerequisites

- VPS with Docker and Docker Compose installed
- Nginx container already running
- Domain name (optional but recommended)
- SSH access to your VPS

## Step 1: Prepare Your Code

### 1.1 Update Environment Variables

Create a `.env.production` file (or set environment variables on your VPS):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 1.2 Commit and Push to Git

```bash
git add .
git commit -m "Add Docker configuration for deployment"
git push origin main
```

## Step 2: Deploy to VPS

### 2.1 Connect to Your VPS

```bash
ssh root@your-vps-ip
```

### 2.2 Clone Your Repository

```bash
cd /opt  # or your preferred directory
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

### 2.3 Create Environment File

```bash
nano .env.production
```

Add your environment variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Save and exit (Ctrl+X, then Y, then Enter)

### 2.4 Build and Run Docker Container

```bash
# Build the image
docker build -t portfolio-app .

# Or use docker-compose
docker-compose up -d --build
```

### 2.5 Verify Container is Running

```bash
docker ps
```

You should see your `portfolio-app` container running on port 3000.

## Step 3: Configure Nginx Reverse Proxy

### 3.1 Option A: If Nginx is in a Container

If your nginx is running in a Docker container, you need to:

1. **Connect nginx container to the same network:**

```bash
# Stop nginx container
docker stop nginx

# Remove nginx container (if needed)
docker rm nginx

# Run nginx with network connection
docker run -d \
  --name nginx \
  --network portfolio-website_portfolio-network \
  -p 80:80 \
  -p 443:443 \
  -v /path/to/nginx.conf:/etc/nginx/nginx.conf:ro \
  nginx:alpine
```

2. **Update nginx configuration:**

Copy the `nginx.conf` file to your nginx container or mount it as a volume.

### 3.2 Option B: If Nginx is on Host

1. **Copy nginx configuration:**

```bash
sudo cp nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
```

2. **Update the configuration:**

Edit `/etc/nginx/sites-available/portfolio` and update:
- `server_name` with your domain
- `upstream portfolio_backend` to point to `localhost:3000` or your container IP

3. **Test and reload nginx:**

```bash
sudo nginx -t
sudo systemctl reload nginx
```

### 3.3 Quick Nginx Setup (If using host nginx)

Create a simple nginx config:

```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Paste this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;  # Replace with your domain or IP

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and test:

```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## Step 4: Verify Deployment

### 4.1 Check Container Logs

```bash
docker logs portfolio-app
# or
docker-compose logs -f portfolio
```

### 4.2 Test the Application

```bash
# Test locally on VPS
curl http://localhost:3000

# Test through nginx
curl http://your-domain.com
# or
curl http://your-vps-ip
```

### 4.3 Check Container Status

```bash
docker ps
```

You should see:
- `portfolio-app` running on port 3000
- `nginx` running on port 80

## Step 5: Set Up SSL (Optional but Recommended)

### 5.1 Install Certbot

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

### 5.2 Get SSL Certificate

```bash
sudo certbot --nginx -d your-domain.com
```

Follow the prompts to complete SSL setup.

## Step 6: Update Deployment Script

Create a deployment script for easy updates:

```bash
nano deploy.sh
```

Add this content:

```bash
#!/bin/bash

echo "🚀 Starting deployment..."

# Pull latest changes
git pull origin main

# Rebuild and restart container
docker-compose down
docker-compose up -d --build

# Show logs
docker-compose logs -f portfolio
```

Make it executable:

```bash
chmod +x deploy.sh
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs portfolio-app

# Check if port 3000 is available
netstat -tulpn | grep 3000

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Nginx can't connect to app

1. **Check if containers are on same network:**
```bash
docker network ls
docker network inspect portfolio-website_portfolio-network
```

2. **Check container IP:**
```bash
docker inspect portfolio-app | grep IPAddress
```

3. **Update nginx upstream** to use container IP or service name

### Environment variables not working

```bash
# Check if variables are set
docker exec portfolio-app env | grep NEXT_PUBLIC

# Rebuild with environment file
docker-compose --env-file .env.production up -d --build
```

### Port conflicts

If port 3000 is already in use:

1. **Change port in docker-compose.yml:**
```yaml
ports:
  - "3001:3000"  # Use 3001 instead
```

2. **Update nginx proxy_pass** to use the new port

## Useful Commands

```bash
# View logs
docker-compose logs -f portfolio

# Restart container
docker-compose restart portfolio

# Stop container
docker-compose down

# Update and redeploy
git pull && docker-compose up -d --build

# Check container resource usage
docker stats portfolio-app
```

## Maintenance

### Regular Updates

1. Pull latest code
2. Rebuild container
3. Restart services

```bash
cd /opt/portfolio-website
git pull
docker-compose up -d --build
```

### Backup

```bash
# Backup environment variables
cp .env.production ~/backup/env-$(date +%Y%m%d).txt

# Backup docker volumes (if any)
docker run --rm -v portfolio-data:/data -v $(pwd):/backup alpine tar czf /backup/backup-$(date +%Y%m%d).tar.gz /data
```

## Security Checklist

- [ ] Use strong passwords for VPS
- [ ] Set up firewall (UFW)
- [ ] Enable SSL/HTTPS
- [ ] Keep Docker and system updated
- [ ] Use environment variables (never commit secrets)
- [ ] Set up automatic security updates
- [ ] Configure fail2ban
- [ ] Regular backups

## Next Steps

1. Set up monitoring (optional)
2. Configure domain DNS
3. Set up CI/CD pipeline (optional)
4. Configure automatic backups
5. Set up log rotation

---

**Your portfolio should now be accessible at:**
- `http://your-vps-ip` (if using nginx on host)
- `http://your-domain.com` (if domain is configured)

