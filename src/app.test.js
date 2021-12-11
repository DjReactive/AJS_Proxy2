import {orderByProps, obj} from './app.js';

test('Character Sorting function ', () => {
  const objEqual = {
    name: 'мечник',
    level: 2,
    attack: 80,
    defence: 40,
    health: 10
  }
  expect(orderByProps(obj, ['level', 'name'])).toEqual(objEqual);
});
