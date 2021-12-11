// export const obj = {
//   name: 'мечник',
//   health: 10,
//   level: 2,
//   attack: 80,
//   defence: 40
// }
//
// export function orderByProps (obj, array) {
//   let oldObj = {}, newObj = {};
//
//   array.forEach(b => Object.keys(obj).forEach(a => {
//     if (a === b) newObj[b] = obj[a];
//   }));
//
//   for (const prop in obj) {
//     if (!keyInObj(newObj, prop)) oldObj[prop] = obj[prop];
//   }
//   Object.keys(oldObj).sort().forEach(key => newObj[key] = obj[key]);
//   return newObj;
// }
//
// function keyInObj(obj, key) {
//   for (const k in obj) if (k === key) return true;
//   return false;
// }

export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
}

export function getSkill (num) {
  return Object.values(character.special).find(skill => skill.id === num);
}
