const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json()); 

const jokeRoutes = require('./routes/jokes');

app.use('/jokes', jokeRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'API Carambar OK ✅' });
});

module.exports = app;