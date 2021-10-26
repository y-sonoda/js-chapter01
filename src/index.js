import "./styles.css";

/**
 * ランダムに生成された自然数の中から、偶数、奇数、素数に分類するプログラム
 * 出力結果は、それぞれ偶数、奇数、素数の配列に格納してください。
 * 素数かつ偶数（２だけですが）、素数かつ奇数の数は、素数の配列にだけ格納してください
 * (↑つまり素数の判定を先にやればいいのです)
 * 乱数を生成するプログラムはコチラで用意します。
 * ググれば秒で答えが出てきますが、自分で考えてみてください。
 */

/**
 * ヒント①：偶数、奇数の判定
 * ２で割った余りが0であれば偶数、そうでなければ奇数です
 * 余りの計算には、%演算子を使います
 */

/**
 * ヒント②:素数の判定
 * 素数とは、1より大きい自然数で、1と自分自身でしか割り切れない自然数のことです。
 * 素数ではない数の方が圧倒的に多いです。なので、素数でないものを探した方が早いです。
 * つまり、自分自身を２から自分自身まで順番に割っていき、余りが０の時があれば、それは素数ではありません。
 */

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
  for (let i = 2; i < num; i++) {
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
console.log(result);
