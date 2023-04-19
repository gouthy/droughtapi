
const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require("dotenv").config();

const port = process.env.PORT ;

console.log(process.env.KEY_ID)
const app = express(); 

app.use(express.json());
app.use('/api/droughtstatus', require('./routes/droughtRoutes'));
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}`));
