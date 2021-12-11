export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
}

export function orderByProps (obj, array) {
  let oldObj = {}, newObj = {};

  array.forEach(b => Object.keys(obj).forEach(a => {
    if (a === b) newObj[b] = obj[a];
  }));

  for (const prop in obj) {
    if (!keyInObj(newObj, prop)) oldObj[prop] = obj[prop];
  }
  Object.keys(oldObj).sort().forEach(key => newObj[key] = obj[key]);
  return newObj;
}

function keyInObj(obj, key) {
  for (const k in obj) if (k === key) return true;
  return false;
}
