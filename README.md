# Ragnar TTRPG Platform - Cloud Infrastructure

## Branch Overview: jh-cloud

This branch contains the **cloud infrastructure** for the Ragnar TTRPG Platform, originally designed to support file sharing, asset management, and collaborative features for an innovative digital tabletop role-playing game platform. The infrastructure was built to provide scalable, secure cloud storage and collaboration capabilities that would enhance both online and in-person gaming experiences through integrated digital tools.

**Project Context**: This cloud infrastructure was developed as part of the broader vision to create a comprehensive TTRPG platform that would revolutionize how players interact with game content, share campaign materials, and collaborate on character development. When the ambitious scope of the complete commercial platform proved challenging within available resources, this cloud infrastructure was preserved to demonstrate enterprise-level cloud architecture and containerized deployment practices.

**Implementation**: Designed and implemented solely by **Stefano Sciacovelli** ([GitHub Profile](https://github.com/M04ph3u2)), this infrastructure showcases advanced Docker orchestration, automated SSL management, and production-ready cloud services integration using Nextcloud, Nginx, and Certbot.

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

**Configuration**: Located in `web/nginx.conf`

- HTTP to HTTPS redirection (port 80 → 443)
- SSL termination with Let's Encrypt certificates
- Reverse proxy to Nextcloud container
- ACME challenge handling for certificate validation
- Security headers implementation
- Rate limiting and DDoS protection
- Static file serving optimization

**Key Features**:

- Automatic HTTP/HTTPS redirection
- SSL certificate validation
- Load balancing capabilities
- Security headers (HSTS, CSP, etc.)
- Access logging and monitoring
- Custom error pages

### 2. Certbot (SSL Automation)

**Purpose**: Automatically generates and renews SSL certificates using Let's Encrypt, integrates with Nginx for domain verification.

**Automation Features**:

- Automatic certificate generation on first run
- Scheduled certificate renewal (90-day cycle)
- Domain validation via HTTP-01 challenge
- Nginx configuration integration
- Certificate backup and restoration
- Multi-domain support (SAN certificates)

**Certificate Management**:

- RSA 4096-bit key generation
- Automatic certificate deployment
- Renewal notifications and logging
- Backup verification procedures
- Emergency certificate recovery

### 3. Nextcloud (Cloud Storage)

**Purpose**: Provides file storage, synchronization, user and permission management, and supports external databases (MySQL/MariaDB) for advanced performance and security.

**Core Features**:

- File storage and synchronization
- User management and authentication
- Group-based permissions system
- External storage integration
- App ecosystem support
- Mobile and desktop client sync
- WebDAV/CalDAV/CardDAV protocols

**Enterprise Features**:

- External database support (MySQL/PostgreSQL)
- LDAP/Active Directory integration
- Advanced security policies
- Audit logging and compliance
- Backup and restoration tools
- High availability clustering

## 🛠️ Deployment Guide

### Prerequisites

Before deploying the cloud infrastructure, ensure you have:

- **Docker Engine** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)
- **Domain Name** with DNS pointing to your server
- **SSL Certificate Email** for Let's Encrypt registration
- **External Database** (MySQL/MariaDB recommended)
- **Minimum System Requirements**:
  - 2 CPU cores
  - 4GB RAM
  - 50GB storage space
  - Open ports: 80 (HTTP), 443 (HTTPS)

### Environment Setup

1. **Clone the repository and navigate to the cloud branch**:

```bash
git clone https://github.com/M04ph3u2/Ragnar-TTRPG-Platform.git
cd Ragnar-TTRPG-Platform
git checkout jh-cloud
```

2. **Create environment configuration**:

```bash
# Create .env file with your configuration
cat > .env << EOF
DOMAIN=your-domain.com
CERTBOT_EMAIL=admin@your-domain.com
MYSQL_HOST=your-database-host
MYSQL_DATABASE=nextcloud
MYSQL_USER=nextcloud_user
MYSQL_PASSWORD=secure_password
NEXTCLOUD_ADMIN_USER=admin
NEXTCLOUD_ADMIN_PASSWORD=secure_admin_password
EOF
```

3. **Prepare data directories**:

```bash
mkdir -p ../data/{nextcloud,certbot}
chmod 755 ../data/{nextcloud,certbot}
```

### Initial Deployment

1. **Start the services**:

```bash
docker-compose up -d
```

2. **Verify SSL certificate generation**:

```bash
# Wait for certificate generation (may take 2-3 minutes)
docker-compose logs certbot

# Check certificate files
ls -la ../data/certbot/conf/live/your-domain.com/
```

3. **Access Nextcloud setup**:

```bash
# Open your browser and navigate to:
https://your-domain.com

# Complete the Nextcloud setup wizard
# Use the database credentials from your .env file
```

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

### SSL/TLS Configuration

- **4096-bit RSA certificates** from Let's Encrypt
- **TLS 1.2+ enforcement** with secure cipher suites
- **HSTS (HTTP Strict Transport Security)** enabled
- **Certificate transparency** logging
- **Perfect Forward Secrecy** support
- **OCSP Stapling** for certificate validation

### Container Security

- **Resource limits** on all containers to prevent DoS
- **Non-root user execution** within containers
- **Read-only filesystems** where applicable
- **Network isolation** between services
- **Security scanning** of base images
- **Regular image updates** for security patches

### Application Security

- **External database** to reduce attack surface
- **Encrypted database connections** (SSL/TLS)
- **Strong password policies** enforcement
- **Two-factor authentication** support
- **Brute force protection** mechanisms
- **File access controls** and permissions

### Network Security

- **Firewall rules** for port restriction
- **Rate limiting** to prevent abuse
- **DDoS protection** mechanisms
- **Security headers** implementation
- **Access logging** for audit trails
- **Intrusion detection** capabilities

### Data Protection

- **Encryption at rest** for sensitive data
- **Encryption in transit** for all communications
- **Backup encryption** with secure keys
- **Data retention policies** implementation
- **Audit logging** for compliance

## 📝 License

This project is licensed under the Attribution-NonCommercial-NoDerivatives 4.0 International License. See the [LICENSE.md](LICENSE.md) file for details.

## 👥 Development Team

**Ragnar TTRPG Platform Development Team**:

- **Davide Gritta**: [GitHub Profile](https://github.com/GrittaGit) - Backend Developer & Database Designer
- **Gianluca Rossetti**: [GitHub Profile](https://github.com/Ross9519) - Full-Stack Developer
- **Stefano Sciacovelli**: [GitHub Profile](https://github.com/M04ph3u2) - DevOps Infrastructure & Automation

---

*This branch represents the cloud infrastructure component of the Ragnar TTRPG Platform, implemented by Stefano Sciacovelli, demonstrating modern cloud architecture, automated SSL management, and secure online collaboration.*
