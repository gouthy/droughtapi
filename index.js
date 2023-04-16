const PORT = 8000;

import axios from 'axios';

import express from 'express';

import geoblaze from 'geoblaze';

const app = express(); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => { 

}


