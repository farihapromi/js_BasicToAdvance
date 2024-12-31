//The find method is used to find the first element in an array that satisfies a provided testing function.
//It returns the first matching element or undefined if no element is found.
const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
const result = numbers.find((curElem) => {
  return curElem > 5;
});
console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
