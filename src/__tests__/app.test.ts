import request from 'supertest';
import app from '../app';

describe('Get /', () => {
  it('should display Hello World!', async () => {
    await request(app)
      .get('/')
      .expect(200)
      .expect({ message: 'Hello World!' });
  });
});
