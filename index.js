
const express = require('express');
const dotenv = require("dotenv").config();

const port = process.env.PORT ;

const app = express(); 

app.use(express.json());
app.use('/api/droughtstatus', require('./routes/droughtRoutes'));

app.listen(port, () => console.log(`Server running on port ${port}`));
