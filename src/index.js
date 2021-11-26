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
export function getRandomNumbers(times = 100) {
  const randomNumbers = [];
  for (let i = 0; i < times; i++) {
    randomNumbers.push(getRandomInt(1, 100));
  }
  return randomNumbers;
}

/**
 * ランダムな配列Aを作る（済）
 * Aをループさせる
 * 各要素に対して、偶数、奇数、素数を判定する
 * 　・偶数（奇数）を判定する関数を作る
 * 　・素数を判定する関数を作る
 * 　・結果を新しい配列Bに格納する
 */

const numbers = getRandomNumbers();
const result = iterator(numbers);

function iterator(numbers) {
  const result = {
    even: [],
    odd: [],
    prime: []
  };
  for (let i = 0; i < numbers.length; i++) {
    const n = numbers[i];
    if (isPrimeNumber(n)) {
      result.prime.push(n);
    } else {
      if (isEvenNumber(n)) {
        result.even.push(n);
      } else {
        result.odd.push(n);
      }
    }
  }
  return result;
}

/**
 * 偶数、奇数を判定する関数
 * 数字を受け取って、偶数ならばtrue、奇数ならばfalseを返す
 */
function isEvenNumber(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * 素数を判定する関数
 * 数字を受け取って、素数ならばtrue,そうでなればfalseを返す
 */
function isPrimeNumber(num) {
  let i = 2;
  let isPrimeNumber = true;

  while (i < num) {
    if (num % i === 0) {
      isPrimeNumber = false;
      break;
    }
    i = i + 1;
  }
  return isPrimeNumber;
}

/**
 * 素因数分解
 * 2, 3, 5, 7, 11, 13, ...
 * ある自然数nを素因数分解する場合、２から√nまでの素数を順番に割っていき、
 * その割った数を、配列に格納していく。
 */

function primeFactarization(num) {
  /** 2から√numまでの素数の配列 */
  const rootNum = Math.ceil(Math.sqrt(num));
  let i = 2;
  const primeNumbers = [];
  while (i < rootNum) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
    i++;
  }

  /**素因数分解 */
  const result = [];
  let j = 0;
  while (primeNumbers[j] <= rootNum) {
    const p = primeNumbers[j];
    if (num % p === 0) {
      result.push(p);
      num = num / p;
    } else {
      j++;
    }
  }
  if (num !== 1) result.push(num);
  return result;
}

const result2 = primeFactarization(7850);
console.log(result2);
