// import * as request from 'supertest';
import request from 'supertest';
import app from '../app';
// const request = require('supertest');

describe('Get /', () => {
  it('should display Hello World!', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect({ message: 'Hello World!' });
  });
});
