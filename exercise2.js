/**
 * A navigator direction.
 * @typedef {('n' | 's' | 'w' | 'e')} Direction
 */

/**
 * Function that will return true if the walk the app gives
 * you will take you exactly ten minutes (you don't want to be early or late!)
 * and will, of course, return you to your starting point.
 * @param {Direction[]} input - An array of directions
 * @returns {boolean} Returns true for valid path, false otherwise
 */
function exercise2 (input) {
  if (input.length !== 10) {
    return false
  }

  const direction = input
    .reduce((acc, curr) => {
      acc[curr] += 1
      return acc
    }, {
      n: 0,
      s: 0,
      e: 0,
      w: 0
    })
  return direction.n === direction.s && direction.e === direction.w
}

module.exports = exercise2
