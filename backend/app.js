const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require('dotenv').config();

// middleware
const corsOptions = {
    origin: 'https://heatpeakstudio.com'
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect('mongodb + srv://admin:9yRFhKEgbzFqQU9i@bestdbever.kplqcma.mongodb.net/?retryWrites=true&w=majority').then(() => {
    const PORT = 4000;
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({ message: "This website is under construction! Stay tuned at https://www.instagram.com/heatpeakstudio/ for more infos~" });
});