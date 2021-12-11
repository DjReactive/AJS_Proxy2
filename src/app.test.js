// import {orderByProps, obj} from './app.js';
//
// test('Character Sorting function ', () => {
//   const objEqual = {
//     name: 'мечник',
//     level: 2,
//     attack: 80,
//     defence: 40,
//     health: 10
//   }
//   expect(orderByProps(obj, ['level', 'name'])).toEqual(objEqual);
// });

import {character, getSkill} from './app.js';

test('Get skill of character (id)', () => {
  const {id, name, icon, description = 'Описание недоступно'} = getSkill(8);
  expect(id).toEqual(8);
});

test('Get skill of character (desc)', () => {
  const msg = 'Описание недоступно';
  const {id, name, icon, description = msg} = getSkill(9);
  expect(description).toEqual(msg);
});
