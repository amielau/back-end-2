const express = require('express');
const cors = require('cors');
const { getHouses } = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/house/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);


app.listen(4004, () => {
    console.log('docked at port 4004');
});

