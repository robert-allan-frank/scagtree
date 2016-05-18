/**
 Inner function, see export for defintion.

 @private
 @method random
 */
function random(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}

/**
 Create a random number.

 @public
 @method numberRandom
 @param {integer} start=1 The starting number.
 @param {integer} end=5 The ending number.
 @returns {integer} A random number between start and end.
 */
export function numberRandom(start = 1, end = 5) {
  return random(start, end);
}
