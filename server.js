const express = require('express');
const connectDB = require('./config/db');
connectDB();

const app = express();
app.get('/', (req, res) => res.send('API coming soon...'));

const PORT = process.env.PORT || 5999;
app.listen(PORT, console.log
    ("Listening on port " + PORT));