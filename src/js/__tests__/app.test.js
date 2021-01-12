import GameSavingLoader from '../app';

const { expect } = require('chai');

it('Object should be returned', async () => {
  const loader = new GameSavingLoader();
  return loader.load().then((response) => expect(response).to.equal('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'));
});
