# Ragnar TTRPG Platform - Cloud Infrastructure

## Branch Overview: jh-cloud

This branch contains the **cloud infrastructure** for the Ragnar TTRPG Platform, designed and implemented by **Stefano Sciacovelli** ([GitHub Profile](https://github.com/M04ph3u2)). It provides a scalable, secure, and automated solution for online storage and collaboration using Nextcloud, Nginx, and Certbot.

## 🏗️ Cloud Architecture Overview

The cloud infrastructure follows a modular architecture with the following components:

- **Nginx**: SSL termination, reverse proxy, and HTTP/HTTPS redirection
- **Certbot**: Automated Let's Encrypt certificate generation and renewal
- **Nextcloud**: Cloud storage, file synchronization, and user management

## 📁 Project Structure

```sh
docker-compose.yml         # Main configuration for all services
web/
  nginx.conf               # Nginx configuration for reverse proxy and SSL
```

## 🚀 Service Architecture

### Service Status Overview

- ✅ **Nginx** - **ACTIVE**: SSL termination & reverse proxy
- ✅ **Certbot** - **ACTIVE**: Automated SSL certificate management
- ✅ **Nextcloud** - **ACTIVE**: Cloud storage & collaboration

### 1. Nginx (Reverse Proxy & SSL)

**Purpose**: Manages HTTP/HTTPS traffic, terminates SSL connections, redirects HTTP to HTTPS, and handles ACME challenges for Certbot.

### 2. Certbot (SSL Automation)

**Purpose**: Automatically generates and renews SSL certificates using Let's Encrypt, integrates with Nginx for domain verification.

### 3. Nextcloud (Cloud Storage)

**Purpose**: Provides file storage, synchronization, user and permission management, and supports external databases (MySQL/MariaDB) for advanced performance and security.

#### Supported Environment Variables

- `DOMAIN`: Main domain (e.g., example.com)
- `CERTBOT_EMAIL`: Email for Let's Encrypt registration
- `MYSQL_HOST`: External database host
- `MYSQL_DATABASE`: Database name
- `MYSQL_USER`: Database user
- `MYSQL_PASSWORD`: Database password
- `NEXTCLOUD_ADMIN_USER`: Nextcloud admin user
- `NEXTCLOUD_ADMIN_PASSWORD`: Nextcloud admin password

## 🗄️ Data Persistence

- `../data/nextcloud`: Nextcloud user and application data
- `../data/certbot`: SSL certificates and Certbot configuration

## 🔒 Security

- 4096-bit SSL certificates
- Resource limits on all containers
- External database to reduce attack surface
- Regular updates recommended for images

## 🛠️ Maintenance

- Auto-renewed SSL certificates
- Regular backups of the `../data` directory recommended
- Monitor container logs for security events
- Periodic image updates for security patches

## 📋 Monitoring and Troubleshooting

### Key Metrics

- **SSL Certificate Status**: Check certificate validity and renewal logs
- **Nextcloud Health**: Monitor user access and file sync status
- **Resource Usage**: Track container CPU/memory usage

### Common Issues and Solutions

#### 1. SSL Certificate Issues

```bash
# Check certificate status
ls -la ../data/certbot/conf/live/

# Force certificate renewal
docker-compose run certbot renew
```

#### 2. Database Connection Issues

```bash
# Test database connectivity
nc -zv $MYSQL_HOST 3306

# Check database credentials
env | grep MYSQL
```

#### 3. Nextcloud Backup Verification

```bash
# Check backup files
ls -la ../data/nextcloud/

# Verify backup integrity
unzip -t ../data/nextcloud/nextcloud-$(date +%Y-%m-%d).zip
```

## 📝 License

This project is licensed under the Attribution-NonCommercial-NoDerivatives 4.0 International License. See the [LICENSE.md](LICENSE.md) file for details.

## 👥 Development Team

**Ragnar TTRPG Platform Development Team**:

- **Davide Gritta**: [GitHub Profile](https://github.com/GrittaGit) - Platform Architecture
- **Gianluca Rossetti**: [GitHub Profile](https://github.com/Ross9519) - Backend Integration
- **Stefano Sciacovelli**: [GitHub Profile](https://github.com/M04ph3u2) - DevOps Infrastructure & Automation

---

*This branch represents the cloud infrastructure component of the Ragnar TTRPG Platform, implemented by Stefano Sciacovelli, demonstrating modern cloud architecture, automated SSL management, and secure online collaboration.*
