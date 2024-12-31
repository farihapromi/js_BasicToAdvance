// copying an array
let fruits = ['apple', 'mango', 'banana'];
const newFruits = [...fruits];
console.log(newFruits);
//concatenating array
const num1 = [1, 2, 3, 4];
const num2 = [7, 8, 9];
const num3 = [...num1, ...num2];
console.log(num3);

//adding elemnt to existing array
const obj = { a: 1, b: 2 };
const newObj = { ...obj, b: 5, c: 6 };
console.log(newObj);
//split characters
const name = 'PROMI';
console.log([...name]);
