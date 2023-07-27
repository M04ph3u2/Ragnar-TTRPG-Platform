const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require('path');
const apiRouter = require('./apiRouter.js');

app.use(express.static(path.join(__dirname, "/../frontend/build")));

// sending the React app if conditions are met
app.use((req, res, next) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    } else {
        next();
    }
});

// middleware
app.use(express.json());
app.use('/api', apiRouter);

// connect MongoDB
mongoose.connect('mongodb+srv://admin:9yRFhKEgbzFqQU9i@bestdbever.kplqcma.mongodb.net/?retryWrites=true&w=majority').then(() => {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
