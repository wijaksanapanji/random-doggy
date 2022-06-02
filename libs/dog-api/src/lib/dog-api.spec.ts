import { getRandomDog } from './dog-api';

describe('getRandomDog', () => {
  it('should return an object with property message and status', async () => {
    const response = await getRandomDog();
    expect(response).toHaveProperty('message');
    expect(response).toHaveProperty('status');
  });
});
