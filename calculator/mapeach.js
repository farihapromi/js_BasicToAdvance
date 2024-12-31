let numbers = [1, 2, 3, 4, 5];
// perform action on each element
numbers.forEach((curElem) => {
  console.log(curElem * 2);
});
// creates new array wih transformed element

const doubleArr = numbers.map((curElem) => {
  return curElem * 2;
});
console.log(doubleArr);
