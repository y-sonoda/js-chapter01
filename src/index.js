import "./styles.css";

/**
 * generate random number
 * @param {number} min minimun number
 * @param {number} max maximum number
 * @returns {number} random number
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

/**
 * generate array of random numbers
 * @param {number} times elements count
 * @returns {number[]} array of random numbers
 */
function getRamdomNumbers(times = 100) {
  const randomNumbers = [];
  for (let i = 0; i < times; i++) {
    randomNumbers.push(getRandomInt(1, 100));
  }
  return randomNumbers;
}

/** ここから */

/**
 * 偶数ならtrue, 奇数ならfalseを返す関数
 * @param {number} num current number
 * @returns {boolean} result
 */
function findEvenOrOdd(num) {
  if (num % 2 === 0) return true;
  else return false;
}

/**
 * 素数ならtrue, それ以外はfalseを返す関数
 * @param {number} num current number
 * @returns {boolean} result
 */
function findPrimeNumber(num) {
  /** 1は素数とは認めない */
  if (num === 1) return false;

  /** 2は素数である */
  if (num === 2) return true;

  /** ２以降の素数は絶対に奇数（偶数だと２で割り切れてしまう） */
  if (num % 2 === 0) return false;

  let isPrimeNumber = true;
  for (let i = 2; i < Math.ceil(Math.sqrt(num)); i++) {
    // １と自分自身以外で割り切れる数字があれば素数ではない
    if (num % i === 0) {
      isPrimeNumber = false;
      break;
    }
  }
  return isPrimeNumber;
}

const randomNumbers = getRamdomNumbers(100);
const result = {
  even: [],
  odd: [],
  prime: []
};

for (let i = 0; i < randomNumbers.length; i++) {
  const num = randomNumbers[i];
  // 先に素数の判定をして、素数なら以降の判定はしない。
  if (findPrimeNumber(num)) {
    result.prime.push(num);
  } else {
    if (findEvenOrOdd(num)) {
      result.even.push(num);
    } else {
      result.odd.push(num);
    }
  }
}

/** 結果発表 */
// console.log(result);

/**
 * Question2
 * 与えられた自然数を素因数分解するプログラムも書いてみましょう。
 * 素因数分解とは、ある自然数を素数の積の形で表すことです。
 * 例１）　60  = 2 * 2 * 3 * 5 = 2^2 * 3 * 5
 * 例２）　210 = 2 * 3 * 5 * 7
 * 出力結果は配列に格納してください。前述の例だと、
 * 例１）　60 -> [2, 2, 3, 5]
 * 例２）　210 -> [2, 3, 5, 7]
 * となります。
 */

/**
 * 先ほど作った素数を判定する関数を使い、素数の配列を予め用意しておくのが楽チンです。
 * 1000までで、素因数分解したときに、最も多い因数とその組み合わせはなんでしょう？
 * （計算が得意な方なら暗算できちゃいますねw）
 */

/**
 * 大きな数を計算させようとすると、フリーズする可能性があります！！以下を遵守してください。
 *  - 最大値は、1000までにとどめましょう。
 *  - 実行時以外はコメントアウトしましょう！！
 */

function primeFactorization(n, primeNumbers, rootN) {
  const result = [];

  let i = 0;
  while (primeNumbers[i] <= rootN) {
    const p = primeNumbers[i];
    if (n % p === 0) {
      result.push(p);
      n = n / p;
    } else {
      i++;
    }
  }
  if (n !== 1) result.push(n);
  return result;
}

function iter(n) {
  const rootN = Math.ceil(Math.sqrt(n));
  const numbers = [...Array(rootN).keys()].map((i) => ++i);
  const primeNumbers = numbers.filter((n) => findPrimeNumber(n));
  for (let i = 2; i < n; i++) {
    const product = primeFactorization(i, primeNumbers, rootN);
    console.log(i, product);
  }
}
// iter(200);
