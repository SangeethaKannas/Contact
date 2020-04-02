const express = require('express');
const connectDB = require('./config/db');
connectDB();

const app = express();

app.use(express.json({extended: false }));
app.use('/api/contact', require('./routes/api/contact'));

const PORT = process.env.PORT || 5999;
app.listen(PORT, console.log
    ("Listening on port " + PORT));