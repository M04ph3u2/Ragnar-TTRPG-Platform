const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const apiRouter = require('./apiRouter.js');

// Collega tutte le richieste che iniziano con "/api" al router API
app.use('/api', apiRouter);

// Servi i file statici nella directory "dist" (assumendo che sia stata creata dalla build di Vite)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Servi l'index.html solo per le richieste relative al frontend (non per le richieste API)
app.get('/*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
  }
});

// middleware
app.use(express.json());

// connect MongoDB
mongoose.connect('mongodb+srv://admin:9yRFhKEgbzFqQU9i@bestdbever.kplqcma.mongodb.net/?retryWrites=true&w=majority').then(() => {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
