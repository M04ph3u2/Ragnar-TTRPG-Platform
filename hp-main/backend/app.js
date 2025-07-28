/*
 * HeatPeak Studio TTRPG Platform - Legacy Backend Server
 * 
 * This is the main Express.js server for the original HeatPeak Studio TTRPG platform.
 * It represents the initial implementation of the system using Node.js, Express, and MongoDB.
 * This legacy codebase showcases the evolution from early prototype to modern architecture.
 * 
 * Key Technologies:
 * - Express.js for RESTful API server
 * - MongoDB with Mongoose ODM for data persistence
 * - CORS for cross-origin resource sharing
 * - Helmet for security middleware
 * - Static file serving for frontend assets
 * 
 * Architecture Pattern:
 * - Monolithic server serving both API and static frontend
 * - Document-based data modeling with MongoDB
 * - RESTful API design with centralized routing
 * 
 * Historical Context:
 * This represents the original "Ragnar" TTRPG concept under the HeatPeak Studio brand,
 * before the transition to Juggle Hive and modern .NET/Angular architecture.
 */

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./apiRouter.js');

// Security and parsing middleware configuration
app.use(cors({
  origin: ['https://heatpeakstudio.com/'], // Original HeatPeak Studio domain
  credentials: true // Allow cookies and authentication headers
}));
app.use(express.json()); // Parse JSON request bodies
app.use(helmet()); // Security headers and protection

// API Routes - All API endpoints are handled through the centralized router
app.use('/api', apiRouter);

// Static File Serving - Serve the frontend built assets
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// SPA Fallback - Handle client-side routing by serving index.html
// This ensures that frontend routes (like /character, /skills) work properly
app.get('/*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  }
});

// connect MongoDB
mongoose.connect('mongodb+srv://???/RPG').then(() => {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
