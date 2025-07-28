# Ragnar TTRPG Platform - Main Application

## Branch Overview: jh-main

This branch contains the **main web application** for the Ragnar TTRPG Platform, representing the modern evolution from the legacy HeatPeak Studio system. Built with a sophisticated full-stack architecture, it demonstrates enterprise-level development practices with .NET Core, Angular, and Azure integration.

**Technical Evolution**: This application represents the culmination of the platform's technical evolution, transitioning from the legacy MongoDB-based system to a modern PostgreSQL architecture with advanced cloud integration.

## 🏗️ Architecture Overview

The application follows a **modern full-stack architecture** with clear separation of concerns:

- **.NET Core API Server**: RESTful API with Entity Framework Core and PostgreSQL
- **Angular Client**: Modern SPA with TypeScript, TailwindCSS, and component-based architecture  
- **Azure Integration**: Cloud storage, authentication, and deployment infrastructure
- **PostgreSQL Database**: Robust relational database with comprehensive TTRPG schema
- **Docker Support**: Containerized deployment with multi-stage builds

## 📁 Project Structure

``` sh
jh-main/
├── JuggleHiveWebapp.Server/           # .NET Core API Server
│   ├── Controllers/                   # API controllers for game entities
│   ├── Models/                        # Entity models and database context
│   ├── Services/                      # Business logic and data services
│   ├── Program.cs                     # Application startup and configuration
│   └── appsettings.json              # Server configuration
├── jugglehivewebapp.client/           # Angular Frontend Application
│   ├── src/
│   │   ├── app/                       # Angular components and services
│   │   ├── assets/                    # Static assets and images
│   │   └── styles.css                 # Global styles with TailwindCSS
│   ├── angular.json                   # Angular CLI configuration
│   ├── package.json                   # Node.js dependencies
│   └── tailwind.config.js            # TailwindCSS configuration
├── database/                          # Database schema and sample data
│   ├── ttrpg_postgres.sql            # PostgreSQL schema definition
│   └── sample_data.sql               # Test data for development
├── JuggleHiveWebapp.sln              # Visual Studio solution file
└── Dockerfile                        # Multi-stage Docker build configuration
```

## 🚀 Application Components

### .NET Core API Server (`JuggleHiveWebapp.Server/`)

**Purpose**: Provides RESTful API endpoints for all TTRPG game mechanics and user management.

**Key Features**:

- **Entity Framework Core**: ORM with PostgreSQL integration
- **CORS Configuration**: Secure cross-origin request handling
- **Environment Variables**: Flexible configuration management
- **Azure Integration**: Cloud storage and authentication services
- **RESTful Design**: Clean API endpoints following REST principles

**Architecture Highlights**:

- **Controllers**: Handle HTTP requests and responses
- **Models**: Entity definitions matching database schema
- **Services**: Business logic implementation
- **Dependency Injection**: Loosely coupled architecture

### Angular Client (`jugglehivewebapp.client/`)

**Purpose**: Modern single-page application providing the user interface for the TTRPG platform.

**Technology Stack**:

- **Angular 18**: Latest Angular framework with TypeScript
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **HTTPS Development**: Secure development environment with SSL certificates
- **Component Architecture**: Modular, reusable UI components

**Key Features**:

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **TypeScript**: Type-safe development with enhanced IDE support
- **Angular CLI**: Modern build tools and development server
- **SSL Support**: HTTPS development environment

### Database Layer (`database/`)

**Purpose**: Comprehensive PostgreSQL schema designed for complex TTRPG game mechanics.

**Database Features**:

- **PostgreSQL Schema**: Robust relational database design
- **TTRPG Entities**: Characters, skills, items, classes, regions
- **Sample Data**: Development and testing data sets
- **Referential Integrity**: Foreign key constraints and data validation

**Schema Highlights**:

- Character management with stats and progression
- Skill trees and character abilities
- Item system with inventory management
- Class-based character development
- Region and world-building entities

## 🛠️ Development Setup

### Prerequisites

- **.NET 8 SDK** or higher
- **Node.js 18+** with npm
- **PostgreSQL 14+** database server
- **Visual Studio 2022** or **VS Code** (recommended)
- **Docker** (optional, for containerized deployment)

### Local Development

1. **Clone and navigate to branch**:

```bash
git clone https://github.com/M04ph3u2/Ragnar-TTRPG-Platform.git
cd Ragnar-TTRPG-Platform
git checkout jh-main
```

2. **Database Setup**:

```bash
# Create PostgreSQL database
createdb ragnar_ttrpg

# Run schema creation
psql -d ragnar_ttrpg -f database/ttrpg_postgres.sql

# Load sample data (optional)
psql -d ragnar_ttrpg -f database/sample_data.sql
```

3. **Backend Setup**:

```bash
cd JuggleHiveWebapp.Server
dotnet restore
dotnet run
```

4. **Frontend Setup**:

```bash
cd jugglehivewebapp.client
npm install
npm start
```

5. **Access Application**:

- Frontend: `https://localhost:4200`
- API: `https://localhost:7154`

### Environment Configuration

Create a `.env` file in the server directory:

```bash
DOMAIN=localhost
DATABASE_URL=postgresql://username:password@localhost/ragnar_ttrpg
AZURE_STORAGE_CONNECTION_STRING=your_azure_connection_string
```

## 🔧 Technical Features

### Advanced Architecture Patterns

**Server-Side**:

- **Repository Pattern**: Data access abstraction
- **Dependency Injection**: Loosely coupled components
- **Entity Framework Core**: Code-first database approach
- **Configuration Management**: Environment-based settings

**Client-Side**:

- **Component-Based Architecture**: Reusable UI components
- **Service Architecture**: Centralized business logic
- **Reactive Programming**: RxJS for asynchronous operations
- **Responsive Design**: Mobile-first CSS framework

### Azure Cloud Integration

**Storage Services**:

- **Azure Blob Storage**: File and image management
- **Azure SQL Database**: Production database hosting
- **Azure App Service**: Web application hosting

**Security Features**:

- **Environment Variables**: Secure configuration management
- **CORS Policies**: Cross-origin security
- **HTTPS Enforcement**: Secure communication protocols

### Performance Optimizations

**Frontend**:

- **Lazy Loading**: Efficient module loading
- **Tree Shaking**: Minimal bundle sizes
- **AOT Compilation**: Ahead-of-time compilation for performance

**Backend**:

- **Entity Framework Optimization**: Efficient database queries
- **Async/Await Patterns**: Non-blocking operations
- **Connection Pooling**: Database connection optimization

## 🐳 Docker Deployment

### Multi-Stage Build

The included `Dockerfile` provides optimized production builds:

```bash
# Build and run with Docker
docker build -t ragnar-ttrpg-platform .
docker run -p 80:8080 ragnar-ttrpg-platform
```

**Docker Features**:

- **Multi-stage build**: Separate build and runtime environments
- **Optimized layers**: Minimal production image size
- **Security**: Non-root user execution
- **Environment flexibility**: Runtime configuration

## 📊 Game Mechanics Implementation

### Character Management System

**Features**:

- **Character Creation**: Race, class, and stat selection
- **Progression System**: Level-based character advancement
- **Skill Trees**: Complex ability progression
- **Inventory Management**: Item collection and equipment

### Database Design

**Core Entities**:

- **Characters**: Player character data and progression
- **Skills**: Ability system with prerequisites and effects
- **Items**: Equipment, consumables, and treasure
- **Classes**: Character archetypes with unique abilities
- **Regions**: World locations and environmental factors

## 🔒 Security Implementation

### Application Security

- **Input Validation**: Server-side data validation
- **SQL Injection Protection**: Parameterized queries via EF Core
- **CORS Configuration**: Controlled cross-origin access
- **Environment Variables**: Secure secret management

### Deployment Security

- **HTTPS Enforcement**: SSL/TLS encryption
- **Docker Security**: Non-root container execution
- **Azure Security**: Cloud-native security features

## 📝 License

This project is licensed under the Attribution-NonCommercial-NoDerivatives 4.0 International License. See the [LICENSE.md](LICENSE.md) file for details.

## 👥 Development Team

**Ragnar TTRPG Platform Development Team**:

- **Davide Gritta**: [GitHub Profile](https://github.com/GrittaGit) - Backend Developer & Database Designer
- **Gianluca Rossetti**: [GitHub Profile](https://github.com/Ross9519) - Full-Stack Developer  
- **Stefano Sciacovelli**: [GitHub Profile](https://github.com/M04ph3u2) - DevOps Infrastructure & Automation

---

*This branch represents the main application component of the Ragnar TTRPG Platform, demonstrating modern full-stack development with .NET Core, Angular, and Azure cloud integration. It showcases the evolution from legacy systems to enterprise-grade architecture.*
