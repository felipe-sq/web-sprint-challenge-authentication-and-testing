// Write your tests here
const db = require('../data/dbConfig.js');
const request = require('supertest');
const server = require('./server.js');

const captMarvel = {username: "Captain Marvel", password: "password"};

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});

beforeEach(async () => {
  await db('users').truncate();
});

afterAll(async () => {
  await db.destroy();
});

// test was already included as part of the server.test.js file
test('sanity', () => {
  expect(true).toBe(true);
})

describe('auth endpoints', () => {
  describe('[POST] /register', () => {
    test('should return a status code of 201', async () => {
      const res = await request(server).post('/api/auth/register').send(captMarvel);
      expect(res.status).toBe(201);
    });
    test('should return a status code of 400 if username is not provided', async () => {
      const res = await request(server).post('/api/auth/register').send({password: "password"});
      expect(res.status).toBe(400);
    });
    test('should return the correct format of user upon successful registration', async () => {
      const res = await request(server).post('/api/auth/register').send(captMarvel);
      expect(res.body).toMatchObject({id: 1, username: "Captain Marvel", password: expect.anything()});
    })
  });

  describe('[POST] login', () => {
    test('should return a status code of 200', async () => {
      await request(server).post('/api/auth/register').send(captMarvel);
      const res = await request(server).post('/api/auth/login').send(captMarvel);
      expect(res.status).toBe(200);
    });
    test('should return a token after successful login', async () => {
      await request(server).post('/api/auth/register').send(captMarvel);
      const res = await request(server).post('/api/auth/login').send(captMarvel);
      expect(res.body).toHaveProperty('token');
    });
    test('should return the correct welcome message after successful login', async () => {
      await request(server).post('/api/auth/register').send(captMarvel);
      const res = await request(server).post('/api/auth/login').send(captMarvel);
      expect(res.body.message).toContain('welcome, Captain Marvel');
    })
    test('should return a status code of 400 if username is not provided', async () => {
      await request(server).post('/api/auth/register').send(captMarvel);
      const res = await request(server).post('/api/auth/login').send({password: "password"});
      expect(res.status).toBe(400);
    });
  });
})

