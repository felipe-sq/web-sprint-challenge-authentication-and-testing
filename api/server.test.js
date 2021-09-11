// Write your tests here
const db = require('../data/dbConfig.js');
const request = require('supertest');
const server = require('./server.js');

const captMarvel = {username: "Captain Marvel"}
const blackWidow = {username: "Black Widow"}

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
  expect(true).toBe(false)
})

describe('auth endpoints', () => {
  describe('register', () => {
    test('should register a new user', async () => {
      const res = await request(server).post('/api/auth/register').send(captMarvel);
      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty('token');
    });
  });

  describe('login', () => {
    test('should login a user', async () => {
      await request(server).post('/api/auth/register').send(captMarvel);
      const res = await request(server).post('/api/auth/login').send(captMarvel);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('token');
    });
  });
})

