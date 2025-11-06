const request = require('supertest');
const app = require('../app');

describe('API Jokes', () => {
  test('GET /jokes devrait retourner un tableau', async () => {
    const response = await request(app).get('/jokes');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('GET /jokes/random devrait retourner une blague', async () => {
    const response = await request(app).get('/jokes/random');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('question');
    expect(response.body).toHaveProperty('answer');
  });

  test('POST /jokes devrait créer une blague', async () => {
    const newJoke = {
      question: 'Test?',
      answer: 'Test!'
    };
    const response = await request(app).post('/jokes').send(newJoke);
    expect(response.status).toBe(201);
  });

   test('GET /jokes/:id devrait retourner une blague spécifique', async () => {
    const response = await request(app).get('/jokes/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
    expect(response.body).toHaveProperty('question');
    expect(response.body).toHaveProperty('answer');
  });

  test('GET /jokes/:id devrait retourner 404 pour une blague inexistante', async () => {
    const response = await request(app).get('/jokes/999');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error');
  });

  test('POST /jokes devrait retourner 400 si question manquante', async () => {
    const response = await request(app)
      .post('/jokes')
      .send({ answer: 'Réponse sans question' });
    expect(response.status).toBe(400);
  });

  test('POST /jokes devrait retourner 400 si réponse manquante', async () => {
    const response = await request(app)
      .post('/jokes')
      .send({ question: 'Question sans réponse?' });
    expect(response.status).toBe(400);
  });
});