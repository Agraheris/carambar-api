const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar API',
      version: '1.0.0',
      description: 'API REST de blagues Carambar pour le projet de sélection CDA Wild Code School',
      contact: {
        name: 'Clément',
        url: 'https://github.com/Agraheris/carambar-api',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur de développement',
      },
      {
        url: 'https://carambar-api.onrender.com',
        description: 'Serveur de production',
      },
    ],
    tags: [
      {
        name: 'Jokes',
        description: 'Endpoints pour gérer les blagues Carambar',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Chemin vers tes fichiers de routes
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;