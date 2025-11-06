const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

const app = express();


app.use(cors());
app.use(express.json()); 

const jokeRoutes = require('./routes/jokes');

app.use('/jokes', jokeRoutes);


app.get('/', (req, res) => {
  res.json({ 
    message: 'API Carambar OK ✅',
    documentation: 'http://localhost:3000/api-docs'
   });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;