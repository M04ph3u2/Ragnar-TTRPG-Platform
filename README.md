# Ragnar TTRPG Platform - Legacy Implementation (hp-main)

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green.svg)](https://www.mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.x-black.svg)](https://expressjs.com/)

## Overview

This repository represents the **legacy implementation** of the Ragnar TTRPG Platform, developed by **HeatPeak Studio** before the platform's evolution to the modern JuggleHive architecture. This version showcases the foundational work that led to the sophisticated cloud-native implementation available in the `jh-main` branch.

### Legacy Architecture Context

The `hp-main` branch demonstrates a traditional **MERN stack** approach (MongoDB, Express.js, React, Node.js) with document-based data modeling, representing the initial phase of the platform's development when it focused on core TTRPG functionality without cloud integration.

## Technology Stack

### Backend (Node.js/Express)

- **Runtime**: Node.js 20.x with ES6+ features
- **Framework**: Express.js 4.x with middleware architecture
- **Database**: MongoDB 6.x with Mongoose ODM
- **Security**: Helmet.js for security headers, CORS configuration
- **HTTP Client**: Native fetch API and Axios for external requests

### Frontend (React)

- **Framework**: React 18.x with functional components and hooks
- **Routing**: React Router DOM v6 for client-side navigation
- **Styling**: Tailwind CSS with Material Tailwind components
- **Build Tool**: Vite for fast development and optimized builds
- **HTTP Client**: Axios for API communication

### Database Design

- **Type**: Document-based (MongoDB)
- **Schema**: Mongoose models with embedded documents
- **Characters**: Flexible document structure with nested abilities
- **Classes/Races**: JSON-based configurations with dynamic properties

## Project Structure

``` sh
project-root/
├── backend/                    # Node.js/Express API server
│   ├── app.js                 # Main Express application
│   ├── routes/
│   │   ├── apiRouter.js       # Central API routing hub
│   │   └── rpg.js            # RPG game mechanics controller
│   ├── models/
│   │   ├── characters.js      # MongoDB character schema
│   │   ├── races.js          # Race definitions and traits
│   │   └── states.js         # Game states and conditions
│   ├── static/
│   │   └── rpg/
│   │       └── references/   # AI-generated reference images
│   ├── middleware/            # Express middleware functions
│   └── config/               # Database and server configuration
├── frontend/                  # React client application
│   ├── src/
│   │   ├── App.jsx           # Main application component
│   │   ├── Main.jsx          # Landing page
│   │   └── routes/
│   │       ├── Rpg.jsx       # RPG navigation hub
│   │       └── rpg/          # RPG feature components
│   │           ├── Sheets.jsx    # Character sheet viewer
│   │           ├── Classes.jsx   # Character classes
│   │           └── Showcase.jsx  # Races and states display
│   ├── public/               # Static assets and index.html
│   └── package.json          # Frontend dependencies
├── database/                 # Database scripts and samples
│   └── sample_data.sql      # Sample data for development
└── README.md                # This documentation
```

## Core Features

### Character Management System

- **Character Sheets**: Dynamic character sheet display with MongoDB document flexibility
- **Character Classes**: Class-based progression system with abilities and bonuses
- **Character Races**: Racial traits and bonuses affecting character capabilities
- **Game States**: Status effects and conditions management

### AI-Generated Reference Images System

The platform features an innovative **AI-generated imagery system** that provides visual references for characters, races, and game states:

#### Image Organization

- **Storage**: Images stored in `backend/static/rpg/references/` directory
- **Naming Convention**: `{type}_{mongoObjectId}_{imageIndex}.{extension}`
  - `characters_64ff1e2eb54467e9c99031ba_0.png` - Character reference image
  - `races_6509e0cfa44ab0dcb1afb524_0.png` - Race reference image  
  - `states_650af11799d5f2f359e65c95_0.jpg` - Game state visual reference

#### Database Integration

Each MongoDB document includes a `references` field:

```javascript
references: {
  type: [String],        // Array of image filenames
  default: []           // Empty array if no images
}
```

#### API Access

Images are served through a dedicated endpoint:

```javascript
GET /api/rpg/references/:imgName
// Serves images from backend/static/rpg/references/ directory
```

#### Visual Content Categories

- **Character References**: AI-generated portraits and character visualizations
- **Race Illustrations**: Visual representations of different fantasy races
- **State Icons**: Status effect and condition imagery for game mechanics

This system allows the platform to provide rich visual context for TTRPG elements without requiring manual artwork creation, leveraging AI to generate consistent and thematic imagery.

### Legacy Authentication

- Simple session-based authentication (pre-Azure AD B2C)
- Basic user registration and login functionality
- Character ownership and access control

### API Architecture

- **RESTful Design**: Standard HTTP methods with JSON responses
- **Route Organization**: Centralized routing through `apiRouter.js`
- **Error Handling**: Basic try-catch patterns with console logging
- **CORS Configuration**: Permissive CORS for development flexibility

## Development Setup

### Prerequisites

- Node.js 20.x or higher
- MongoDB 6.x (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   git checkout hp-main
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Database Setup**

   ```bash
   # Ensure MongoDB is running locally or configure connection string
   # Import sample data if needed
   mongoimport --db ragnar --collection characters --file database/sample_data.json
   ```

5. **AI Reference Images**

   The system includes pre-generated AI reference images in `backend/static/rpg/references/`. These images are automatically served through the Express static middleware and linked to MongoDB documents via the `references` field array.

## Architecture Evolution

### From Legacy to Modern

This legacy implementation served as the foundation for the modern platform, demonstrating the evolution from:

**Legacy (hp-main)**:

- MongoDB document storage
- Express.js middleware architecture  
- React with component-level state
- Basic authentication
- Monolithic deployment

**Modern (jh-main)**:

- PostgreSQL with Entity Framework
- .NET Core Web API architecture
- Angular with NgRx state management
- Azure AD B2C authentication
- Microservices with Azure deployment

## Team and History

### HeatPeak Studio Phase

- **Period**: Initial development and concept validation
- **Focus**: Core TTRPG mechanics and user interface
- **Social Media**: @heatpeakstudio on Instagram
- **Architecture**: Traditional MERN stack approach

### Transition to JuggleHive

The platform evolved to the JuggleHive team implementation with:

- Cloud-native architecture on Azure
- Enterprise authentication and security
- Modern frontend frameworks and tools
- Scalable microservices design

## License

This project is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nc-nd/4.0/).

### Commercial Use

For commercial licensing inquiries, please contact the development team.

## Related Repositories

- **jh-main**: Modern Angular/.NET Core implementation
- **jh-devops**: DevOps infrastructure and CI/CD pipelines  
- **jh-cloud**: Cloud services and infrastructure as code
- **hp-jh-transition**: Migration and transition utilities

---

*This legacy implementation represents the foundational work that evolved into the modern Ragnar TTRPG Platform. While maintained for reference, active development continues in the jh-main branch with modern cloud-native architecture.*
