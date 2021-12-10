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
 * Q1
 * ランダムに生成された自然数の配列を
 * 偶数、奇数、素数に分類するプログラムを考えましょう。
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
 * 素数の配列を作る関数
 * 数字numを受け取り、2からnumまでの素数の配列を返す
 */
function getPrimeNumbers(num) {
  let i = 2;
  const primeNumbers = [];
  while (i < num) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
    i++;
  }
  return primeNumbers;
}
console.log(result);

/**
 * Q2
 * 任意の自然数を素因数分解するプログラムを考えましょう。
 * 素因数分解とは、ある自然数を素数の積の形で表すことです。
 *
 * 素因数分解するプログラム
 * ある自然数nを素因数分解する場合、２から√nまでの素数を順番に割っていき、その割った数を、配列に格納していく。
 * 素数pが√n以下である限りループする
 * 　・nがpで割り切れる場合
 *    ・pを結果配列にプッシュする
 *    ・nをnをpで割った商で上書きする
 * 　・nがpで割り切れない場合
 *    ・次の素数で割る
 * （ループから抜ける）
 * 商nを結果配列にプッシュする
 * ＊この時点でnは√n以下の素数で割り切れないので、１か素数
 */
function primeFactarization(num) {
  /** 2から√numまでの素数の配列 */
  const rootNum = Math.ceil(Math.sqrt(num));
  const primeNumbers = getPrimeNumbers(rootNum);

  /** 素因数分解 */
  const result = [];
  let i = 0;
  while (primeNumbers[i] <= rootNum) {
    const p = primeNumbers[i];
    if (num % p === 0) {
      result.push(p);
      num = num / p;
    } else {
      i++;
    }
  }
  if (num !== 1) result.push(num);
  return result;
}

const result2 = primeFactarization(7850);
console.log(result2);

/**
 * Q3
 * 【おまけです】
 * Q2で作ったプログラムを、Q1で使ったランダムな自然数配列に適用してみましょう。
 *
 * アウトプットがわからん
 *
 * また、2〜１０００までの自然数の中で一番因数の多い数は何か探してみましょう。
 *
 * 最小の因数である2を繰り返し掛けた数で、1000以下のものを出す
 * 多分1028の手前の512とかになる
 */

let total = 0;
for (let i = 2; i < 10; i++) {
  // iが10以上ならばループを抜ける
  if (i >= 1000) break;
  total += i;
}
console.log(total); // 45
