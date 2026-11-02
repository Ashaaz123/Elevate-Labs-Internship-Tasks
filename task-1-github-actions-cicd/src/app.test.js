const request = require('supertest');
const app = require('./app');

describe('API Endpoints Verification', () => {
  test('GET /health returns healthy status code 200', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('healthy');
    expect(response.body.service).toBe('nodejs-demo-app');
  });

  test('GET / returns HTML landing page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Elevate Labs DevOps Demo App');
  });

  test('POST /api/calculate performs addition properly', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ a: 15, b: 25, operation: 'add' });
    expect(response.statusCode).toBe(200);
    expect(response.body.result).toBe(40);
  });

  test('POST /api/calculate prevents division by zero', async () => {
    const response = await request(app)
      .post('/api/calculate')
      .send({ a: 10, b: 0, operation: 'divide' });
    expect(response.statusCode).toBe(400);
    expect(response.body.error).toContain('Division by zero');
  });
});
