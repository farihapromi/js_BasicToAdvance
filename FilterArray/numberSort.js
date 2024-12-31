const numbers = [1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 5, 1];
// numbers.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(numbers);

//map
const result = numbers.map((curElem) => curElem * curElem);
console.log(result);
