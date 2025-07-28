# Ragnar TTRPG Platform - Unified Repository

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Multi-Technology](https://img.shields.io/badge/Stack-Multi--Technology-blueviolet.svg)]()
[![Portfolio Project](https://img.shields.io/badge/Type-Portfolio%20Project-green.svg)]()

## Overview

This unified repository contains the complete evolution of the **Ragnar TTRPG Platform**, an ambitious project originally conceived to revolutionize tabletop role-playing games through innovative digital tools. The platform was designed to enhance both online and in-person gaming experiences with a hybrid system that would surpass existing market solutions.

After extensive development efforts across multiple technological iterations, the team recognized that the project's scope exceeded available time and financial resources. Rather than abandon years of architectural innovation, the codebase has been preserved and documented as a comprehensive portfolio demonstration, showcasing the complete evolution from initial concept to enterprise-grade cloud architecture.

### Repository Purpose

This unified structure now serves multiple purposes:

- **Portfolio Demonstration**: Showcasing the complete architectural journey and technical expertise developed during the project's evolution
- **Historical Preservation**: Maintaining the complete development history across all technological phases and architectural decisions
- **Educational Resource**: Demonstrating real-world migration patterns, architectural decisions, and lessons learned from ambitious project development
- **Development Reference**: Providing working examples of different technology stacks and their practical implementation challenges

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

This unified repository was created by consolidating several separate repositories to preserve the complete architectural evolution of an ambitious TTRPG platform project:

- **`hp-main`**: Original HeatPeak Studio MERN stack implementation by Stefano Sciacovelli
- **`jh-main`**: JuggleHive modern implementation with collaborative development (Stefano Sciacovelli, Davide Gritta, Gianluca Rossetti)
- **`hp-jh-transition`**: Technology transition experimental phase by Stefano Sciacovelli
- **`jh-devops`**: DevOps infrastructure management by Stefano Sciacovelli
- **`jh-cloud`**: Cloud services configuration by Stefano Sciacovelli

### Development Team

- **Stefano Sciacovelli**: Lead developer and architect across all phases, solo contributor to most branches
- **Davide Gritta**: Collaborative development on jh-main branch (Backend Developer & Database Designer)
- **Gianluca Rossetti**: Collaborative development on jh-main branch (Full-Stack Developer)

### Timeline of Evolution

1. **Initial Vision** (hp-main): MERN stack implementation attempting to create revolutionary TTRPG digital tools
2. **Technology Exploration** (hp-jh-transition): Spring Boot + Angular experimentation seeking better scalability
3. **Enterprise Implementation** (jh-main): .NET Core + Angular with team collaboration, pushing toward production-ready solution
4. **Infrastructure Development** (jh-devops): DevOps automation attempting to enable scalable deployment
5. **Cloud Integration** (jh-cloud): Production cloud infrastructure for enterprise-grade hosting

### Project Transformation

Originally conceived as a commercial venture to revolutionize tabletop gaming through innovative digital tools, the project evolved through multiple technological iterations as the team sought the optimal architecture for their ambitious vision. After recognizing that the project's scope exceeded available resources, the comprehensive codebase has been preserved as a portfolio demonstration of architectural evolution and technical expertise.

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

*This unified repository demonstrates the complete evolution of the Ragnar TTRPG Platform, showcasing the architectural journey from ambitious commercial project to comprehensive portfolio demonstration of technical expertise and innovation.*
