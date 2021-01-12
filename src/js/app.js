/* eslint-disable class-methods-use-this */
import json from './Parser';

import read from './Reader';

export default class GameSavingLoader {
  async load() {
    const response = await read();
    return json(response);
  }
}
