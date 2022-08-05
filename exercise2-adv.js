/**
 * A navigator direction.
 * @typedef {('n' | 's' | 'w' | 'e')} Direction
 */

/**
 * Function that will return true if the walk the app gives
 * you will take you exactly ten minutes (you don't want to be early or late!)
 * and will, of course, return you to your starting point.
 * In this advanced version, no cross of starting points are admitted
 * @param {Direction[]} input - An array of directions
 * @returns {boolean} Returns true for valid path, false otherwise
 */
function exercise2Advanced (input) {
  if (input.length !== 10) {
    return false
  }

  const directions = input
    .reduce((acc, curr, index) => {
      acc[curr] += 1
      if (index < (input.length - 1)) {
        acc.crossed = acc.crossed || (acc.n + acc.e > 0 && acc.n === acc.s && acc.e === acc.w)
      }
      return acc
    }, {
      n: 0,
      s: 0,
      e: 0,
      w: 0,
      crossed: false
    })
  return directions.crossed ? false : (directions.n === directions.s && directions.e === directions.w)
}

module.exports = exercise2Advanced
