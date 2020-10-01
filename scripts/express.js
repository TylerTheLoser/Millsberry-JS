const express = require('express')

const exapp = express();

exapp.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listenerCount(PORT, console.log('Server started on port ${PORT}'));