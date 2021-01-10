/* eslint-disable class-methods-use-this */
import json from './Parser';

import read from './Reader';

export default class GameSavingLoader {
  load() {
    return (async () => {
      try {
        const data = await read();
        const value = await json(data)
        return value;
      } catch {
        throw new Error('Ошибка!')
      }
      
    })
  }
}

// const loader = new GameSavingLoader();

// console.log(loader.load().then((response) => response));


// return new Promise((resolve, reject) => {
    //   const data = new Promise((resolve, reject) => {
    //     resolve(read());
    //   });
    //   data.then((response) => console.log(json(response)));
    //   resolve(data);
    // });