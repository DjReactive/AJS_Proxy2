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

import { getSkill } from './app';

test('Get skill of character', () => {
  const {
    id, name, icon, description = 'Описание недоступно',
  } = getSkill(8);
  expect({
    id, name, icon, description,
  }).toEqual({
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  });
});

test('Get skill of character (desc)', () => {
  const {
    id, name, icon, description = 'Описание недоступно',
  } = getSkill(9);
  expect({
    id, name, icon, description,
  }).toEqual({
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  });
});
