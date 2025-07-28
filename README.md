# Ragnar TTRPG Platform - Unified Repository

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Multi-Technology](https://img.shields.io/badge/Stack-Multi--Technology-blueviolet.svg)]()
[![Portfolio Project](https://img.shields.io/badge/Type-Portfolio%20Project-green.svg)]()

## Overview

This unified repository contains the complete evolution of the **Ragnar TTRPG Platform**, from its initial HeatPeak Studio implementation through its transition phases to the modern JuggleHive cloud-native architecture. Each branch represents a distinct phase in the platform's technological and architectural evolution.

### Repository Purpose

This unified structure serves multiple purposes:

- **Portfolio Demonstration**: Showcasing architectural evolution and technology mastery
- **Historical Preservation**: Maintaining complete development history across all phases  
- **Educational Resource**: Demonstrating migration patterns and architectural decisions
- **Development Reference**: Providing working examples of different technology stacks

## Branch Structure

### `hp-main` - Legacy HeatPeak Studio Implementation

**Technology Stack**: MERN (MongoDB, Express.js, React, Node.js)

The original implementation showcasing:
- Document-based data modeling with MongoDB and Mongoose ODM
- React frontend with component-level state management
- Node.js/Express backend with middleware architecture
- AI-generated reference images system for TTRPG content
- Session-based authentication and basic security patterns

### `jh-main` - Modern JuggleHive Implementation

**Technology Stack**: Angular 18 + .NET Core + PostgreSQL + Azure

The current production-ready implementation featuring:
- Enterprise Angular application with NgRx state management
- .NET Core Web API with Entity Framework and PostgreSQL
- Azure AD B2C authentication and Azure cloud integration
- Comprehensive character creation and campaign management
- Modern DevOps practices with automated deployment

### `hp-jh-transition` - Technology Transition Phase

**Technology Stack**: Angular 17 + Spring Boot + PostgreSQL

The intermediate implementation demonstrating:
- Migration from MERN stack to enterprise technologies
- Spring Boot backend with JPA/Hibernate ORM
- Angular frontend with TypeScript and reactive patterns
- Database evolution from document-based to relational
- SPA routing integration and development workflow improvements

### `jh-devops` - DevOps Infrastructure

**Technology Stack**: GitHub Actions + Docker + Azure VM + SSL Automation

DevOps implementation including:
- Multi-repository deployment pipelines with GitHub Actions
- Docker containerization and Azure Container Registry integration
- Automated SSL certificate management with Let's Encrypt
- Azure VM provisioning and management scripts
- Backup automation and infrastructure monitoring

### `jh-cloud` - Cloud Services Infrastructure

**Technology Stack**: Docker Compose + Nextcloud + Nginx + External Database

Cloud infrastructure featuring:
- Nextcloud deployment with external MySQL database integration
- Nginx reverse proxy with SSL termination
- Docker Compose orchestration with resource limits
- External storage integration and backup strategies
- Production-ready configuration for cloud deployment

## Working with Branches

To switch between different projects and implementations:

```bash
# Work on Legacy HeatPeak Studio Implementation
git checkout hp-main

# Work on Modern JuggleHive Implementation  
git checkout jh-main

# Work on Technology Transition Phase
git checkout hp-jh-transition

# Work on DevOps Infrastructure
git checkout jh-devops

# Work on Cloud Services Configuration
git checkout jh-cloud
```

## Project Evolution History

This unified repository was created by consolidating several separate repositories to demonstrate the complete architectural evolution:

- **`hp-main`**: From original HeatPeak Studio MERN stack repository
- **`jh-main`**: From JuggleHive modern implementation repository  
- **`hp-jh-transition`**: From technology transition experimental repository
- **`jh-devops`**: From DevOps infrastructure management repository
- **`jh-cloud`**: From cloud services configuration repository

### Timeline of Evolution

1. **HeatPeak Studio Phase** (hp-main): Initial MERN stack implementation with MongoDB
2. **Transition Experimentation** (hp-jh-transition): Spring Boot + Angular exploration
3. **Modern Implementation** (jh-main): .NET Core + Angular with Azure integration
4. **Infrastructure Development** (jh-devops): DevOps automation and CI/CD pipelines
5. **Cloud Services** (jh-cloud): Production cloud infrastructure and external integrations

## Architecture Comparison

| Aspect | Legacy (hp-main) | Transition (hp-jh-transition) | Modern (jh-main) |
|--------|------------------|------------------------------|------------------|
| **Frontend** | React 18 + Vite | Angular 17 + CLI | Angular 18 + NgRx |
| **Backend** | Node.js + Express | Spring Boot + Maven | .NET Core + EF |
| **Database** | MongoDB + Mongoose | PostgreSQL + JPA | PostgreSQL + Azure |
| **Authentication** | Session-based | Spring Security | Azure AD B2C |
| **Deployment** | Local/Simple hosting | Container-ready | Azure cloud-native |
| **State Management** | Component state | @ngrx/store | NgRx with effects |

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

### Commercial Use

For commercial licensing inquiries, please contact the development team.

## Related Documentation

Each branch contains comprehensive documentation:

- **hp-main/README.md**: Legacy MERN implementation details and AI image system
- **jh-main/README.md**: Modern Angular/.NET Core architecture and Azure integration
- **hp-jh-transition/README.md**: Spring Boot transition phase and migration insights
- **jh-devops/README.md**: DevOps infrastructure, CI/CD pipelines, and automation
- **jh-cloud/README.md**: Cloud services, Nextcloud deployment, and external integrations

---

*This unified repository demonstrates the complete evolution of the Ragnar TTRPG Platform, showcasing different architectural approaches, technology stacks, and implementation strategies across multiple development phases.*
