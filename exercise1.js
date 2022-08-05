/**
 * Check for string repetition
 * @param {string[]} items
 * @returns {boolean} Returns true if items contains repetitions
 */
function checkHasRepetition (items) {
  return [...new Set(items)].length !== items.length
}

/**
 * Giving an array of strings, returns the counter of those items where at least a char is repeated
 * @param {string[]} input - Array of string to check
 * @returns {number} Returns the counter of items where at least a char is repeated
 */
function exercise1 (input) {
  if (!Array.isArray(input)) {
    throw new Error('Invalid input: exercise1 is expecting an array.')
  }

  if (input.some((item) => typeof item !== 'string')) {
    throw new Error('Invalid input: item in array shoud be all strings.')
  }

  return input
    .map((item) => item.split(''))
    .reduce((accumulator, currentSplittedItem) =>
      checkHasRepetition(currentSplittedItem) ? accumulator + 1 : accumulator, 0)
}

module.exports = exercise1
