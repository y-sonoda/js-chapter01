import "./styles.css";

/**
 * generate random number
 * @param {Number} min minimun number
 * @param {Number} max maximum number
 * @returns {Number} random number
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * generate array of random numbers
 * @param {Number} times elements count
 * @returns {Number[]} array of random numbers
 */
export function getRamdomNumbers(times = 100) {
  const randomNumbers = [];
  for (let i = 0; i < times; i++) {
    randomNumbers.push(getRandomInt(1, 100));
  }
  return randomNumbers;
}
