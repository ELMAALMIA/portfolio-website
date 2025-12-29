# Quick Deployment Guide - VPS

## On Your Local Machine

### 1. Commit and Push Changes

```bash
git add .
git commit -m "Add Docker configuration and UI improvements"
git push origin main
```

## On Your VPS

### 2. Connect to VPS

```bash
ssh root@your-vps-ip
```

### 3. Navigate to Deployment Directory

```bash
cd /opt  # or wherever you want to deploy
```

### 4. Clone Repository (First Time) or Pull Updates

**First time:**
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

**Updates:**
```bash
cd portfolio-website
git pull origin main
```

### 5. Create Environment File

```bash
nano .env.production
```

Add your EmailJS credentials:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Save: `Ctrl+X`, then `Y`, then `Enter`

### 6. Build and Start Container

```bash
# Make deploy script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh

# OR manually:
docker-compose up -d --build
```

### 7. Configure Nginx (If using host nginx)

```bash
# Create nginx config
sudo nano /etc/nginx/sites-available/portfolio
```

Paste this (replace `your-domain.com` with your domain or remove the line):

```nginx
server {
    listen 80;
    server_name your-domain.com;

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

Enable and reload:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 8. Verify Deployment

```bash
# Check container status
docker ps

# Check logs
docker-compose logs -f portfolio

# Test locally
curl http://localhost:3000

# Test through nginx
curl http://your-vps-ip
```

## Quick Commands Reference

```bash
# View logs
docker-compose logs -f portfolio

# Restart container
docker-compose restart portfolio

# Stop container
docker-compose down

# Update and redeploy
git pull && docker-compose up -d --build

# Check container status
docker ps

# Check container resource usage
docker stats portfolio-app
```

## Troubleshooting

### Container won't start
```bash
docker logs portfolio-app
docker-compose logs portfolio
```

### Port 3000 already in use
Edit `docker-compose.yml` and change port mapping:
```yaml
ports:
  - "3001:3000"  # Use different host port
```

### Nginx can't connect
Make sure nginx proxy_pass points to `http://localhost:3000` (if nginx on host) or container IP.

## Your Portfolio URL

- **Direct:** `http://your-vps-ip:3000`
- **Through Nginx:** `http://your-vps-ip` or `http://your-domain.com`

