//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// Original array of strings
// const words = ["APPLE", "banana", "cherry", "date"];
// const result = words.map((curElem) => {
//   return curElem.toLocaleUpperCase();
// });
// console.log(result);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

const numbers = [2, 3, 4, 6, 5, 7, 8];
const result = numbers.map((curElem) => {
  if (curElem % 2 == 0) {
    return curElem * curElem;
  } else return curElem;
});
console.log(result);
