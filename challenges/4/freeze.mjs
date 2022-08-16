// —————————————————————————————————————————————————————————————————————————————
// Challenge: Decorate frozen objects
// —————————————————————————————————————————————————————————————————————————————
// Write the bodies to `setData` and `getData` below so that the tests pass.
//
// —————————————————————————————————————————————————————————————————————————————
// Hint: Frozen objects cannot be modified.
// You must find a way to assign data to them.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// —————————————————————————————————————————————————————————————————————————————

/**
 * Assign some value to `object` so it can be retrieved later.
 *
 * @template T
 * @param {Readonly<object>} object
 * @param {T} value
 * @returns {void}
 */
export function setData(object, value) {
  Object.assign(object,value);
}

/**
 * Retrieve some value from `object`.
 *
 * @template T
 * @param {Readonly<object>} object
 * @returns {T | undefined}
 */
export function getData(object) {
  const value = Object.create({});
  for(let key in object) {
    if(object.hasOwnProperty(key)) {
      Object.assign(value, object[key]);
    }
  }
  return value;
}
