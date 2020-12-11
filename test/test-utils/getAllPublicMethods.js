'use strict';

module.exports = (obj) => {
  const properties = new Set();
  let currentObj = obj;
  do {
    Object.getOwnPropertyNames(currentObj).forEach((item) => {
      if (!item.startsWith('_') && item !== 'constructor') {
        properties.add(item);
      }
    });
  } while ((currentObj = Object.getPrototypeOf(currentObj)));
  return Array.from(properties).
    filter((item) => typeof obj[item] === 'function').
    sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
};
