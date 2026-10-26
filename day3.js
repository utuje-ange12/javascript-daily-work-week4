// Week 4 - Day 3: Function Factory (12 functions + tests)
// Functions are tested with regular values and edge cases.
// Run with: node day3.js

const assert = require("node:assert/strict");

// 1. square(n): return the square of a number
// PSEUDOCODE: multiply n by itself and return the result.
function square(n) {
  return n * n;
}
assert.equal(square(4), 16);
assert.equal(square(-3), 9);
assert.equal(square(0), 0);
console.log("1. square: PASS");

// 2. isEven(n): return whether a number is even
// PSEUDOCODE: if n modulo 2 is 0, return true; otherwise false.
function isEven(n) {
  return n % 2 === 0;
}
assert.equal(isEven(8), true);
assert.equal(isEven(7), false);
assert.equal(isEven(0), true);
assert.equal(isEven(-4), true);
console.log("2. isEven: PASS");

// 3. celsiusToFahrenheit(c): convert Celsius to Fahrenheit
// PSEUDOCODE: multiply Celsius by 9/5, then add 32.
function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
assert.equal(celsiusToFahrenheit(0), 32);
assert.equal(celsiusToFahrenheit(100), 212);
assert.equal(celsiusToFahrenheit(-40), -40);
console.log("3. celsiusToFahrenheit: PASS");

// 4. fahrenheitToCelsius(f): convert Fahrenheit to Celsius
// PSEUDOCODE: subtract 32 from Fahrenheit, then multiply by 5/9.
function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}
assert.equal(fahrenheitToCelsius(32), 0);
assert.equal(fahrenheitToCelsius(212), 100);
assert.equal(fahrenheitToCelsius(-40), -40);
console.log("4. fahrenheitToCelsius: PASS");

// 5. formatPrice(amount, currency): format a price with a currency
// PSEUDOCODE: format amount with thousands separators and append currency.
function formatPrice(amount, currency = "RWF") {
  return `${amount.toLocaleString("en-US")} ${currency}`;
}
assert.equal(formatPrice(5000), "5,000 RWF");
assert.equal(formatPrice(1250000), "1,250,000 RWF");
assert.equal(formatPrice(49.5, "USD"), "49.5 USD");
assert.equal(formatPrice(0), "0 RWF");
console.log("5. formatPrice: PASS");

// 6. getGrade(score): return a letter grade or an invalid-score message
// PSEUDOCODE: reject non-numbers or scores outside 0-100; then check grade ranges.
function getGrade(score) {
  if (typeof score !== "number" || !Number.isFinite(score) ||
      score < 0 || score > 100) {
    return "Invalid score";
  }
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  if (score >= 50) return "D";
  return "F";
}
assert.equal(getGrade(85), "A");
assert.equal(getGrade(70), "B");
assert.equal(getGrade(60), "C");
assert.equal(getGrade(50), "D");
assert.equal(getGrade(49), "F");
assert.equal(getGrade(100), "A");
assert.equal(getGrade(101), "Invalid score");
assert.equal(getGrade("abc"), "Invalid score");
console.log("6. getGrade: PASS");

// 7. max(...numbers): find the largest number without Math.max
// PSEUDOCODE: if there are no numbers, return undefined; otherwise track the largest.
function max(...numbers) {
  if (numbers.length === 0) return undefined;
  let biggest = numbers[0];
  for (const number of numbers) {
    if (number > biggest) biggest = number;
  }
  return biggest;
}
assert.equal(max(3, 9, 2), 9);
assert.equal(max(-5, -1, -10), -1);
assert.equal(max(7), 7);
assert.equal(max(), undefined);
console.log("7. max: PASS");

// 8. capitalize(word): capitalize first letter and lowercase the rest
// PSEUDOCODE: if empty, return empty; otherwise combine uppercase first letter and lowercase remainder.
function capitalize(word) {
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
assert.equal(capitalize("kigali"), "Kigali");
assert.equal(capitalize("RWANDA"), "Rwanda");
assert.equal(capitalize("a"), "A");
assert.equal(capitalize(""), "");
console.log("8. capitalize: PASS");

// 9. countVowels(text): count a, e, i, o, u
// PSEUDOCODE: convert text to lowercase; count each character that is a vowel.
function countVowels(text) {
  let count = 0;
  for (const letter of text.toLowerCase()) {
    if ("aeiou".includes(letter)) count++;
  }
  return count;
}
assert.equal(countVowels("Kigali"), 3);
assert.equal(countVowels("HELLO World"), 3);
assert.equal(countVowels("rhythm"), 0);
assert.equal(countVowels(""), 0);
console.log("9. countVowels: PASS");

// 10. isPalindrome(text): check if text reads the same backwards (ignoring case)
// PSEUDOCODE: lowercase text, reverse it, and compare it to the original lowercase text.
function isPalindrome(text) {
  const clean = text.toLowerCase();
  return clean === clean.split("").reverse().join("");
}
assert.equal(isPalindrome("racecar"), true);
assert.equal(isPalindrome("Kigali"), false);
assert.equal(isPalindrome("Level"), true);
assert.equal(isPalindrome(""), true);
console.log("10. isPalindrome: PASS");

// 11. repeatAction(times, callback): call a callback once for each round
// PSEUDOCODE: repeat from 1 to times and call callback with the round number.
function repeatAction(times, callback) {
  for (let round = 1; round <= times; round++) {
    callback(round);
  }
}
const rounds = [];
repeatAction(3, (round) => rounds.push(round));
assert.deepEqual(rounds, [1, 2, 3]);
repeatAction(0, () => assert.fail("Callback should not run for zero times"));
console.log("11. repeatAction: PASS");

// 12. createCounter(start): create a counter with increment, decrement, and getValue
// PSEUDOCODE: keep a private value and return three functions that access or change it.
function createCounter(start = 0) {
  let value = start;
  return {
    increment: () => ++value,
    decrement: () => --value,
    getValue: () => value
  };
}
const counter = createCounter();
assert.equal(counter.getValue(), 0);
assert.equal(counter.increment(), 1);
assert.equal(counter.increment(), 2);
assert.equal(counter.decrement(), 1);
const anotherCounter = createCounter(10);
assert.equal(anotherCounter.increment(), 11);
assert.equal(counter.getValue(), 1); // counters are independent
console.log("12. createCounter: PASS");

// Extra function factory example from class guidance:
// makeDiscount(percent) returns a function that calculates a discounted price.
function makeDiscount(percent) {
  return (price) => price - (price * percent) / 100;
}
assert.equal(makeDiscount(10)(5000), 4500);
assert.equal(makeDiscount(50)(5000), 2500);
assert.equal(makeDiscount(100)(5000), 0);
console.log("Extra. makeDiscount: PASS");

console.log("\nAll function tests passed successfully.");
